import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "../src/pages/Home/Home";

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '47f005cd-cfa6-4861-847d-9faa739f8934',
    clientToken: 'pub2247e42dc6fc8ca8fc08c1ecc470e646',
    site: 'datadoghq.com',
    service:'react-mongo-template',
    env:'staging', 
    version: '1.0.0',
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
