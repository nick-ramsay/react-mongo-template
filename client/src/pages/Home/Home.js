import React, { Component, useState, useEffect } from 'react';
import logo from '../../../src/logo.svg';
import "./style.css";

const override = "display: block; margin: 0 auto; border-color: indigo;";

const Home = () => {

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
                </header>
                <form className="form-inline">
                    <div className="row mt-3">
                        <div className="col">
                            <label for="staticEmail2" className="sr-only">Email</label>
                            <textarea type="text" placeholder="Enter Test Message Here" />
                        </div>
                        <div className="col d-flex">
                            <button type="button" className="btn btn-sm btn-custom mt-auto mb-auto">Save Message</button>
                        </div>
                    </div>
                </form>
                <div className="col-md-12 mt-5">
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Messages</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>No Messages</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )

}

export default Home;