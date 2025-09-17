import { User } from "../User/usermodels";
export interface Ticket {
    id: number;
    eventId: number;
    nom_user: User;
    date_achat: Date;
    quantity: number;
}
