const initialState2 = {
  applytype: "",
  requirements: "",
  uploadedImages: [], // 用于存储待上传图片文件的数组
};

// 定义 action 类型
type MyAction = {
  type: string;
  payload: any; // 你可以根据需要指定更具体的类型
};

const userInfo2Reducer = (state = initialState2, action: MyAction) => {
  switch (action.type) { 
    case "UPDATE_APPLYTYPE":
      return { ...state, applytype: action.payload };
    
    case "UPDATE_REQUIREMENTS":
      return { ...state, requirements: action.payload };
    
    case 'ADD_IMAGE':
      
      // Check if the maximum number of images has been reached
      if (state.uploadedImages.length >= 3) {
        // If limit reached, do not add the new image
        return state;
      }

      // If not at the limit, add the new image to the array
      return {
        ...state,
        uploadedImages: [...state.uploadedImages, action.payload],
      };
    
    case 'RESET_IMAGES':
      return {
        ...state,
        uploadedImages: [],
      };
    default:
      return state;
  }
};

export default userInfo2Reducer;