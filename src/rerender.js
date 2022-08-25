import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State, {addMessage} from "./Redux/State";
import {addPost} from "./Redux/State";

export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App addMessage={addMessage} addPost={addPost} state={State}/>
        </React.StrictMode>
    );
}

