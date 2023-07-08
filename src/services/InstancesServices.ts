import axiosInstance from "./apiService"

const instanceServices = {
    getAllInstances(token: string) {
        return axiosInstance(token).get('/Instances')
    },

    getInstanceByName() {
        return ''
    }
}

export default instanceServices