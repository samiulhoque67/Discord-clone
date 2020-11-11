import React,{useState,useEffect} from 'react'
import './Sidebar.css'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call"; 
 import {Avatar} from "@material-ui/core";
 import MicIcon from "@material-ui/icons/Mic";
 import HeadsetIcon from "@material-ui/icons/Headset";
 import SettingsIcon from "@material-ui/icons/Settings";
 import {useSelector} from 'react-redux';
 import {selectUser} from './features/userSlice';
 import db,{auth} from './firebase';
function Sidebar() {
    const user=useSelector(selectUser);
    const [channels,setChannels]=useState(); 
useEffect(() => {
    db.collection("channels").onSnapshot((snapshot)=>
    setChannels(
        snapshot.docs.map((doc)=>({
            id:doc.id,
            channels:doc.data(),
        }))
    ))
}, [channels])
const handleAddChannel=()=>{
    const channelName=prompt("Enter a new Channel name");
    if(channelName){
        db.collection("channels").add({
            channelName:channelName,
        });
    }
};
    console.log(user);
    return (
        <div className="sidebar">
            

            <div className="sidebar__top">
                <h3>discord</h3>
                <ExpandMoreIcon/>
                </div>
                <div className="sidebar__channels">
                    <div className="sidebar__channelHeader">
                        <div className="sidebar__header">
                            <ExpandMoreIcon/>
                            <h4>Text Content</h4>
                        </div>
                        <AddIcon onClick={handleAddChannel} className="sidebar__addChannel"/>

                    </div>
                    <div className="sidebar__channelList">
                        {channels? (channels.map(({ id,channels })=>(
                            <SidebarChannel key={id} id={id} channelName={channels.channelName} />)))
                            :
                            (<SidebarChannel/>)

                        }
                   
                   

                </div>

                </div>
                <div className="sidebar__voice">
                    <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    dontSize="large"/>
                    <div className="sidebar__voiceInfo">
                        <h3>Voice Connected</h3>
                        <p>Stream</p>
                    </div>
                    <div className="sidebar__voiceIcons">
                        <InfoOutlinedIcon/>
                        <CallIcon/>
                        </div>
                    </div>
<div className="sidebar__profile">
    <Avatar onClick={()=>auth.signOut()}src={user?.photo}/>
    <div className="sidebar__profileInfo">
        <h3>{user.displayName}</h3>
        <p>{user.uid.substring(0,5)}</p>
    </div>
    <div className="sidebar__profileIcon">
        <MicIcon/>
        <HeadsetIcon/>
        <SettingsIcon/>

    </div>
</div>
                </div>
               
        
    )
}

export default Sidebar
