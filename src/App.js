import React from 'react';
import './App.css';
import Content from './Components/Content/Content'
import SidebarContainer from "./Components/Sidebar/SidebarContainer";


function App(props) {
    return (
          <div className="App">
                  <Content/>
                  <SidebarContainer/>
          </div>
  );
}

export default App;
