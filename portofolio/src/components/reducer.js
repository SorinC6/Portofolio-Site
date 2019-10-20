export default function reducer(state, { type, payload }) {
  switch (type) {
    case "HOME_PAGE":
      return {
        ...state,
        navColor: "#f0ece9",
        height: "60px"
      };
    case "ABOUT_PAGE":
      return {
        ...state,
        navColor: "seashell",
        height: "60px"
      };
    case "PROJECT_PAGE":
      return {
        ...state,
        navColor: payload,
        height: "60px"
      };
    case "CONTACT_PAGE":
      return {
        ...state,
        navColor: payload,
        height: "60px"
      };
    case "SCROLL_UP":
      return {
        ...state,
        height: "80px"
      };
    default:
      return state;
  }
}
