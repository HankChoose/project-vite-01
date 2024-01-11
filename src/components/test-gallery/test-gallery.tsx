import classNames from 'classnames';
import styles from './test-gallery.module.scss';
import Gallery from 'react-image-gallery';
import { TestGetImages } from '../test-get-images/test-get-images';

export interface TestGalleryProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestGallery = ({ className }: TestGalleryProps) => {

    const imageInfo0 = '20240110_055037__20210715144321_image_0.jpg';
    const imageInfo1 = '20240111_030558__20210715144328_image_1.jpg';
    const imageInfo2= 'defaultList.png';
     
    const images = [
        {
            original: '20240110_055037__20210715144321_image_0.jpg',
            description: "Image 0",
            renderItem: () => <TestGetImages imageInfo={imageInfo0} />
        },
        {
            original: '20240111_030558__20210715144328_image_1.jpg',
            description: "Image 1",
            renderItem: () => <TestGetImages imageInfo={imageInfo1} />
        },
        {
            original: "defaultList.png",
            description: "Default Image",
            renderItem: () => <TestGetImages imageInfo={imageInfo2} />
        }
    ];

    return <div className={classNames(styles.root, className)}>

        <Gallery
            items={images}
            showNav={true}
            showThumbnails={false}
            startIndex={1} // 设置默认显示的图片索引
            className="custom-image-gallery" // 添加自定义的类名
        />
       
    </div>;
};
