// Comenzamos traendo el modelo de datos
const graphql = require('graphql');
const db = require("../models");
const libros = db.books

const { 
  GraphQLObjectType, GraphQLString, 
  GraphQLID, GraphQLInt,GraphQLSchema, 
  GraphQLList,GraphQLNonNull 
} = graphql;


const BookType = new GraphQLObjectType({
    name: 'Book',
    //We are wrapping fields in the function as we dont want to execute this ultil 
    //everything is inilized. For example below code will throw error AuthorType not 
    //found if not wrapped in a function
    fields: () => ({
        id: { type: GraphQLID  },
        name: { type: GraphQLString }, 
        pages: { type: GraphQLInt },
        author: {type: GraphQLString}
        
    })
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
      
      books:{
          type: new GraphQLList(BookType),
          resolve(parent, args) {
              return libros.find({});
          }
      },
      
      
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});


