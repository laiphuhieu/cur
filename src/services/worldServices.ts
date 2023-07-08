import axiosInstance from "./apiService";

const worldServices =  {
    getAllWorld(token: string) {
        return axiosInstance(token).get('/Worlds')
    }
}

export default worldServices