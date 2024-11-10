import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',  
  user: 'root',       
  password: '',       
  database: 'sample_db',  
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, email, password, confirmPassword } = req.body;

 
  if (!username || !email || !password || password !== confirmPassword) {
    return res.status(400).json({ error: 'Please fill out all fields correctly' });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);

    const [existingUser] = await connection.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if ((existingUser as any[]).length > 0) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    await connection.query(
      'INSERT INTO users (username, email, password, confirmPassword) VALUES (?, ?, ?, ?)',
      [username, email, password, confirmPassword] 
    );

    connection.end();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database connection error' });
  }
}
