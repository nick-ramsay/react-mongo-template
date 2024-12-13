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
  service: 'react-mongo-template',
  env: 'staging',
  version: '1.0.24',
  sessionSampleRate: 50,
  sessionReplaySampleRate: 50,
  traceSampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
  //allowedTracingUrls: ["http://localhost:3001/", "https://react-mongo-template.herokuapp.com/"],
  /*allowedTracingUrls: [
    { match: [/http:\/\/localhost:3001/, /https\:\/\/react-mongo-template\.herokuapp\.com/], propagatorTypes: ["datadog"] }
  ]*/
  allowedTracingUrls: [
    { match: /http:\/\/localhost:3001/, propagatorTypes: ["datadog"] },
    { match: /https\:\/\/react-mongo-template\.herokuapp\.com/, propagatorTypes: ["datadog"] }
  ]

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