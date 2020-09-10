import React, { /*Component, useState, useEffect*/ } from 'react';
import logo from '../../../src/logo.svg';
import "./style.css";

const Home = () => {

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
                </header>
            </div>
            <form className="mt-3">
                <div className="form-row text-center">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Enter a new test message" />
                    </div>
                </div>
                <div className="form-row text-center">
                    <div className="col mt-3">
                        <div type="button" className="btn btn-sm btn-custom">Submit</div>
                    </div>
                </div>
            </form>
            <table className="table table-striped table-dark mt-3">
                <tbody>
                    <tr className="text-center">
                        <td>Test Message 1</td>
                        <td><div type="button" className="btn btn-sm btn-custom-red">Delete</div></td>
                    </tr>
                    <tr className="text-center">
                        <td>Test Message 2</td>
                        <td><div className="btn btn-sm btn-custom-red">Delete</div></td>
                    </tr>
                </tbody>
            </table>
        </div >
    )

}

export default Home;