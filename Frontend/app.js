const socket=io('https://your-server-domain');

const form=document.querySelector('#send-container');
const messageInput=document.querySelector('.message-input');
const messageContainer=document.querySelector('.container');


const username=prompt("Enter your name");

socket.emit('new-user-joined',username);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const message=messageInput.value;
    append(`You:${message}`,'right');
    socket.emit('send',message);
    messageInput.value="";
    messageInput.focus();

});

const append=(message,position)=>{
const msgel=document.createElement('div');
msgel.innerText=message;
msgel.classList.add('message');
if(position==='left'){
    msgel.classList.add('left');
    
    }else{
        msgel.classList.add('right');
    }
    messageContainer.append(msgel);

};
socket.on('user-joined',username=>{
    append(`${username} joined the chat`,'left');
});
socket.on('receive',data=>{
    append(`${data.name}:${data.message}`,'left');
});
socket.on('left',name=>{
    append(`${name} left the chat`,'right');
});