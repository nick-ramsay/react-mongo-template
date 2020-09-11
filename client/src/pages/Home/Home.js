import React, { /*Component, useState,*/useEffect } from 'react';
import { useInput } from '../../sharedFunctions/sharedFunctions';
import API from "../../utils/API";
import moment from 'moment';
import logo from '../../../src/logo.svg';
import "./style.css";

const Home = () => {

    var [newMessage, setNewMessage] = useInput("");
    var [messages, setMessages] = useInput([]);

    useEffect(() => {
        console.log("Use effect called...");

        API.findAllMessages().then(
            res => {
                //console.log(res.data);
                setMessages(messages => res.data);
            }
        );
    }, [])


    const saveMessage = () => {
        if (newMessage !== "") {
            API.createMessage(newMessage, new Date()).then(
                res => console.log(res.data)
            );
        }
    };

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
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
                                    <div type="button" className="btn btn-sm btn-custom" onClick={saveMessage}>Submit</div>
                                </div>
                            </div>
                        </form>
                        <table className="table table-striped table-dark mt-3">
                            <tbody>
                                <tr className="text-center">
                                    <td style={{ fontStyle: "italic" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque augue vitae nisl eleifend tincidunt. In condimentum ante nisl, in elementum quam sollicitudin a. Integer maximus sed risus eget imperdiet. Proin at efficitur ligula. Maecenas iaculis erat vitae sem pulvinar ornare. Nam tempus, nisl eu fringilla elementum, massa nisi molestie nunc, sit amet ullamcorper massa nulla nec erat. Duis gravida consectetur diam non suscipit."</td>
                                    <td>{moment().format("DD MMMM YYYY h:mm A")}</td>
                                    <td><div className="deletion-x">X</div></td>
                                </tr>
                                <tr className="text-center">
                                    <td style={{ fontStyle: "italic" }}>"Test Message 2"</td>
                                    <td>{moment().format("DD MMMM YYYY h:mm A")}</td>
                                    <td><div className="btn btn-sm btn-custom-red">Delete</div></td>
                                </tr>
                                <tr className="text-center">
                                    <td style={{ fontStyle: "italic" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque augue vitae nisl eleifend tincidunt. In condimentum ante nisl, in elementum quam sollicitudin a. Integer maximus sed risus eget imperdiet. Proin at efficitur ligula. Maecenas iaculis erat vitae sem pulvinar ornare. Nam tempus, nisl eu fringilla elementum, massa nisi molestie nunc, sit amet ullamcorper massa nulla nec erat. Duis gravida consectetur diam non suscipit."</td>
                                    <td>{moment().format("DD MMMM YYYY h:mm A")}</td>
                                    <td><div type="button" className="btn btn-sm btn-custom-red">Delete</div></td>
                                </tr>
                                {messages.map((message, i) => (
                                    <tr className="text-center">
                                        <td style={{ fontStyle: "italic" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque augue vitae nisl eleifend tincidunt. In condimentum ante nisl, in elementum quam sollicitudin a. Integer maximus sed risus eget imperdiet. Proin at efficitur ligula. Maecenas iaculis erat vitae sem pulvinar ornare. Nam tempus, nisl eu fringilla elementum, massa nisi molestie nunc, sit amet ullamcorper massa nulla nec erat. Duis gravida consectetur diam non suscipit."</td>
                                        <td>{moment().format("DD MMMM YYYY h:mm A")}</td>
                                        <td><div type="button" className="btn btn-sm btn-custom-red">Delete</div></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;