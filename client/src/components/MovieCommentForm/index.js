import React, { useEffect, useState } from "react";

import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MOVIECOMMENT } from '../../utils/actions';

function MovieCommentForm({comments}) {
    const [state, dispatch] = useStoreContext();

    const [commentText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    
    const handleChange = event => {
        if (event.target.value.length <= 280) {
          setText(event.target.value);
          setCharacterCount(event.target.value.length);
        }
    };

    const addMovieComment = () => {
        // add a comment
        dispatch({
          type: ADD_MOVIECOMMENT,
          movieComment: { ...commentText }
        })
        // clear form value
        setText('');
        setCharacterCount(0);
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
                // value=""
                className="form-input col-12 col-md-9"
                onChange={handleChange}
                ></textarea>
                <button 
                className="btn col-12 col-md-3" 
                type="submit"
                onClick={addMovieComment}
                >
                Submit
                </button>
            </form>
        </div>
    );
}

export default MovieCommentForm;