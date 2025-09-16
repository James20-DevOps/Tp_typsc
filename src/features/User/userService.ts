import { pool } from '../../db/db';
import { User, NewUser } from './usermodels';

export const createUser = async (user: NewUser): Promise<User> => {  //Promise<User> indique que la fonction retourne une promesse qui résout un objet de type User
    const { username, password } = user;
    const resultat = await pool.query(
        'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', 
        [username, password]
    );
    return resultat.rows[0]; //retourne le nouvel utilisateur inséré
}

export const findUserByEmail = async (email:string): Promise<User | null> => {
    const resultat = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );
    return resultat.rows[0] || null; //retourne l'utilisateur trouvé ou null si aucun utilisateur n'a été trouvé
}
