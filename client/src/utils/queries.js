import gql from "graphql-tag";

export const QUERY_PRODUCTS = gql`
  query getProducts($categories: ID) {
    products(categories: $categories) {
      _id
      name
      description
      price
      quantity
      image
      categories {
        _id
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      categories {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
      title
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
      movieComment {
        _id
        movieCommentText
        createdAt
      }
    }
  }
`;

export const QUERY_MOVIECOMMENT = gql`
  query movieComment($username: String) {
    movieComment(username: $username) {
      _id
      movieCommentText
      createdAt
      username
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
