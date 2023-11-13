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
// instance.interceptors.response.use(
//   (res) => {
//     return res;
//   },

 
// );

export default instance;
