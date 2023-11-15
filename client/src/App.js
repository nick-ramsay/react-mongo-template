import React from "react";
import keys from "./keys";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "../src/pages/Home/Home";

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: keys.ddrum.react_rum_application_id,
    clientToken: keys.ddrum.react_rum_client_token,
    site: 'datadoghq.com',
    service:'react-mongo-template',
    env:'staging', 
    version: '1.0.23',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input',
    allowedTracingUrls: ["http://localhost:3001/", "https://react-mongo-template.herokuapp.com/"]
});
    
datadogRum.startSessionReplayRecording();

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
