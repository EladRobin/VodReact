import React from 'react';
import './App.css';
import AppRoutes from './appRoutes';
import { NavBar } from './components/NavBar';
import  Footer  from './components/Footer';

function App() {
  return (<>
    <NavBar/>
   <React.Fragment>
     <AppRoutes/>
   </React.Fragment>
   <Footer/>
   </>
  );
}

export default App;

