import classNames from 'classnames';
import styles from './user-apply-content.module.scss';
import { useParams } from 'react-router-dom';
import { Button, Card, Table, ListGroup } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import { fetch_data_csrf_get } from '../../apiService';
import { TestGetImages } from '../test-get-images/test-get-images';
import { TestGetImagesArrays } from '../test-get-images-arrays/test-get-images-arrays';

export interface UserApplyContentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApplyContent = ({ className }: UserApplyContentProps) => {
    const { id } = useParams();
    const apiUrl = `/user-apply-content/${id}`;
    const [applyData, setApplyData] = useState<ApplyData[]>([]);
    const fileNames = ['20240110_055037_CELPIP1_image_2.jpg', '20240111_030558__20210715144328_image_1.jpg', 'defaultList.png'];

    interface ApplyData {
        id: string;
        username: string;
        email: string;
        apply_type: string;
        requirements: string;
        main_image_id: number;
        image_path0: string;
        image_path1: string;
        image_path2: string;
        apply_time: Date; // Change the type to Date
        comment: string;
        comment2: string;
        [key: string]: string | Date | number; // Adjust the index signature if needed
        // Other properties...
    }

    useEffect(() => {
        // 在组件加载时发送请求
        fetchData();
    }, []);

    const fetchData = async () => {
        // 获取保存在本地存储中的令牌

        try {
            const data = await fetch_data_csrf_get(apiUrl);
            if (data.error) {
                console.log('fetchData response data.message:', data.message);
            } else {
                console.log('fetchData response:', data);
            }
            setApplyData(data);
        } catch (error) {
            // 处理错误
            console.error('fetchData error:', error);
        }
    };

    function processImages(main_image_id: number, image_path0: string  | null, image_path1: string  | null, image_path2: string  | null) {
    // 创建一个空数组，用于存放处理后的图片路径
        let imageArray = [];

        // 根据 main_image_id 的值确定数组的顺序
        switch (main_image_id) {
            case 0:
                imageArray.push(image_path0);
                break;
            case 1:
                imageArray.push(image_path1);
                break;
            case 2:
                imageArray.push(image_path2);
                break;
            default:
                // 如果 main_image_id 不是 0、1 或 2，可以根据实际需求处理，默认情况下将数组置为空
                imageArray = [];
        }

        // 检查其他图片路径，忽略 default.png
        if (image_path0 !== 'defaultList.png' && image_path0 !== imageArray[0]) {
            imageArray.push(image_path0);
        }

        if (image_path1 !== 'defaultList.png' && image_path1 !== imageArray[0]) {
            imageArray.push(image_path1);
        }

        if (image_path2 !== 'defaultList.png' && image_path2 !== imageArray[0]) {
            imageArray.push(image_path2);
        }

        return imageArray;
    }
    
  	

    const firstid = applyData.length > 0 ? applyData[0].id : undefined;
    const firstusername = applyData.length > 0 ? applyData[0].username : undefined;
    const firstEmail = applyData.length > 0 ? applyData[0].email : null;
    const firstapply_type = applyData.length > 0 ? applyData[0].apply_type : undefined;
    const firstrequirements = applyData.length > 0 ? applyData[0].requirements : null;
    const firstmain_image_id = applyData.length > 0 ? applyData[0].main_image_id : 0;
    const firstimage_path0 = applyData.length > 0 ? applyData[0].image_path0 : null;
    const firstimage_path1 = applyData.length > 0 ? applyData[0].image_path1 : null;
    const firstimage_path2 = applyData.length > 0 ? applyData[0].image_path2 : null;
    
    const imageNameArray = processImages(firstmain_image_id, firstimage_path0, firstimage_path1, firstimage_path2);
    console.log(imageNameArray);
    imageNameArray.forEach((value, key) => {
	    console.log('imageNameArray['+key+']', value);
    });

     // Filter out null values from imageNameArray
    const filteredImageArray = imageNameArray.filter((value) => value !== null);

    return <div className={classNames(styles.root, className)}>
        <h2>User Apply Content ID: {id}</h2>
        <Card style={{ width: '60vw' }}>
            <Card.Body>
                <Card.Title>

                </Card.Title>
                <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">

                <ListGroup.Item>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={{ width: '150px' }}>Item</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>Type:</td>
                                <td>{firstapply_type}</td>
                            </tr>
                            <tr>
                                <td>Images:</td>
                                <td>
                                     <TestGetImagesArrays  fileNames={filteredImageArray  as string[]}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Content:</td>
                                <td>{firstrequirements}</td>
                            </tr>

                            <tr>
                                <td>Username:</td>
                                <td>
                                    {firstusername}
                                </td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{firstEmail}</td>
                            </tr>

                        </tbody>
                    </Table>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#"></Card.Link>
            </Card.Body>
        </Card>
       

    </div>;
};
