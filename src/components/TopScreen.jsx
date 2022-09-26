import React from "react";
import Article from "./Article";

const TopScreen = ({ posts, onCreateNew, onDeletePost, onArticleSelect, onEditPost, onSetEditing }) => {
   const renderedPosts = posts.map((post) => {
      return <Article key={post.id} post={post} onDeletePost={onDeletePost} onArticleSelect={onArticleSelect} onEditPost={onEditPost} onSetEditing={onSetEditing} />;
   });

   const onCreateNewArticle = () => {
      onCreateNew(true);
   };

   return (
      <div className="top-screen">
         <button onClick={onCreateNewArticle} className="ui button primary">
            Create New Article
         </button>
         <table className="ui celled table">
            <thead>
               <tr>
                  <th>Article Title</th>
                  <th>Article Content Snippet</th>
                  <th>Created Date </th>
                  <th>Edit / Delete</th>
               </tr>
            </thead>
            <tbody>{posts.length > 0 ? renderedPosts : <tr></tr>}</tbody>
         </table>
      </div>
   );
};

export default TopScreen;
