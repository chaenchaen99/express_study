
import express from 'express';
import UserRoute from './routers/UserRoute';
import HealthRoute from './routers/HealthRoute';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/user', UserRoute);
app.use('/api/health', HealthRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});