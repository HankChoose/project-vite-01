import classNames from 'classnames';
import styles from './test-dnd.module.scss';
import React, { useState,ReactNode  } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export interface ImageThumbnailProps {
    image: string;
    index: number;
    moveImage: (fromIndex: number, toIndex: number) => void;
}

export interface TestDndProps {
    className?: string;
}

const ImageThumbnail = ({image, index, moveImage }: ImageThumbnailProps) => {
    const [, drag] = useDrag({
        type: 'IMAGE',
        item: { type: 'IMAGE', index },
    });

    const [, drop] = useDrop({
        accept: 'IMAGE',
        hover: (draggedItem: DragItem) => {
        const draggedIndex = draggedItem.index;
        if (draggedIndex !== index) {
            moveImage(draggedIndex, index);
            draggedItem.index = index;
        }
        },
    });
    
    return(
    <div ref={(node) => drag(drop(node))} style={{ margin: '8px', cursor: 'move' }}>
      <img src={image} alt={`Thumbnail ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
    </div>);

};

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestDnd = ({ className }: TestDndProps) => {
    const [images, setImages] = useState(['image1.jpg', 'image2.jpg', 'image3.jpg']);

    const moveImage = (fromIndex: number, toIndex: number) => {
        const updatedImages = [...images];
        const [movedImage] = updatedImages.splice(fromIndex, 1);
        updatedImages.splice(toIndex, 0, movedImage);
        setImages(updatedImages);
    };
    return 
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <ImageThumbnail key={index} image={image} index={index} moveImage={moveImage} />
        ))}
      </div>
    </DndProvider>
};

interface DragItem {
  type: string;
  index: number;
}
