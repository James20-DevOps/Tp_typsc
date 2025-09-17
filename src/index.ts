import express from 'express'
import productRoutes from './features/products/product.routes'
import Userroutes from './features/User/userRoutes'
import ticketRoutes from './features/Ticket/ticket.routes';


const app = express();
const PORT = 3000;



app.use(express.json()); // Middleware pour parser le JSON

app.use('/api/products', productRoutes)
app.use('/api/User', Userroutes)
app.use('/api/tickets', ticketRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

