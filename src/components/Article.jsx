import React from "react";

// notes make articleContent snippet
const Article = ({ post, onDeletePost, onArticleSelect, onEditPost, onSetEditing }) => {
   const handleDelete = () => {
      onDeletePost(post.id);
   };

   const handleEdit = () => {
      onSetEditing(true);
      onEditPost(post);
   };

   const handleSelect = () => {
      onArticleSelect(post);
   };

   return (
      <tr>
         <td>
            <a onClick={handleSelect}>
               {post.articleTitle}
            </a>
         </td>
         <td>{post.articleContent}</td>
         <td>{post.createdDate}</td>
         <td>
            <button onClick={handleEdit} className="ui button">
               Edit
            </button>
            <button onClick={handleDelete} className="ui button negative">
               Delete
            </button>
         </td>
      </tr>
   );
};

export default Article;
