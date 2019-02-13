if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const app = require('./app');
const port = app.get('port');

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
    console.log(`Enviroment: ${process.env.NODE_ENV}`);
})