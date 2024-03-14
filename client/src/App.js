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
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  traceSampleRate: 10,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
  //allowedTracingUrls: ["http://localhost:3001/", "https://react-mongo-template.herokuapp.com/"],
  /*allowedTracingUrls: [
    { match: [/https:\/\/qa\.ascap\.com/, /https:\/\/ma-api-qa\.ascap\.com/], propagatorTypes: ["datadog"]}
  ]*/
  allowedTracingUrls: [
    { match: [/http:\/\/localhost\:3001/, /https\:\/\/react-mongo-template\.herokuapp\.com/], propagatorTypes: ["traceparent"] }
  ]
/*
allowedTracingUrls: [
  { match: /http:\/\/localhost\:3001/, propagatorTypes: ["traceparent"]},
  { match: /https\:\/\/react-mongo-template\.herokuapp\.com/, propagatorTypes: ["traceparent"]}
]
*/
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