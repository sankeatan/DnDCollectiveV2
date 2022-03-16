const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
// const schemaComposer = require('graphql-compose');
// const graphqlSchema = require('./schema');

// schemaComposer.merge(
//     graphqlSchema
//     )
// schemaComposer.getOTC('User').removeField('password')

// const newSchema = schemaComposer.buildSchema()

module.exports = { typeDefs, resolvers};
