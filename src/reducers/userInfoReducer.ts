const initialState = {
  name: "",
  email: "",
};

// 定义 action 类型
type MyAction = {
  type: string;
  payload: any; // 你可以根据需要指定更具体的类型
};

const userInfoReducer = (state = initialState, action: MyAction) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default userInfoReducer;