const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
    title: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    movieComments: [MovieComment]
    categories: [Category]
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type MovieComment {
    _id: ID
    movieCommentText: String
    createdAt: String
    username: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(categories: ID, name: String): [Product]
    product(_id: ID!): Product
    users: [User]
    user: User
    order(_id: ID!): Order
    movieComment(username: String): [MovieComment]
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      username: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    addMovieComment(productId: ID!, movieCommentText: String!): Product
    updateUser(
      username: String
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// addMovieComment(movieCommentText: String!): MovieComment
