import { Request, Response } from "express";
import { getAllTickets, createTicket, getTicketByDateAchat,  } from "./ticket.service";
import { Ticket } from "./ticket.models";

type Params = { date_achat: string}

//tous les tickets
export const getTickets = async (req: Request, res: Response) => {
    const tickets = await getAllTickets();
    res.json(tickets);
};

//un ticket par sa date d'achat
export const getTicket = async (req: Request<Params>, res:Response) => {
    const date_achat = new Date(req.params.date_achat);
    const ticket = await getTicketByDateAchat(date_achat);
    if (!ticket) {
        return res.status(404).json({error: 'ticket non trouvé'})
    }

    res.json(ticket)
}

//creer un ticket
export const postTicket = async (req: Request, res: Response) => {
    const ticketData: Ticket = req.body;
    try {
        const newTicket = await createTicket(ticketData);
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création du ticket' }); // Gestion des erreurs
    }
};