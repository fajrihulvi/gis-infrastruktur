import config from "../app/config";
import axiosInstance from "../app/axiosInstance";

const headers = {
  "Content-Type": "application/x-www-form-urlencoded"
};

export const login = (params) => {
  try {
    return axiosInstance.post(
        `${config.BASE_URL}/login`,
        params,
        { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

export const getCategoryList = (params) => {
  try {
    return axiosInstance.get(
      `${config.BASE_URL}/shp/get-maps?${params}`,
    );
  } catch (err) {
    console.log(err);
  }
};