import express from 'express';
import cors from 'cors';
import eventRoute from './routes/eventRoute';
import categoryRoute from './routes/categoryRoute';
import pembicaraRoute from './routes/pembicaraRoute';

const app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.DATABASE_URL)

app.use(cors({
  origin: "https://utsskbpemweb.vercel.app",
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Ini adalah API untuk Invofest');
});

app.use('/events', eventRoute);
app.use('/categories', categoryRoute);
app.use('/speeker', pembicaraRoute);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
