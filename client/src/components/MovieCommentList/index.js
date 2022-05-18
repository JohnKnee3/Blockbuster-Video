import React from 'react';
import { useQuery } from "@apollo/react-hooks";

import { QUERY_MOVIE_COMMENT } from '../../utils/queries';

function MovieCommentList () {
    const { data } = useQuery(QUERY_MOVIE_COMMENT);
    const comments = data?.movieComment || {};
    
    if (!comments.length) {
      return <h3>No Comments Yet</h3>;
    }
  
    return (
        <div>
            {comments &&
                comments.map((comments) => (
                <div key={comments._id} className="card mb-3">
                    <p className="card-header">
                        {comments.username}
                        comments on {comments.createdAt}
                    </p>
                    <div className="card-body">
                    <p>{comments.movieCommentText}</p>
                    </div>
                </div>
                ))}
        </div>
    );
  };
  
  export default MovieCommentList;