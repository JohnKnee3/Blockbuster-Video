import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Auth from "../../utils/auth";
import { QUERY_ONE_PRODUCT, QUERY_USER } from "../../utils/queries";
import { DELETE_MOVIE_COMMENT, UPDATE_MOVIE_COMMENT } from "../../utils/mutations";

function MovieCommentList() {
    // get a productId from the URL
    const { id: productId } = useParams();

    // work on getting username from user
    const { data: userData } = useQuery(QUERY_USER);
    // console.log("I am {data: userData}", { data: userData });

    let username;

    if (userData) {
        // console.log("I am userData", userData);
        username = userData.user.username;
        // console.log("I am username", username);
    }

    // create mutation to excute the DELETE_MOVIE_COMMENT mutation
    const [deleteMovieComment] = useMutation(DELETE_MOVIE_COMMENT);

    // create mutation to excute the UPDATE_MOVIE_COMMENT mutation
    const [updateMovieComment] = useMutation(UPDATE_MOVIE_COMMENT);

    // use useQuery to excute the ONE_PRODUCT query with a productId
    const { data } = useQuery(QUERY_ONE_PRODUCT, {
        variables: { id: productId },
    });

    // save ONE_PRODUCT query to comments variable
    const comments = data?.product.movieComments || {};

    // set state for movieCommentText
    const [formState, setFormState] = useState();
    const [characterCount, setCharacterCount] = useState(0);

    // set state for editmode
    const [editState, setEditState] = useState(false);

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

    // create function that accepts the movieComment id value as param and update the movieCommentText from the database
    const handleUpdateComment = async (currentCommentId) => {
        // get a comment id from the clicked comment
        // const commentId = currentCommentId;
        // get a movieCommentText from the clicked comment
        // const updatedComment = movieCommentText;
        console.log("handle form", currentCommentId)
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        // check if there is a loggedin user
        if (!token) {
            return false;
        }

        try {
            await updateMovieComment({
                variables: { 
                    _id: currentCommentId,
                    movieCommentText: formState.updatedCommentText
                },
            });
        } catch (e) {
        console.error(e);
        }

    };

    const currentComment = (_id, movieCommentText) => {
        const currentCommentId = _id
        const currentCommentText = movieCommentText

        console.log("current comment id", currentCommentId)        
        console.log("current comment text", currentCommentText)

        // renderEditForm(currentCommentId, currentCommentText)
    }

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            const { name, value } = event.target;
            setFormState({
                ...formState,
                [name]: value
            });
            setCharacterCount(event.target.value.length);
        }
    };
    //create function that render comment edit form 
    const renderEditForm = (currentCommentId, currentCommentText) => {

        const currentId = currentCommentId;
        const currentText = currentCommentText;

        console.log("edit form" + currentId)
        console.log("edit form" + currentText)

        return (
            <div>
                <p className={`m-0 ${characterCount === 280 ? 'text-error' : ''}`}>
                    Character Count: {characterCount}/280
                </p>
                <form>
                    <textarea 
                    required
                    name="updatedCommentText"
                    onChange={handleChange}
                    >{currentText}
                    </textarea>
                    <button id="submit" type="submit" onClick={() => handleUpdateComment(currentId)}>Done</button>
                </form>
            </div>

        )
    }

    // const renderCommentEdit = (_id, movieCommentText) => {
    //     // get a comment id from the clicked comment
    //     const commentId = _id;
    //     // get a movieCommentText from the clicked comment
    //     const oldComment = movieCommentText;
    //     console.log(oldComment)
    //     console.log(commentId)

    //     return (
    //         <form ref="editForm">
    //             <textarea ref="editText" required>{oldComment}</textarea>
    //             <button id="submit" type="submit" onClick={() => handleUpdateComment()}>Done</button>
    //         </form>
    //     )

    // };

    if (!comments.length) {
        return <h3>No Comments Yet</h3>;
    }
    
    if (editState) {

        return (
            <div>{renderEditForm()}</div>
        )
    } else {
        return (
        <div>
            {comments &&
            comments.map((comment) => (
                // console.log("I am comments", comments),
                // console.log("I am cooments.username", comments.username),
                 
                
                <div key={comment._id} className="card mb-3">
                <div key={comment._id}>
                {/* { editState ? 
                (renderEditForm(comments._id, comments.movieCommentText))
                : (
                <> */}
                    <p> {comment.movieCommentText}</p>
                    <p>
                    {" "}
                    {comment.username},{comment.createdAt}
                    </p>
                    {username === comment.username && (
                    <>
                        <button onClick={() => { setEditState(true); currentComment(comment._id, comment.movieCommentText); }}>
                            Edit
                        </button>
                        <button onClick={() => handleDeleteComment(comment._id)}>
                            Delete
                        </button>
                    </>
                    )}
                    {username === "Admin" && (
                    <>
                        <button>Edit</button>
                        <button onClick={() => handleDeleteComment(comment._id)}>
                        Delete
                        </button>
                    </>
                    )}   
                {/* </>             
                )} */}
                </div>
                </div>

            ))}
        </div>
        );
    };
}

export default MovieCommentList;
