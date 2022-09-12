import api from "./axiosService";

class HousesService {

    async getHouses() {
        const res = await api.get("houses")
        console.log(res.data);
        return res.data;
    }
    
}
export const housesService = new HousesService();