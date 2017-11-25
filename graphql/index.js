const express = require('express')
const cors = require('cors')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const bodyParser = require('body-parser')

const schema = require('./schema')

const sendHTMLPage = (req, res) =>
	res.status(200).send(`
      <!DOCTYPE html>
      <html>
          <head>
              <title>GraphQL and Apollo</title>
          </head>
          <body>
            <h1>GraphQL and Apollo Workshop</h1>
						<p><a href="http://localhost:4000/graphiql">GraphiQL</a> | http://localhost:4000/graphiql</p>
          </body>
      </html>
    `)

var app = express()

app.use(cors())
app.get('/', sendHTMLPage)

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema
  })
)

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

app.listen(4000, () =>
	console.log(`app running at 'http://localhost:4000', graphiql running at '/graphiql'`)
)
