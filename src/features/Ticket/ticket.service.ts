import { pool } from "../../db/db";
import { Ticket } from "./ticket.models";

// cree un ticket et l'acheter

export const createTicket = async (ticket: Ticket): Promise<Ticket> => {
    const client = await pool.connect();
    try {
        const res = await client.query(
            'INSERT INTO tickets (eventId, nom_user, date_achat, quantity) VALUES ($1, $2, $3, $4) RETURNING *',
            [ticket.eventId, ticket.nom_user, ticket.date_achat, ticket.quantity]
        );
        return res.rows[0];
    } finally {
        client.release();
    }
};

//voir tous les tickets
export const getAllTickets = async (): Promise<Ticket[]> => {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM tickets');
        return res.rows;
    } finally {
        client.release();
    }
};
// voir un ticket par sa Date d'achat
export const getTicketByDateAchat = async (date_achat: Date): Promise<Ticket | undefined> => {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM tickets WHERE date_achat = $1', [date_achat]);
        return res.rows[0];
    } finally {
        client.release();
    }
};

//Modifier un ticket
export const updateTicket = async (id: number, ticket: Partial<Ticket>): Promise<Ticket | undefined> => {
    const client = await pool.connect();
    try {
        const res = await client.query(
            'UPDATE tickets SET eventId = COALESCE($1, eventId), nom_user = COALESCE($2, nom_user), date_achat = COALESCE($3, date_achat), quantity = COALESCE($4, quantity) WHERE id = $5 RETURNING *',
            [ticket.eventId, ticket.nom_user, ticket.date_achat, ticket.quantity, id]
        ); // COALESCE permet de ne pas modifier une valeur si elle n'est pas fournie
        //VERIFIER SI LE TICKET A ETE TROUVE
        if (res.rows.length === 0) {
            return undefined;
        }
        return res.rows[0];
    } finally {
        client.release();
    }
};

//Supprimer un ticket
export const deleteTicket = async (id: number): Promise<void> => {
    const client = await pool.connect();
    try {
        await client.query('DELETE FROM tickets WHERE id = $1', [id]);
    } finally {
        client.release();
    }
};