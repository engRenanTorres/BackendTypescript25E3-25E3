import routes from './Api/routes';
import express, { Request, Response } from 'express';
import Logger from './Infra/Logger';
import { basicAuthMiddleware } from './basicAuth';
import ErrorHandler from './Infra/ErrorHandler';
import setupSwagger from './Api/config/Swagger';

const app = express();
const port = 3000;

app.use(express.json());


app.use(Logger.init());

app.use('/api', basicAuthMiddleware, routes);
setupSwagger(app);

app.get('/', (req: Request, res: Response) => {
    res.json('Bem vindo a primeira rota!!!');
});

app.use(ErrorHandler.init());

app.listen(port, () => {
    console.info(`Servidor rodando na porta: http://localhost:${port} \n
        📚 Documentação Swagger disponível em: http://localhost:3000/api-docs`);
});

