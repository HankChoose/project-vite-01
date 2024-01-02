import { createBoard } from '@wixc3/react-board';
import { ImageThumbnail } from '../../../components/image-thumbnail/image-thumbnail';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React, { useState } from 'react';

const [images, setImages] = useState(['image1.jpg', 'image2.jpg', 'image3.jpg']);
const moveImage = (fromIndex: number, toIndex: number) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
};

export default createBoard({
    name: 'ImageThumbnail',
    Board: () => <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <ImageThumbnail key={index} image={image} index={index} moveImage={moveImage} />
        ))}
      </div>
    </DndProvider>,
    isSnippet: true,
});
