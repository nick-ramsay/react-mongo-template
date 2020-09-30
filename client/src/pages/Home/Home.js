import React, { Component, useState, useEffect } from 'react';
import { useInput } from '../../sharedFunctions/sharedFunctions';
import API from "../../utils/API";
import moment from 'moment';
import logo from '../../../src/logo.svg';
import mongoLogo from '../../images/mongo_logo.png';
import "./style.css";

const Home = () => {

    var [newMessage, setNewMessage] = useInput("");
    var [messages, setMessages] = useState([]);

    const renderMessages = () => {
        API.findAllMessages().then(
            (res) => {
                console.log(res.data);
                setMessages(messages => res.data);
            }
        );
    }

    const saveMessage = (event) => {
        if (newMessage !== "") {
            API.createMessage(newMessage, new Date()).then(
                (res) => {
                    //console.log(res.data);
                    renderMessages();
                    document.getElementById('messageInput').value = "";
                }
            );
        }
    };

    const deleteMessage = (event) => {
        console.log(event.currentTarget.dataset.message_id);
        let messageDeletionID = event.currentTarget.dataset.message_id;
        API.deleteOneMessage(messageDeletionID).then(
            (res) => {
                console.log(res.data);
                renderMessages();
            }
        );
    }

    useEffect(() => {
        console.log("Use effect called...");
        renderMessages();
    }, [])

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <h1>React MongoDB Template</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={mongoLogo} className="mongo-logo mr-5" alt="mongo_logo" />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
                </header>
                <div className="container">
                    <div className="col-md-12">
                        <form className="mt-3">
                            <div className="form-row text-center">
                                <div className="col">
                                    <input type="text" placeholder="Enter your message here" className="form-control" id="messageInput" name="messageInput" onChange={setNewMessage} aria-describedby="messageHelp" />
                                </div>
                            </div>
                            <div className="form-row text-center">
                                <div className="col mt-3">
                                    <div type="button" className="btn btn-custom" onClick={saveMessage}>Submit</div>
                                </div>
                            </div>
                        </form>
                        <p style={{ color: "#e83e8c" }} className="mt-4 mb-1">
                            {messages.length === 0 ? "No Messages" : ""}
                        </p>
                        {messages.map((message, i) =>
                            <div className="col-md-12 mt-2 mb-2 message-card" key={i}>
                                <div className="pt-1">
                                    <div style={{ fontStyle: "italic" }} className="mt-1 mb-1">"{message.message}"</div>
                                    <div style={{ color: "#61dafb" }} className="mb-2">{moment(message.created_date).format("DD MMMM YYYY h:mm A")}</div>
                                    <div className="btn btn-sm btn-custom-red mb-1 mt-1" data-message_id={message._id} onClick={deleteMessage}>Delete</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;