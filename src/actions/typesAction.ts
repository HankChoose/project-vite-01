
export interface ImageInfo {
  file: File;
  fileName: string;
  fileSize: number;
  filePreviewUrl: string;
  rotation?: number; // 可选的 rotation 属性
}


export interface ImageReducerState {
  applytype: string;
  requirements: string;
  uploadedImages: ImageInfo[],
  mainImageId: number,
}