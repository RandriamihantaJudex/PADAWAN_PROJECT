export async function getMentor() {
    try {
        const { data } = await window.axios.get(`https://randomuser.me/api/?results=10`)
        return data.results
    } catch (error) {
        console.log(error);
    }
}


