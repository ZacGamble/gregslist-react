import api from "./axiosService";

class CarsService {

    async getCars() {
        const res = await api.get("cars")
        console.log(res.data);
        return res.data;
    }
    
}
export const carsService = new CarsService();