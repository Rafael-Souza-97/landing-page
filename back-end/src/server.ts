const port = process.env.PORT || 3001;
import appExpress from './app';

appExpress.listen(port);
console.log(`Api rodando na porta ${port}`);
