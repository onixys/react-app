import React from 'react';
import EventBus from 'vertx3-eventbus-client';
// import SockJS from 'sockjs-client';

export interface SockJsProps {
    data: string;
}

const SockJs: React.FunctionComponent<SockJsProps> = ({ data }) => {
    const eb = new EventBus('http://localhost:8080/eventbus');
    eb.onopen = () => {
        eb.send('chat.to.server', data);
        eb.registerHandler('chat.to.client', (error: any, message: any) => {
            if (error) console.log('received error: ' + JSON.stringify(error));
            else console.log('received a message: ' + JSON.stringify(message));
        });
    };

    eb.onclose = () => {
        console.log('closed');
    };

    // const sock = new SockJS('https://chat-server.azurewebsites.net/chat');
    // sock.onopen = () => {
    //     console.log('connection open');
    // };

    // sock.onmessage = (e: { data: any }) => {
    //     console.log('message received:', e.data);
    // };

    // sock.onclose = () => {
    //     console.log('close');
    // };

    return <div></div>;
};

export default SockJs;
