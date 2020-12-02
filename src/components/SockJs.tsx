import React from 'react';
// import SockJS from 'sockjs-client';

export interface SockJsProps {
    data: string;
}

const SockJs: React.FunctionComponent<SockJsProps> = ({ data }) => {
    console.log(data);
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
