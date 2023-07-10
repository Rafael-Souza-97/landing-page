import appExpress from './app';

const port = process.env.PORT || 3001;

appExpress.listen(port);

console.log(`Api rodando na porta ${port}`);
