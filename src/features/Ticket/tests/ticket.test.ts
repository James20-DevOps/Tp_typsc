import { getAllTickets, getTicketByDateAchat } from "../ticket.service";
import { getTickets, getTicket  } from "../ticket.controller";
//importé vitest
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { Ticket } from "../ticket.models";

//mock pour simuler les requetes

describe('Ticket Service and Controller', () => {
  let tickets: Ticket[];

  beforeAll(async () => {
    // Simuler la récupération des tickets avant les tests
    tickets = await getAllTickets();
  });

  afterAll(() => {
    // Nettoyage si nécessaire après les tests
  });

  describe('getAllTickets', () => {
    it('should return an array of tickets', () => {
      expect(Array.isArray(tickets)).toBe(true);
      expect(tickets.length).toBeGreaterThan(0);
      });
    });
  });

  describe('getTicketByDateAchat', () => {
    it('should return tickets for a specific date', async () => {
      const dateAchat = '2023-10-01'; // Exemple de date
      const result = await getTicketByDateAchat(new Date(dateAchat));
      expect(Array.isArray(result)).toBe(true);
      if (Array.isArray(result)) {
        result.forEach((ticket: Ticket) => {
          expect(ticket.date_achat).toBe(dateAchat);
        });
      }
    });

    it('should return an empty array for a date with no tickets', async () => {
      const dateAchat = '1900-01-01'; // Date sans tickets
      const result = await getTicketByDateAchat(new Date(dateAchat));
      expect(result).toEqual([]);
    });
  });

    describe('Ticket Controller', () => {
    it('getTickets should return all tickets', async () => {
      const req: any = {};
      const res: any = {
        status: (code: number) => {
          expect(code).toBe(200);
          return res;
        },
        json: (data: Ticket[]) => {
          expect(Array.isArray(data)).toBe(true);
          expect(data.length).toBeGreaterThan(0);
        }
      };
      await getTickets(req, res);
    });
  });