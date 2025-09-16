//Controlleur pour les endpoints utilisateur
import { Request, Response } from 'express';
import * as userService from './userService';
import { NewUser } from './usermodels';

// Crée un nouvel utilisateur
export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const newUser: NewUser = req.body;
        const user = await userService.createUser(newUser);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
};

// Récupère un utilisateur par son Email
export const findUserByEmail = async (req: Request, res: Response): Promise<void> => {
    try {
        const email = req.params.email;
        if (!email) {
            res.status(400).json({ error: 'Email paramètre manquant' });
            return;
        }
        const user = await userService.findUserByEmail(email);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
    }
};