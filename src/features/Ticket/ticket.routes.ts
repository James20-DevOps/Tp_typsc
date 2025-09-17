import express from "express";
import { getTickets, getTicket, postTicket } from "./ticket.controller";

const router = express.Router();

router.get('/', getTickets)
router.get('/:date_achat', getTicket)
router.post('/', postTicket)

export default router;