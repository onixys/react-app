import React from 'react';
import './App.css';
import ChatForm from './components/ChatForm';

const App: React.FunctionComponent = () => {
    return (
        <ChatForm
            onSubmit={(chat) => {
                console.log(chat);
            }}
        />
    );
};

export default App;
