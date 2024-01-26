import { Axios } from "axios";
const lienAPI = 'lien'
export async function getMentor() {
    try {
        const { data } = await Axios.get(`${lienAPI}mentors`)
        return data
    } catch (error) {
        console.log(error);
    }
}


