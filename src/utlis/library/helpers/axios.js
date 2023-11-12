import axios from "axios";
import axiosRetry from "axios-retry";
import curlirize from "axios-curlirize";
import { store } from "redux/store";
export const URL = "https://ajel.appssquare.com";

const instance = axios.create({
  baseURL: `${URL}/`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("idToken")}`,
    "X-Language": store.getState()?.LanguageSwitcher?.language?.locale ?? "en",
    "Accept-Language":
      store.getState()?.LanguageSwitcher?.language?.locale ?? "en",
  },
});
axiosRetry(instance, { retries: 3 });
curlirize(instance);


instance.interceptors.request.use((req) => {
  return req;
});
instance.interceptors.response.use(
  (res) => {
    return res;
  },

  (err) => {
    if (
      err &&
      err.response &&
      err.response.status === 403 &&
      err.response.config.url !== "/login"
    ) {
      // window.localStorage.removeItem("");
      // window.location.replace("/");
    } else if (
      err.response.status === 401 &&
      err.response.config.url !== "/login"
    ) {
      // window.localStorage.removeItem("mitcvAdminToken");
      // window.location.replace("/");
    } else {
      return Promise.reject(err);
    }
  }
);

export default instance;
