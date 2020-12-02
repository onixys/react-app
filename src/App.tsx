import React, { useState } from 'react';
import ChatForm from './components/ChatForm';
import './App.css';
import SockJs from './components/SockJs';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { decrement, increment } from './actions';

interface AppProps {
    chat: string;
}

const App: React.FunctionComponent<AppProps> = ({ chat }) => {
    const counter = useSelector((state: any) => state.counter);
    const isLogged = useSelector((state: any) => state.isLogged);
    const dispatch = useDispatch();

    const [currentChat, setCurrentChat] = useState(chat);
    return (
        <div>
            <h1>Counter: {counter}</h1>
            {isLogged ? '' : <h3>Not logged</h3>}
            <Button onClick={() => dispatch(increment(2))}>+</Button>
            <Button onClick={() => dispatch(decrement(1))}>-</Button>
            <ChatForm
                onSubmit={(value) => {
                    setCurrentChat(value.chat);
                }}
            />

            <SockJs data={currentChat} />
        </div>
    );
};

export default App;
