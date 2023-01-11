import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';

let posts = [
  { id: 1, likesCount: 5, message: 'Hi, how are you?' },
  { id: 2, like: 10, message: "It's my first post" },
  { id: 3, like: 11, message: "Blabla" },
  { id: 4, like: 11, message: "Dada" },


]
let dialogs = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Valera' },
  { id: 6, name: 'Kostya' }
]


let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
