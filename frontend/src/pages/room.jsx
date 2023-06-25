import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import Navgbar from "../components/navgbar/navgbar";
const headerLinks1 = [
    { text: "Home", url: "#" },
    { text: "", url: "#" },
    { text: "", url: "" },
   
  ];

const RoomPage = () => {

    const { roomId } = useParams();

    const myMeeting = async (element) => {
        // const appID = 678710334;
        const appID = 7071336;
        // const serverSecret = "ae4e6b88ed3e104994c555f0342e7bc9";
        const serverSecret = "1e111d7154a28039c19c6a4f3cdf09b1";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            'Anika'
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };

    return (
        <div>
            <Navgbar links={headerLinks1} />
        <div className="room-page">
            <div ref={myMeeting} />
        </div>
        </div>
    )
}

export default RoomPage