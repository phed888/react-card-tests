import React from 'react';
import TimelineRuler from './components/TimelineRuler'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    background-color: #efefef;
    height: 100%;
    font-size: 10px;
  }
  body {
    width: 960px;
    background-color: #ffffff;
    margin: 0 auto;
    height: 100vh;
    padding: 20px 60px;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <div className="App">
        <TimelineRuler />
      </div>
    </div>
  );
}

export default App;
