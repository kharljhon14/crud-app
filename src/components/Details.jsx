import React, { useEffect, useState } from "react";

const Details = ({ post }) => {
   const [votes, setVotes] = useState(post.numberOfVotes);

   useEffect(() => {
      console.log(votes);
   }, [votes]);

   const handleUpVote = () => {
      setVotes((post.numberOfVotes += 1));
   };

   const handleDownVote = () => {
      if (post.numberOfVotes > 0) setVotes((post.numberOfVotes -= 1));
   };

   return (
      <div className="details">
         <h1 className="ui header">{post.articleTitle}</h1>
         <p className="ui header">{post.articleContent}</p>
         <p>{post.createdDate}</p>
         <h2>{post.numberOfVotes}</h2>
         <div className="buttons">
            <button onClick={handleUpVote} className="ui button positive">
               Upvote
            </button>
            <button onClick={handleDownVote} className="ui button negative">
               Downvote
            </button>
         </div>
      </div>
   );
};

export default Details;
