import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";

import { QUERY_ONE_PRODUCT } from '../../utils/queries';

function MovieCommentList () {
    const {id: productId} = useParams();
    const { data } = useQuery(QUERY_ONE_PRODUCT, {
        variables: { id: productId }
    });

    const comments = data?.product.movieComments || {};
    if (!comments.length) {
      return <h3>No Comments Yet</h3>;
    }
    return (
        <div>
            {comments &&
                comments.map((comments) => (
                <div key={comments._id} className="card mb-3">
                    <div >
                        <p>{comments.movieCommentText}</p>
                    </div>
                        <p>
                            {comments.username}, {comments.createdAt}
                        </p>
                </div>
                ))}
        </div>
    );
  };
  
  export default MovieCommentList;