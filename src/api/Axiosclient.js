import axios from "axios";

/**
 * cette variable est utiliser pour la connection du fontend et backend
 */
const AxiosClient = axios.create({
    baseURL: `${process.env.REACT_API_BASE_URL}/api`,
    withCredentials: true,
});

/**
 * lorsque l'user envoie une requette ver le backend,
 * l'interceptors ajoute un header pour faire une verification 
 * dans le back si c'est l'user authentifier qui a envoyer la requette
 */
AxiosClient.interceptors.request.use((config)=>{
    const Token = localStorage.getItem('ACCESS_TOKEN')

    config.headers = {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        Authorization: `Bearer ${Token}`,
    }

    return config
});

/**
 * cette fonction retourne la reponse du requette
 * dans le backend ver la frontend, et filtre les erreur s'il y en a
 */
AxiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    const {response} = error

    if (response.status === 401) {
        // ereur lier a l'authentification, si le token n'est pas valide
        localStorage.removeItem('ACCESS_TOKEN')
        return response
    } else if (response.status === 400) {
        console.log(response.data.message);
    } else if (response.status === 404) {
        console.log(response.data.message);
    } else if (response.status === 405) {
        console.log(response.data.message);
    } else if (response.status === 422) {
        // ereur lier a la validation des formulaire
        return response;
    }
});

export default AxiosClient;