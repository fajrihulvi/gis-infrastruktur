import config from "../app/config";
import axiosInstance from "../app/axiosInstance";


const headers = {
  "Content-Type": "application/x-www-form-urlencoded"
};

export const getList = (params) => {
  try {
    return axiosInstance.get(
      `${config.BASE_URL}/user/list`,
      {params}
    );
  } catch (err) {
    console.log(err);
  }
};

export const createAdmin = (params) => {
  try {

    return axiosInstance.post(
        `${config.BASE_URL}/user/create/admin`,
        params,
        { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

export const updateAdmin = (params) => {
  try {

    return axiosInstance.put(
        `${config.BASE_URL}/user/update/admin`,
        params,
        { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

export const deleteAdmin = (params) => {
  try {

    return axiosInstance.put(
        `${config.BASE_URL}/user/delete/admin`,
        params,
        { headers }
    );
  } catch (err) {
    console.log(err);
  }
}