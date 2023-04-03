

import express from 'express';
import messageController from '../Controller/MessageController.js';

const router = express.Router();

// Envoyer un message
router.post('/', messageController.sendMessage);

// Lister les messages reçus
router.get('/recipient/:recipient', messageController.listMessages);

// Lire un message
router.get('/:id', messageController.getMessage);

export default router;
