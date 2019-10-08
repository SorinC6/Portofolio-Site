export default function reducer(state, { type, payload }) {
  switch (type) {
    case "HOME_PAGE":
      return {
        ...state,
        navColor: "#ffc21c",
        height: "80px"
      };
    case "ABOUT_PAGE":
      return {
        ...state,
        navColor: "seashell",
        height: "70px"
      };
    case "PROJECT_PAGE":
      return {
        ...state,
        navColor: "#F2A359",
        height: "70px"
      };
    case "CONTACT_PAGE":
      return {
        ...state,
        navColor: "#06656E",
        height: "70px"
      };
    default:
      return state;
  }
}
