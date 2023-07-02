/*
//import { makeExecutableSchema } from 'graphql-tools';
const {makeExecutableSchema} = require('graphql-tools')
const {resolvers} = require('./resolvers')
//import {resolvers} from './resolvers';


const defs = `

  type books{
    title: String
  }

  `;




makeExecutableSchema({

  typeDefs: defs,
  resolvers: resolvers

})*/