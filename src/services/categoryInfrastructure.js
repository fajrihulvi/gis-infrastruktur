import config from "../app/config";
import axiosInstance from "../app/axiosInstance";


const headers = {
  "Content-Type": "application/x-www-form-urlencoded"
};

export const getList = (params) => {
  try {
    return axiosInstance.get(
      `${config.BASE_URL}/category/list`,
      {params}
    );
  } catch (err) {
    console.log(err);
  }
};

export const createCategory = (params) => {
  try {

    return axiosInstance.post(
        `${config.BASE_URL}/category/create`,
        params,
        { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

export const updateCategory = (params) => {
  try {

    return axiosInstance.put(
        `${config.BASE_URL}/category/update`,
        params,
        { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

export const deleteCategory = (params) => {
  try {

    return axiosInstance.put(
        `${config.BASE_URL}/category/delete`,
        params,
        { headers }
    );
  } catch (err) {
    console.log(err);
  }
}