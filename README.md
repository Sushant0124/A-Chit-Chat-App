# Chit Chat App

## Overview

Chit Chat is a real-time chat application built using Node.js, Express, and Socket.io. This application allows users to join a chat room, send messages, and receive messages in real-time.

## Features

- Real-time messaging
- User join/leave notifications
- Cross-browser support with CORS

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/chit-chat-app.git
    cd chit-chat-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. The server will be running on `http://localhost:8080`.

3. Open your browser and navigate to `http://localhost:8080` to start chatting.

4. SOCKET.IO
   Socket.io is a library that enables real-time, bidirectional, and event-based communication between the browser and the server. It consists of two parts:

A server-side library for Node.js: It handles the WebSocket connections and provides an API for sending and receiving messages.
A client-side library for the browser: It establishes the connection to the server and provides methods to send and receive messages.
Why Use Socket.io?
Real-time Communication: Enables real-time, bidirectional communication between clients and servers.
Event-Driven: Uses an event-driven model to communicate, making it easy to handle various events such as user join, message send, and user leave.
Cross-Browser Support: Handles the browser compatibility issues for you, providing a consistent experience across different browsers.
Automatic Reconnection: Automatically reconnects when a connection is lost.
In this project, Socket.io is used to manage real-time chat functionalities, such as broadcasting messages to all connected users and notifying users when someone joins or leaves the chat.

## Project Structure

```plaintext
chit-chat-app/
├── public/
│   ├── index.html
│   └── style.css
├── server.js
├── package.json
└── README.md
