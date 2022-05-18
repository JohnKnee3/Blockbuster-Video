import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
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
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      username: $username
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_MOVIE_COMMENT = gql`
  mutation addMovieComment($movieCommentBody: String!) {
    addMovieComment(movieCommentBody: $movieCommentBody) {
      _id
      movieCommentBody
      createdAt
      firstName
    }
  }
`;

// export const ADD_MOVIE_COMMENT = gql`
//   mutation addMovieComment($movieCommentText: String!) {
//     addMovieComment(movieCommentText: $movieCommentText) {
//       _id
//       movieCommentText
//       createdAt
//       username
//     }
//   }
// `;
