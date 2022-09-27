    //base url:https://api.themoviedb.org/3/
    // https: tv/popular?api_key=f2756d32694b13adb2b9ad4e8cbdcd87&language=pt-br
    import axios from "axios"

    const api = axios.create({
        baseURL: 'https://api.themoviedb.org/3/'
    })

    export default api