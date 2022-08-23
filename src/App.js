import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import UserRoute from './components/UserRoute'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { auth, app } from './firebase'
import { setUser } from './redux/actions'
import {Header} from './components/Header';
import {Navigation} from './components/Navigation';
import {RulesOfPlay } from './components/RulesOfPlay';
import {KnowItBox} from './components/KnowItBox';
import {Catalogue} from './components/Catalogue';
import {Points} from './components/Points';


const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
   auth.onAuthStateChanged((authUser)=>{
    if(authUser){  dispatch(setUser(authUser)); }
    else{      dispatch(setUser(null));    }   })
  },[dispatch]);

  return (
    <BrowserRouter>
    <div className="app">
           <Header />
      <Navigation />
      <Points/>
      
        <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/Login"  element={<Login />}/>
            <Route path="/Register"  element={<Register />}/>
            <Route path="/learn" element={<KnowItBox />} />
            <Route path="/catalogue" element={<Catalogue />}/>
        </Routes>
                
      <RulesOfPlay />
     
    </div>
    </BrowserRouter>
  )
}

export default App