const defaultValue = {
  name: "zhang san",
  age: 21,
};

export function data(state = defaultValue, action) {
  switch (action.type) {
    case "ADD":
      state.age += action.data;
      return { ...state };
    case "DEL":
      state.age -= action.data;
      return { ...state };
    default:
      return { ...state };
  }
}
