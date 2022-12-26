import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Layout from './components/Layout';
import VodApp from './components/vodApp'
import PageNotFound404 from './components/pageNotFound404';
import Info from './components/info';

 function AppRoutes() {
    return (

        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='*' element={<PageNotFound404/>}/>
                    <Route index element={<VodApp/>} />
                    <Route path='/search/:searchP' element={<VodApp/>} />
                    <Route path='/search/:searchP/year/:year' element={<VodApp/>} />
                    <Route path='/video/:id' element={<Info/>} />
                    <Route path='/search/:searchP/year/:year/video/:id' element={<Info/>} />
                

                </Route>
            </Routes>
        </Router>
    )
}
export default AppRoutes;