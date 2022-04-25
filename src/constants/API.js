export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const ESTABLISHMENTS = "/api/establishments";
export const MESSAGES = "/api/messages";
export const ENQUIRIES = "/api/enquiries";
export const POPULATE = "?populate=";

const qs = require("qs");
export const query = qs.stringify(
  {
    populate: {
      reviews: {
        populate: "*",
      },
      facilities: {
        populate: "*",
      },
      img: {
        populate: "*",
      },
      host: {
        populate: ["picture"],
      },
    },
  },
  {
    encodeValuesOnly: true,
  }
);
