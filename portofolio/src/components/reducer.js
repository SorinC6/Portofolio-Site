export default function reducer(state, { type, payload }) {
  switch (type) {
    case "HOME_PAGE":
      return {
        ...state,
        navColor: "#f0ece9",
        height: "60px",
      };
    case "ABOUT_PAGE":
      return {
        ...state,
        navColor: "seashell",
        height: "60px",
      };
    case "PROJECT_PAGE":
      return {
        ...state,
        navColor: "#F2A359",
        height: "60px",
      };
    case "CONTACT_PAGE":
      return {
        ...state,
        navColor: "#06656E",
        height: "60px",
        textColor: "white"
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
