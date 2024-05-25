import { useEffect, useState } from "react";
import getDataApi from "./Api";
import SearchName from "./SearchName/SearchName";
import Food from "./Food/Food";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import getUsersApi from "./UserApi";
import NavBar from "./NavBar/NavBar";
import AuthRoute from "./AuthRoute/AuthRoute";
import Profile from "./Login/Profile";
import axios from "axios";
import User from "./User/User";




function App() {

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    getDataApi().then(cleanData =>{
      setFoods(cleanData)
    })
  }, []); 



  const [user, setUser] = useState(null);
  const [listUsers, setListUser] = useState([]);
  useEffect(() => {
    getUsersApi().then(cleanListUsers => {
      setListUser(cleanListUsers)
    })
  }, []);

  return ( 
  <div>
    
    <h1>Plan de comidas</h1>
    <NavBar />
      

    <Routes>

      <Route path="/" element={<h2>Bienvenido, ¡Vamos a crear tu menú semanal!</h2>} />
      <Route path="/login" element={<Login listUsers={listUsers} setUser={setUser}/>} />
      <Route path="/searchName" element={<AuthRoute user={user} component={<SearchName foods={foods}/>}/>} />
      


    </Routes>

  


  </div>
  );
}

export default App;