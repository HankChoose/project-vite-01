import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import Cookies from 'js-cookie';
import { baseUrl } from '../../constants';

export interface TestUploadProps {
    className?: string;
}

export const TestUpload = ({ className }: TestUploadProps) => {
    const [files, setFiles] = useState<File[]>([]);
    const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files!;

        setFiles((prevFiles) => {
            const newFiles: File[] = [];

            for (let i = 0; i < selectedFiles.length; i++) {
                newFiles.push(selectedFiles[i]);
            }

            return [...prevFiles, ...selectedFiles];
        });
    };

    const handleUpload = async () => {
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append(`uploadedImages[${i}]`, files[i]);
        }

        //formData.append('applytype', 'YourApplyType');
        //formData.append('requirements', 'YourRequirements');
        //formData.append('mainImageId', 'YourMainImageId');

        // Logging the FormData entries
        formData.forEach((value, key) => {
            console.log('formData['+key+']', value);
        });

        try {
            // 发送请求到Django的上传接口
            const response = await axios.post(`${baseUrl}/upload2/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
            },
            });

            console.log(response.data);
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    return (
    <div>
        <input type="file" multiple onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
    </div>
    );
}