export default function reducer(state, { type, payload }) {
  switch (type) {
    case "ABOUT_PAGE":
      return {
        ...state,
        navColor: payload
      };
    case "PROJECT_PAGE":
      return {
        ...state,
        navColor: payload
      };
    default:
      return state;
  }
}
