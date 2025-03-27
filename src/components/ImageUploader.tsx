'use client'
import React, { useState, useCallback } from "react";
import Cropper, { Area } from "react-easy-crop";
import SpinnerLoader from "./SpinnerLoader";
import { useAppContext } from "@/contexts/AppContext";
import clouthandleAPI from "@/lib/clouthandleAPI";


const createImage = (url: string): Promise<CanvasImageSource> => {

    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = (error) => reject(error);
    });

}


// Ich brauchen reparieren

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJkbG9tby5jby56YSIsImlhdCI6MTc0MjU1NjkxMn0.c_6PNMpbAZWyLulExH5zlB1rw9KQeHEtibcHO83pYLE'

const getCroppedImg = async (imageSrc: string, cropPixels: Area): Promise<string | null> => {

    try {
        const image = await createImage(imageSrc);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) throw new Error("Canvas context is null");

        canvas.width = cropPixels.width;
        canvas.height = cropPixels.height;

        ctx.drawImage(
            image,
            cropPixels.x,
            cropPixels.y,
            cropPixels.width,
            cropPixels.height,
            0,
            0,
            cropPixels.width,
            cropPixels.height
        );

        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
                if (!blob) {
                    console.error("Canvas toBlob failed.");
                    return;
                }
                resolve(URL.createObjectURL(blob));
            }, "image/jpeg");
        });
    } catch (error) {
        console.error("Error cropping image:", error);
        return null;
    }
};

export interface UploadImageType {
    imageSrc: string,
    originalName: string
}

const ImageUploader = ({ uploadImage, setUploadImage }: {
    uploadImage: UploadImageType;
    setUploadImage: (image: UploadImageType | null) => void;
}) => {


    const { imageSrc, originalName } = uploadImage

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState<number>(1);
    const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState<boolean>(false)

    const { user, setUser } = useAppContext()

    const onCropComplete = useCallback(async (_: any, croppedAreaPixels: Area) => {

        console.log("Cropped Area:", croppedAreaPixels); // Debugging line
        const croppedImg = await getCroppedImg(imageSrc, croppedAreaPixels);
        console.log("Cropped Image URL:", croppedImg); // Debugging line
        setCroppedImageUrl(croppedImg);


    }, [imageSrc]);


    const handleSave = async () => {

        if (!croppedImageUrl) return

        setIsUploading(true)

        const res = await fetch(croppedImageUrl);
        const blob = await res.blob();


        console.log(blob);  // Ensure the blob is valid
        console.log(blob.size); // It should be > 0
        console.log(blob.type);


        const file = new File([blob], "image.png", { type: blob.type });

        console.log(file);

        const formData = new FormData();
        formData.append("file", file, file.name);

        for (let pair of formData.entries()) {
            console.log(pair[0] + ':', pair[1]);
            // Log the details of the file manually
            if (pair[1] instanceof File) {
                console.log('File details:');
                console.log('Name:', pair[1].name);
                console.log('Size:', pair[1].size);
                console.log('Type:', pair[1].type);
            }
        }

        const response = await clouthandleAPI.post('/profile-pictures/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${authToken}`
            },
        })


        console.log(response);

        const user = response.data
        setUser(user)
        setUploadImage(null)
    }


    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-50 flex items-center justify-center'>

            <div className='bg-white rounded p-5 flex flex-col gap-4 items-center'>
                <div className='flex'>close</div>

                <div className='relative h-40 w-40 rounded-full overflow-hidden'>
                    <Cropper
                        image={imageSrc}
                        onCropChange={setCrop}
                        crop={crop}
                        zoom={zoom}
                        cropShape="round"
                        aspect={1}
                        showGrid={false}
                        style={{
                            cropAreaStyle: {
                                color: '#fff',
                                border: 'none'
                            }
                        }}
                        onCropComplete={onCropComplete}
                        maxZoom={4}

                    />
                </div>
                <div>
                    <input
                        type="range"
                        min="1"
                        max="3"
                        step="0.1"
                        value={zoom}
                        onChange={(e) => setZoom(Number(e.target.value))}
                        className="w-full mt-4"
                    />
                </div>
                <div className='flex justify-center w-full'>
                    <button

                        className='rounded w-full py-2 bg-black text-white'
                        onClick={() => handleSave()}
                        disabled={isUploading}
                    >
                        {isUploading ? <SpinnerLoader /> : 'Save'}

                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageUploader