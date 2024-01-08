import {ImageInfo } from './typesAction';

export const updateApplytype = (applytype: string) => ({
  type: "UPDATE_APPLYTYPE",
  payload: applytype
});

export const updateRequirements = (requirements: string) => ({
  type: "UPDATE_REQUIREMENTS",
  payload: requirements
});

export const addImage = (imageInfo:ImageInfo) => ({
  type: 'ADD_IMAGE',
  payload: { ...imageInfo},
});

export const resetImages = () => ({
  type: 'RESET_IMAGES',
});

export const moveImage = (startIndex:number, endIndex:number) => ({
  type: 'MOVE_IMAGE',
  payload: { startIndex, endIndex },
});

export const removeImage = (index: number) => ({
  type: 'REMOVE_IMAGE',
  payload: index,
});

export const setMainImage = (index: number) => ({
  type: 'SET_MAIN_IMAGE',
  payload: index,
});


export const rotateImage = (index: number, degrees: number) => {
  return {
    type: 'ROTATE_IMAGE',
    payload: {
      index,
      degrees,
    },
  };
};