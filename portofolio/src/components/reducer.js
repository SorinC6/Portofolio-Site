export default function reducer(state, { type, payload }) {
  switch (type) {
    case "HOME_PAGE":
      return {
        ...state,
        navColor: "#ffc21c",
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
        navColor: "#F2A359",
        height: "60px"
      };
    case "CONTACT_PAGE":
      return {
        ...state,
        navColor: "#06656E",
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
