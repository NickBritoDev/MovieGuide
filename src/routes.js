import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Movies from './pages/Movies'  
import Error from './pages/Error'
import Header from './components/Header'

export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/MovieGuide' element={<Home/>}></Route>
            <Route path='/Movies/:id' element={<Movies/>}></Route>

            <Route path='*' element={<Error/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}