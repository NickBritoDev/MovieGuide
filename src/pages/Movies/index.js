import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import api from '../../services/api'
import loadingImg from '../../assets/loading.png'
import './movie.css'

export default function Movies(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState({})
        
    useEffect(() => {
        async function loadMovie(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "f2756d32694b13adb2b9ad4e8cbdcd87",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setMovie(response.data)
                setLoading(false)
            })
            .catch(()=>{
                navigate("/", {replace: true})
            })
        }
        loadMovie()
    },[id, navigate])

    if(loading){
        return(
            <div>
                 <img className="loading" src={loadingImg} alt="carregando" />
            </div>
        )
    }

    return(
        <div className="containerMovie">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="Poster" />
            <strong>Avalicão: {movie.vote_average.toFixed(1)} / 10 </strong>

            <h3 className="sinopse">Sinopse</h3>
            <span className="sinopseDetails">{movie.overview}</span>

            <div className="area-btn">
                <a rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`} target="blank">
                <button className="trailerBtn"> Trailer </button>
                </a>
                    
            </div>
        </div>
    )
}