import express from 'express'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express'
import router from './app/users/users.route.js';

const app = express();

const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title:'User API',
            version:'1.0.0'
        }
    },
    apis: ['./app/users/users.route.js'],
};
app.use(express.json({}));

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.get('/',(req,res)=>{
    res.write('<h1>welcome to our User Api</h1>');
})

app.use('/user', router);

app.listen(80,()=>{
    console.log('Server is running!');
});
