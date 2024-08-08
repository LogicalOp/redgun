// Step 1: Set up the project
const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');
const knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'innovation',
        password: 'I<3SAPHANA',
        port: 5432,
    }
});

const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server);

// Step 4: Define routes for message history
app.get('/messages', async (req, res) => {
  const { senderId, receiverId } = req.query;
  console.log(`Fetching messages between ${senderId} and ${receiverId}`);
  
  // Error handling for undefined senderId or receiverId
  if (!senderId || !receiverId) {
      console.error('Error: senderId or receiverId is undefined');
      return res.status(400).json({ error: 'senderId and receiverId are required' });
  }
  
  try {
      const messages = await knex('messages')
          .where({ sender: senderId, recipient: receiverId })
          .orWhere({ sender: receiverId, recipient: senderId })
          .orderBy('date', 'asc');
      res.json(messages);
  } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/messages/:userId', async (req, res) => {
  const { userId } = req.params;
  console.log(`Fetching messages sent by user ${userId}`);
  
  // Error handling for undefined userId
  if (!userId) {
      console.error('Error: userId is undefined');
      return res.status(400).json({ error: 'userId is required' });
  }
  
  try {
      const messages = await knex('messages')
          .where({ sender: userId })
          .orderBy('date', 'asc');
      res.json(messages);
  } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/messages', async (req, res) => {
  console.log(req.body);
  const { sender, recipient, message } = req.body;
  console.log(`Sender: ${sender}, Recipient: ${recipient}, Message: ${message}`);
  
  // Error handling for undefined sender, recipient, or message
  if (!sender || !recipient || !message) {
      console.error('Error: sender, recipient, or message is undefined');
      return res.status(400).json({ error: 'sender, recipient, and message are required' });
  }
  
  try {
      await knex('messages').insert({
          sender: sender,
          recipient: recipient,
          message: message,
      });
      io.to(recipient).emit('new_message', { sender, message });
      res.status(201).send('Message sent successfully');
  } catch (error) {
      console.error('Error inserting message:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Step 5: Set up Socket.IO for real-time messaging
io.on('connection', (socket) => {
socket.on('join', (userId) => {
  socket.join(userId);
});

  socket.on('send_message', async ({ senderId, receiverId, message }) => {
    await knex('messages').insert({
      sender: senderId,
      receiver: receiverId,
      content: message,
      created_at: new Date(),
    });
    socket.to(receiverId).emit('new_message', { senderId, message });
  });
});

// Step 3: Initialize the server
const PORT = 1000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));