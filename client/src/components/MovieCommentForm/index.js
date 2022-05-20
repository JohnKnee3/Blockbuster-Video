import React, { useEffect, useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_MOVIE_COMMENT } from "../../utils/mutations";

function MovieCommentForm(id) {
    const productId = id.id;
    const [formState, setFormState] = useState({ movieCommentText:'' });
    const [characterCount, setCharacterCount] = useState(0);

    const [addMovieComment] = useMutation(ADD_MOVIE_COMMENT);
    
    const handleFormSubmit = async event => {
        // add a comment
        try {
            const mutationResponse = await addMovieComment({
                variables: {
                    movieCommentText: formState.movieCommentText,
                    productId: productId
                }
            });

            // clear form value
            setFormState('');
            setCharacterCount(0);
        } catch (e) {
        }
    };
    
    const handleChange = event => {
        console.log("handleChange" + event.target.value);
        if (event.target.value.length <= 280) {
            const { name, value } = event.target;
            setFormState({
                ...formState,
                [name]: value
            });
            setCharacterCount(event.target.value.length);
        }
    };

    return (
        <div>
            <p className={`m-0 ${characterCount === 280 ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {/* {error && <span className="ml-2">Something went wrong...</span>} */}
            </p>
            <form 
                className="flex-row justify-center justify-space-between-md align-stretch"
                >
                <textarea
                placeholder="Add a new comment"
                className="form-input col-12 col-md-9"
                name="movieCommentText"
                onChange={handleChange}
                ></textarea>
                <button 
                className="btn col-12 col-md-3" 
                type="submit"
                onClick={handleFormSubmit}
                >
                Submit
                </button>
            </form>
        </div>
    );
}

export default MovieCommentForm;