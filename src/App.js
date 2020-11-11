import React from 'react';
import {auth} from './firebase';
import './App.css';
import Sidebar from './Sidebar';
import {useEffect} from 'react';
import Chat from './Chat';
import {useSelector,useDispatch} from "react-redux";
import {selectUser} from './features/userSlice';
 import Login from './Login';
 import {login,logout} from './features/userSlice';

function App() {
const dispatch=useDispatch();
 const user =useSelector(selectUser);
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if(authUser){
        console.log('sds');
dispatch(
  login({
  uid:authUser.uid,
  photo:authUser.photoURL,
  email:authUser.email,
 displayName:authUser.displayName,
  
})
);
      }
      else{
dispatch(logout())
      }
    });
  },[dispatch]);
 return (
    <div className="app">
      {user ?(
        <>
     <Sidebar/>
     <Chat/>
     </>
      ):(
        <Login/>
      )}
    </div>
  );
}

export default App;
