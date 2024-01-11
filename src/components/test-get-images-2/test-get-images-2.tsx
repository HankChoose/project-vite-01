import classNames from 'classnames';
import styles from './test-get-images-2.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../constants';
import {  axios_image_file_get  } from '../../apiService';

export interface TestGetImagesProps {
    className?: string;
   
}


export interface TestGetImages2Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestGetImages2 = ({ className }: TestGetImages2Props) => {

    const [imageData, setImageData] = useState<string | null>(null);
    //const imageInfo = '20240108_070912__20210715144349_image_2.jpg';
    const imageInfo = '20240110_055037_CELPIP1_image_2.jpg';
    useEffect(() => {
        
    }, [imageInfo]);

    // Assume fetchAllImageData is defined as in the previous response
    const fetchImageData = async (imageInfo:string) => {
        try {

            const api_url=`${baseUrl}/get-image/${imageInfo}/`
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

    fetchImageData(imageInfo);
    const handleThumbnailClick = (image: any) => {
        
    };
    return (
        <div className={classNames(styles.root, className)}>
            
            <div className={styles.thumbnailContainer}>
                <img
                    src={imageData!}
                    alt="Preview"
                    //onMouseEnter={() => handleThumbnailHover(image.filePreviewUrl)}
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
        </div>
    );
};
