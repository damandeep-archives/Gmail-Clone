import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import EmailList from './EmailList';
import Mail from './Mail';
import SendMail from './SendMail';
import { selectsendMessageIsOpen } from './features/mailSlice';
import {useDispatch, useSelector }from 'react-redux';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';


function App() {

  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const dispatch=useDispatch();
  const user=useSelector(selectUser);


  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user)
      {
      //user is logged in
      dispatch(login({
        displayName:user.displayName,
        email:user.email,
        photoUrl:user.photoURL,
      }))
      }
      else{

      }
    })
  },[]);

  return (
    <Router>
      {!user?(<Login/>):(
            
    <div className="app">
    <Header/>

  <div className='app__body'> 
    <Sidebar/>


  <Switch>
    <Route path='/mail'>
      <Mail/>
    </Route> 

    <Route path='/'>
      <EmailList/>  
    </Route> 

  </Switch>



  </div> 

  {sendMessageIsOpen && <SendMail/>}
  </div>


      )}


    </Router>
  );
}

export default App;
