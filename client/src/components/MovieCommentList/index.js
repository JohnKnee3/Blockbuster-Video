import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Auth from "../../utils/auth";
import { QUERY_ONE_PRODUCT, QUERY_USER } from "../../utils/queries";
import { DELETE_MOVIE_COMMENT } from "../../utils/mutations";

function MovieCommentList() {
  // get a productId from the URL
  const { id: productId } = useParams();

  // work on getting username from user
  const { data: userData } = useQuery(QUERY_USER);
  console.log("I am {data: userData}", { data: userData });

  let username;

  if (userData) {
    // console.log("I am userData", userData);
    username = userData.user.username;
    console.log("I am username", username);
  }

  // create mutation to excute the DELETE_MOVIE_COMMENT mutation
  const [deleteMovieComment] = useMutation(DELETE_MOVIE_COMMENT);

  // use useQuery to excute the ONE_PRODUCT query with a productId
  const { data } = useQuery(QUERY_ONE_PRODUCT, {
    variables: { id: productId },
  });

  // save ONE_PRODUCT query to comments variable
  const comments = data?.product.movieComments || {};

  // create function that accepts the commentId value as param and delete the movieCommentText from the database
  const handleDeleteComment = async (_id) => {
    // get a comment id from the clicked comment
    const commentId = _id;

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    // check if there is a loggedin user
    if (!token) {
      return false;
    }

    try {
      await deleteMovieComment({
        variables: { _id: commentId },
      });
    } catch (e) {
      console.error(e);
    }

    window.location.reload();
  };

  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }
  return (
    <div>
      {comments &&
        comments.map((comments) => (
          <div key={comments._id} className="card mb-3">
            <div key={comments._id}>
              <p> {comments.movieCommentText}</p>
              <p>
                {" "}
                {comments.username},{comments.createdAt}
              </p>
              {Auth.loggedIn() ? (
                <>
                  <button>Edit</button>
                  <button onClick={() => handleDeleteComment(comments._id)}>
                    Delete
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default MovieCommentList;
