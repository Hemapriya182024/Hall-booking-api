import express from 'express';
import { getRooms, createRoom } from '../Controllers/rooms.controller.js';

const router = express.Router();

router.get('/getrooms', getRooms);
router.post('/createroom', createRoom);

export default router;
