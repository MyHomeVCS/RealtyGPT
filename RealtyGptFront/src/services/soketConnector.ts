import { io } from 'socket.io-client';
const url = import.meta.env.MODE === 'development' ? 'http://localhost:3000' : 'https://realtygpt.am/';

export const socket = io(url);
