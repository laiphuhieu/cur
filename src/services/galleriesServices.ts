import axiosInstance from "./apiService"

const galleriesServices = {
    getAllGalleries(token: string) {
        return axiosInstance(token).get('/ActiveMediaGalleries')
    },

}

export default galleriesServices