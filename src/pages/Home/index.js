import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import api from '../../services/api'
import './index.css'
import loadingImg from '../../assets/loading.png'

export default function Home(){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMovies(){
            //busca os dados das series mais populares 
            const response = await api.get("/movie/now_playing", {
                params:{
                    api_key: "f2756d32694b13adb2b9ad4e8cbdcd87",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setMovies(response.data.results);
            setLoading(false);
        }
        loadMovies()
    },[])

    if(loading){
        return(
            <img className="loading" src={loadingImg} alt="carregando" />
        )
    }

    return(
        <div className="container2">
            <h2>Filmes mais Assistidos 🎬</h2>
            <div>
                {movies.map((movie) => {
                    return(
                    <article className="container" key={movie.id}>
                        
                        <strong className="title">{movie.title}</strong>
                        <img className="poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}` }alt="posters" />
                        <div className="subtitle">
                        <p>Popularidade: {movie.popularity}</p>
                        <Link className="btn" to={`/Movies/${movie.id}`}>acessar</Link>
                        </div>
                    </article>
                    )
                })}
            </div>
        </div>
    )
}