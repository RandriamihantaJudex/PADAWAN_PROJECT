import { Axios } from "axios";
export async function getMentor() {
    try {
        const { data } = await Axios.get(`https://randomuser.me/api/`)
        return data
    } catch (error) {
        console.log(error);
    }
}


