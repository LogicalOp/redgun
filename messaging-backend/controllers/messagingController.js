// messagingController.js
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

const listMessages = async (req, res) => {
    console.log('Fetching all messages');

    try {
        const messages = await knex('messages').orderBy('date', 'asc');
        return messages;
    } catch (error) {
        throw new Error('Error fetching messages');
    }
};

const listMessagesBetweenUsers = async (req, res) => {
    const { senderId, receiverId } = req.query;
    console.log(`Fetching messages between ${senderId} and ${receiverId}`);

    if (!senderId || !receiverId) {
        throw new Error('senderId and receiverId are required');
    }

    try {
        const messages = await knex('messages')
            .where({ sender: senderId, recipient: receiverId })
            .orWhere({ sender: receiverId, recipient: senderId })
            .orderBy('date', 'asc');
        return messages;
    } catch (error) {
        throw new Error('Error fetching messages');
    }
};

const listMessagesByUserId = async (req, res) => {
    const { userId } = req.params;
    console.log(`Fetching messages sent by user ${userId}`);

    if (!userId) {
        throw new Error('userId is required');
    }

    try {
        const messages = await knex('messages')
            .where({ sender: userId })
            .orderBy('date', 'asc');
        return messages;
    } catch (error) {
        throw new Error('Error fetching messages');
    }
};

const listRecentMessages = async (req, res) => {
    const { userId } = req.params;
    console.log(`Fetching most recent messages for user ${userId}`);

    if (!userId) {
        throw new Error('userId is required');
    }

    try {
        const recentMessages = await knex('messages')
            .select('sender', 'recipient', 'message', 'date')
            .where('sender', userId)
            .orWhere('recipient', userId)
            .orderBy(['sender', 'recipient', 'date'], 'desc')
            .distinctOn(['sender', 'recipient']);

        return recentMessages;
    } catch (error) {
        console.error('Error fetching recent messages:', error);
        throw new Error('Error fetching recent messages');
    }
};

module.exports = {
    listMessages,
    listMessagesBetweenUsers,
    listMessagesByUserId,
    listRecentMessages,
};