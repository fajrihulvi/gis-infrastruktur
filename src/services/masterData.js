import config from "../app/config";
import axiosInstance from "../app/axiosInstance";

// Departement

export const getListDinas = (params) => {
  try {
    return axiosInstance.get(
      `${config.BASE_URL}/master-data/dinas/list`,
      {params}
    );
  } catch (err) {
    console.log(err);
  }
};

// Roles

export const getListRoles = (params) => {
  try {
    return axiosInstance.get(
      `${config.BASE_URL}/master-data/role/list`,
      {params}
    );
  } catch (err) {
    console.log(err);
  }
};

// Category Infrastructure
