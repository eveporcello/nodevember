const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')
const fs = require('fs')

const schema = fs.readFileSync('./schema.graphql', 'utf-8')

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})

module.exports = executableSchema
