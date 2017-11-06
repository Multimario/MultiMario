import debugMsg from './debug.js';

const canvas = document.getElementById('game');

const Width = window.innerWidth;
canvas.width = Width;
const Height = window.innerHeight;
canvas.height = Height;

const context = canvas.getContext('2d');

debugMsg('Starting game');

context.fillStyle = '#aaffdd';
context.fillRect(0, 0, Width, Height);