const initialState2 = {
  applytype: "",
  requirements: ""
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
    default:
      return state;
  }
};

export default userInfo2Reducer;