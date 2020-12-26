import 'graphql-import-node';
import typeDefs from './schema.graphql';
import { makeExecutableSchema } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';


const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs
});

export default schema;