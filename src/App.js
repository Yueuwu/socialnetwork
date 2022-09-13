import React from 'react';
import './App.css';
import Content from './Components/Content/Content'
import Sidebar from "./Components/Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";


function App(props) {
    return (
          <div className="App">
              <BrowserRouter>
                  <Content/>
                  <Sidebar state={props.store.getState().messagesReducer.dialogsData}/>
              </BrowserRouter>
          </div>
  );
}
export default App;
