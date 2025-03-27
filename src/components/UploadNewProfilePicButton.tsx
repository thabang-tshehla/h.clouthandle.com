import { useRef, useState } from "react";
import ImageUploader, {UploadImageType} from "./ImageUploader";



const UploadNewProfilePicButton = () => {

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [file, setFile] = useState<File | null>(null)
    const [uploadImage, setUploadImage] = useState<UploadImageType | null>(null)

    const handleClick = () => {

        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (!event.target.files || event.target.files.length === 0) {
            console.warn("No file selected.");
            return;
        }

        const inputFile = event.target.files[0];
        if (inputFile) {

            setUploadImage({
                imageSrc:  URL.createObjectURL(inputFile),
                originalName: inputFile.name
            })
            setFile(inputFile);
        }
    };


    console.log(file);
    
    return (
        <div>
            {uploadImage && <ImageUploader uploadImage = {uploadImage} setUploadImage = {setUploadImage} />}
            <input type="file" hidden ref={fileInputRef} onChange={(event) => handleFileChange(event)} />
            <button onClick={handleClick}>Upload</button>
        </div>
    );
};

export default UploadNewProfilePicButton;
