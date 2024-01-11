import classNames from 'classnames';
import styles from './test-get-images.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../constants';

export interface TestGetImagesProps {
    className?: string;
    imageInfo?: string;
   
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestGetImages: React.FC<TestGetImagesProps> = ({ className,imageInfo }: TestGetImagesProps) => {
    const [imageData, setImageData] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState(null);

    
    useEffect(() => {
        const fetchImageData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/get-image/${imageInfo}/`, {
                    responseType: 'arraybuffer',
                });

                const base64Image = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                );

                const imageDataUrl = `data:image/jpeg;base64,${base64Image}`;
                setImageData(imageDataUrl);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };

        fetchImageData();
    }, [imageInfo]);
    
    const handleThumbnailClick = (image: any) => {
        
    };

    const handleThumbnailHover = (image: any) => {
        setSelectedImage(image);
        console.log('handleThumbnailHover0000:');
    };

    const handleThumbnailLeave = () => {
        setSelectedImage(null);
        console.log('handleThumbnailLeave11111:');
    };

    
    const handleLargePictureClose = () => {
        setSelectedImage(null);
    };


    return (
        <div className={classNames(styles.root, className)}>
            
            <div className={styles.thumbnailContainer}>
                <img
                    src={imageData!}
                    alt="Preview"
                    onMouseEnter={() => handleThumbnailHover(imageData)}
                    style={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                        cursor: 'pointer',
                    }}
                    onClick={() =>
                        handleThumbnailClick(imageData)
                    }
                />
            </div>

            {selectedImage && (
                <div
                    onMouseLeave={handleThumbnailLeave}
                    className={styles.largeImageContainer}
                >
                    <img
                        src={imageData!}
                        alt="Selected Image"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            cursor: 'pointer',

                        }}
                        onClick={handleLargePictureClose}
                    />
                    <div className={styles.fileInfoContainer}>
                        click image to close
                    </div>
                      
                </div>
            )}

        </div>
    );
};
