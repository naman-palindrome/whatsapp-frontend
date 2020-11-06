import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import Pusher from "pusher-js";
import axios from "./axios";
var pusher = new Pusher("43ed4f9ddd227fd87595", {
  cluster: "ap2",
});

function App() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState();

  useEffect(() => {
    var channel = pusher.subscribe("messages");
    channel.bind("newMessage", function (data) {
      sync();
    });
  }, [username]);

  useEffect(() => {
    setUsername(prompt("enter your name"));
    sync();
  }, []);
  const sync = async () => {
    await axios.get("/retrieve/conversation").then((res) => {
      console.log(res.data);
      setMessages(res.data);
    });
  };

  console.log(messages);
  return (
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} username={username} />
      </div>
    </div>
  );
}

export default App;
