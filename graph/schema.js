/*
// Nos traemos la funciónn que utilizaremos de la dependencia de graphql
const { buildSchema } = require("graphql");

// Utilizamos este método para crear nuestros esquemas de la siguiente forma
module.exports = buildSchema(`

  type Book {
    _id: ID!
    titleBook: String!
    author: String!
    genre: String!
  }


  type Query {
    books:[Book!]
  }

 

  schema {
    query: Query
    
  }
`);*/