import classNames from 'classnames';
import styles from './test-get-images-arrays.module.scss';
import axios from 'axios';

import React, { useRef, useState, Component, ChangeEvent, useEffect,SetStateAction, Dispatch } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants';
import { saveAs } from 'file-saver';
import { MdDelete } from 'react-icons/md';
import { FaArrowRotateRight } from 'react-icons/fa6';
import { LuExpand } from 'react-icons/lu';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { IoMdDownload,IoMdClose } from 'react-icons/io';


export interface TestGetImagesArraysProps {
    className?: string;
    fileNames: string[]; // Array of filenames to fetch
}

interface ImageData {
  id: number;
  src: string;
  file: File;
  rotation: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestGetImagesArrays = ({ className, fileNames }: TestGetImagesArraysProps) => {
    const [images, setImages] = useState<Array<ImageData>>([]);
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const imageFiles: File[] = [];
    useEffect(() => {
        fetchData();
    }, [fileNames]);

    const fetchData = async () => {
        try {
            const imagePromises = fileNames.map(async (fileName, index) => {
            const response = await axios.get(`${baseUrl}/get-image/${fileName}/`, {
                responseType: 'arraybuffer',
            });

            const base64Image = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ''
                )
            );

            const imageDataUrl = `data:image/jpeg;base64,${base64Image}`;

            // Convert base64 to a Blob
            const byteCharacters = atob(base64Image);
            const byteArrays = [];
            for (let offset = 0; offset < byteCharacters.length; offset += 512) {
                const slice = byteCharacters.slice(offset, offset + 512);
                const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            const blob = new Blob(byteArrays, { type: 'image/jpeg' });

            // Create a File object with the specified name
            const file = new File([blob], fileName, { type: 'image/jpeg' });

            return {
                id: index,
                src: imageDataUrl,
                file: file,
                rotation: 0,
            };
        });

        const loadedImages = await Promise.all(imagePromises);
            setImages(loadedImages);
            console.log('setImages');
            loadedImages.forEach((value, key) => {
                console.log('loadedImages['+key+']', value);
            });
        } catch (error) {
            console.error('Error fetching image data:', error);
        }
    };

    

    const handleSetMianImage = (index: number) => {
        //dispatch(setMainImage(index));
        console.log('index:', index);
    };

    const handleRemoveImage = (index: number) => {
        //dispatch(removeImage(index));
    };
   
    /*
    const handleRotateImage = () => {
        // 每次点击按钮旋转90度
        setRotation((prevRotation) => prevRotation + 90);
        images.forEach((value, key) => {
            console.log('images['+key+']', value);
        });
    };
    */
    const handleRotateLargeImage = () => {
        if (selectedImage) {
            setSelectedImage({
                ...selectedImage,
                rotation: (selectedImage.rotation || 0) + 90,
            });
        }
    };

    const handleRotateImage = (index: number) => {
        images.forEach((value, key) => {
            console.log('images['+key+']', value);
        });
        setImages((prevImages) =>
            prevImages.map((image, i) =>
                i === index ? { ...image, rotation: image.rotation + 90 } : image
            
            
            )
        );

  };

    const handleThumbnailHover = (image: any) => {
        setSelectedImage(image);
        console.log('handleThumbnailHover0000:');
    };

    const handleThumbnailLeave = () => {
        setSelectedImage(null);
        console.log('handleThumbnailLeave11111:');
    };

    const handleThumbnailClick = (image: any, index: number) => {
        setSelectedImage(image);
        setSelectedImageIndex(index);
    };

    const handleLargePictureClose = () => {
        setSelectedImage(null);
    };

    const handlePrevImage = () => {
        setSelectedImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
        /*
        // 更新大图选择角度
        const prevImage = images[selectedImageIndex];
        setSelectedImage({
            ...prevImage,
            rotation: prevImage.rotation || 0,
        });
        */
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        /*
        // 更新大图选择角度
        const nextImage = images[selectedImageIndex];
        setSelectedImage({
            ...nextImage,
            rotation: nextImage.rotation || 0,
        });
        */
    };

    const handleSaveAs = (image: any) => {
        console.log('handleSaveAs0000:');
        saveAs(image, 'zyy_dowloadfile.jpg');
    };

    const handleApplytypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        //dispatch(updateApplytype(e.target.value));
        console.log('Applytype is:', e.target.value);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <ul className={styles.imageGrid}>
                    {images.map((image, index) => (
                        <li key={index}>
                            <div className={styles.thumbnailContainer}>
                                <img
                                    src={image.src}
                                    alt="Preview"
                                    //onMouseEnter={() => handleThumbnailHover(image.filePreviewUrl)}
                                    style={{
                                        maxWidth: '90%',
                                        maxHeight: '90%',
                                        cursor: 'pointer',
                                        transform: `rotate(${
                                            (image.rotation * Math.PI) / 180
                                        }rad)`,
                                    }}
                                    onClick={() => handleThumbnailClick(image,index)}
                                />
                            </div>
                            {selectedImage && (
                                <div
                                    //onMouseLeave={handleThumbnailLeave}
                                    className={styles.largeImageContainer}
                                >
                                    <img
                                        src={images[selectedImageIndex].src!}
                                        alt="Selected Image"                                       
                                        style={{
                                            maxWidth: '80%',
                                            maxHeight: '80%',
                                            cursor: 'pointer',
                                            transform: `rotate(${selectedImage.rotation}deg)`,
                                            
                                        }}
                                        onClick={handleLargePictureClose}
                                    />
                                    <div className={styles.navigationArrows}>
                                        <FaArrowLeft onClick={handlePrevImage} />
                                        <FaArrowRight onClick={handleNextImage} />
                                    </div>
                                    <div className={styles.largeImageButtons}>
                                        <button className={styles.buttonStyle} onClick={handleRotateLargeImage}> 
                                            <FaArrowRotateRight/>
                                        </button>
                                        <button className={styles.buttonStyle} onClick={handleLargePictureClose}>
                                            <IoMdClose/>
                                        </button>
                                        
                                    </div>
                                </div>
                            )}

                            <div className={styles.buttonsContainer}>
                                <div className={styles.thumbnailIcon}>
                                    <IoMdDownload
                                        title="Download"
                                        onClick={() => handleSaveAs(image.file)}
                                    />
                                </div>
                                
                                <div className={styles.thumbnailIcon}>
                                    <FaArrowRotateRight
                                        title="Rotate Image 90 degrees"
                                        onClick={() => handleRotateImage(index)}
                                    />
                                </div>
                                <div className={styles.thumbnailIcon}>
                                    <LuExpand
                                        title="Enlarge image"
                                        onClick={() => handleThumbnailClick(image,index)}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
