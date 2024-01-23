import config from "../app/config";
import axiosInstance from "../app/axiosInstance";

export const getList = (params) => {
  try {
    return axiosInstance.get(
      `${config.BASE_URL}/user/list`
    );
  } catch (err) {
    console.log(err);
  }
};