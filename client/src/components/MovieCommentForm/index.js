import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_MOVIE_COMMENT } from "../../utils/mutations";

function MovieCommentForm(id) {
    // get a productId from the detail page
    const productId = id.id;
    // set state for movieCommentText
    const [formState, setFormState] = useState({ movieCommentText:'' });
    const [characterCount, setCharacterCount] = useState(0);

    // create mutation to excute the ADD_MOVIE_COMMENT mutation
    const [addMovieComment] = useMutation(ADD_MOVIE_COMMENT);
    
    // create function that accepts the productId value as param and add the movieCommentText from the database
    const handleFormSubmit = async () => {
        try {
            await addMovieComment({
                variables: {
                    movieCommentText: formState.movieCommentText,
                    productId: productId
                }
            });

            // clear form value
            setFormState('');
            setCharacterCount(0);
                        
        } catch (e) {   
            console.error(e);
        }
    };
    
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