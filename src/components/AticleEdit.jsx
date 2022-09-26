import React, { useState } from "react";

const ArticleEdit = ({ post, onSetEditing }) => {
   const [title, setTitle] = useState(post.articleTitle);
   const [content, setContent] = useState(post.articleContent);

   const onFormSubmit = (evt) => {
      evt.preventDefault();

      post.articleTitle = title;
      post.articleContent = content;
      onSetEditing(false);
   };
   return (
      <form onSubmit={onFormSubmit} className="ui form">
         <div className="field">
            <input type="text" placeholder="Article Title" value={title} onChange={(evt) => setTitle(evt.target.value)} />
         </div>
         <div className="field">
            <input type="text" placeholder="Article Content" value={content} onChange={(evt) => setContent(evt.target.value)} />
         </div>
         <button className="ui button secondary">Edit</button>
      </form>
   );
};

export default ArticleEdit;
