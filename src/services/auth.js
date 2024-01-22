import axios from "axios";

const headers = {
  "Content-Type": "application/json"
};

export const login = (params) => {
    return axios.post(
        "http://103.179.69.31/login",
        params,
    );
}

export const getCategoryList = (params) => {
  try {
    return axios.get(
      "http://103.179.69.31/shp/get-maps?kecamatan_id=1&kelurahan_id=1",
    );
  } catch (err) {
    console.log(err);
  }
};