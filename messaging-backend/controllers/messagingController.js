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
        const messages = await knex('messages')
            .join('users as sender', 'messages.sender', 'sender.inumber')
            .join('users as receiver', 'messages.recipient', 'receiver.inumber')
            .select(
                'messages.*',
                'sender.first_name as sender_first_name',
                'sender.last_name as sender_last_name',
                'receiver.first_name as receiver_first_name',
                'receiver.last_name as receiver_last_name'
            )
            .orderBy('messages.date', 'asc');
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
            .join('users as sender', 'messages.sender', 'sender.inumber')
            .join('users as receiver', 'messages.recipient', 'receiver.inumber')
            .select(
                'messages.*',
                'sender.first_name as sender_first_name',
                'sender.last_name as sender_last_name',
                'receiver.first_name as receiver_first_name',
                'receiver.last_name as receiver_last_name'
            )
            .where(function() {
                this.where({ 'messages.sender': senderId, 'messages.recipient': receiverId })
                    .orWhere({ 'messages.sender': receiverId, 'messages.recipient': senderId });
            })
            .orderBy('messages.date', 'asc');
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
            .join('users as sender', 'messages.sender', 'sender.inumber')
            .join('users as receiver', 'messages.recipient', 'receiver.inumber')
            .select(
                'messages.*',
                'sender.first_name as sender_first_name',
                'sender.last_name as sender_last_name',
                'receiver.first_name as receiver_first_name',
                'receiver.last_name as receiver_last_name'
            )
            .where('messages.sender', userId)
            .orderBy('messages.date', 'asc');
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
            .orderBy(['sender', 'recipient', { column: 'date', order: 'desc' }])
            .distinctOn(['sender', 'recipient']);

        console.log('Recent messages:', recentMessages); // Debugging log
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