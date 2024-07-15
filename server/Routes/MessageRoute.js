const router = require('express').Router();
const Conversation = require('../Models/ConversationModel.js');
const Message = require('../Models/MessageModel.js');
// const { protectRoute } = require('../authMiddleware.js');
const { getReceiverSocketId } = require('../Sockets/socket.js');


router.post('/send/:id', async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        await newMessage.save();
        conversation.messages.push(newMessage._id);
        await conversation.save();

        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage);
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Error in sendMessage controller: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id; 

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate('messages');

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error in getMessages controller: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
