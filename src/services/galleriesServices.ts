import { AxiosPromise } from "axios";

import axiosInstance from "./apiService";
import { Gallery } from "@/types/gallery";

const galleriesServices = {
    getAllGalleries(token: string):AxiosPromise {
        return axiosInstance(token).get<Gallery[]>('/ActiveMediaGalleries')
    },
    getGalleryById(token: string, id: string | undefined)  {
        return axiosInstance(token).get(`/ActiveMediaGalleries/${id}`)
    }

}

export default galleriesServices