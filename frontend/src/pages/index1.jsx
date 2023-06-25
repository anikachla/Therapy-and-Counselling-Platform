import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./chat.css";
import Navgbar from "../components/navgbar/navgbar";
const headerLinks1 = [
    { text: "Return", url: "" },
    // { text: "", url: "#" },
    // { text: "", url: "" },
   
  ];
const ChatRoomc = () => {

    const [roomCode, setRoomCode] = useState('');

    const navigate = useNavigate();

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        navigate(`/room/${roomCode}`)
    }

    return (
        <div className="vcm">
        <Navgbar links={headerLinks1} />
        <div className="page1">
            
            <form onSubmit={handleFormSubmit} className="form">
                <div>
                    <h2>Enter Room Code : </h2> <br />
                    <input vlaue={roomCode} onChange={e => setRoomCode(e.target.value)} type="text" required placeholder="Enter Room code"/>
                </div>
                <button className="but" type="submit">Enter Room</button>
            </form>
        </div>
        </div>
    )
}

export default ChatRoomc