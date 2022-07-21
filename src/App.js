import React from 'react';
import './App.css';
import Content from './Components/Content/Content'
import Sidebar from "./Components/Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";

function App(props) {
  return (
          <div className="App">
              <BrowserRouter>
                  <Content dialogs={props.state.dialogsData}/>
                  <Sidebar state={props.state.dialogsData}/>
              </BrowserRouter>
          </div>
  );
}
export default App;
