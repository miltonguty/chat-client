import { io } from 'socket.io-client';

const URL = process.env.REACT_APP_SERVER_URL
console.log(URL)
export const socket = io(URL, {
    autoConnect: false
});

