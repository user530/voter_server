import './app/dotenv.js';
import { app } from './app/app.js';

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT && parseInt(process.env.PORT) || DEFAULT_PORT;

app.listen(PORT, () => console.log('Server is up and running at port %d', PORT))

