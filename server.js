import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import _ from 'lodash';
import apiRoutes from './routes/api';

let app = express();
let _links = [
  {_id:1, title:'React.js Main Website', url:'https://facebook.github.io/react/'},
  {_id:2, title:'Relay.js Main Website', url:'https://facebook.github.io/relay/'}
];


//Middleware: GraphQL server
app.use('/graphql', GraphQLHTTP({
  schema: schema,
  graphiql: true
}));

//API V.1 Endpoint: links
app.use('/api/v1/links', apiRoutes);

//Middleware: Server static resources
app.use(express.static('public'));

//Serve index.html file (enable browser history)
app.get('*', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(3000);
