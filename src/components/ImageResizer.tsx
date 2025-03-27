import React, { useState, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; // Import Cropper's CSS

const ImageResizer = ({ src, onCrop }) => {
    const cropperRef = useRef(null);
    const [cropData, setCropData] = useState(null);

    const handleCrop = () => {
        const cropper = cropperRef.current?.cropper;
        if (cropper) {
            // Get the cropped image data URL
            const croppedImage = cropper.getCroppedCanvas().toDataURL();
            setCropData(croppedImage);
            onCrop(croppedImage); // Pass the cropped image to the parent component
        }
    };

    return (
        <div>
            <Cropper
                src={src}
                ref={cropperRef}
                style={{ width: '100%', height: 400 }}
                aspectRatio={1} // Fixed aspect ratio (1:1 square)
                guides={false} // Disable the guides
                dragMode="move" // Enable image dragging
                cropBoxResizable={true} // Allow resizing the crop box
                cropBoxMovable={true} // Allow moving the crop box
            />
            <button onClick={handleCrop}>Crop Image</button>
            {cropData && (
                <div>
                    <h3>Cropped Image:</h3>
                    <img src={cropData} alt="Cropped" style={{ maxWidth: '100%' }} />
                </div>
            )}
        </div>
    );
};

export default ImageResizer;
