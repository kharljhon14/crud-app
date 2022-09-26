import React, { useState } from "react";
import { getCurrentDate } from "../helper";

// post = {
//     id
//     artileTitle
//     artileContent
//     createdDate
//     numberOfVotes

// }

const CreateNewArticle = ({ onAddNewPost, onCreateNew }) => {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");

   const onFormSubmit = (evt) => {
      evt.preventDefault();

      const newPost = {
         id: (Date.now() * Math.random() * 70).toFixed(0).toString(),
         articleTitle: title,
         articleContent: content,
         createdDate: getCurrentDate(),
         numberOfVotes: 0,
      };

      onAddNewPost(newPost);
      onCreateNew();
   };

   return (
      <form onSubmit={onFormSubmit} className="ui form">
         <div className="field">
            <input type="text" placeholder="Article Title" value={title} onChange={(evt) => setTitle(evt.target.value)} />
         </div>
         <div className="field">
            <input type="text" placeholder="Article Content" value={content} onChange={(evt) => setContent(evt.target.value)} />
         </div>
         <button className="ui button secondary">Post</button>
      </form>
   );
};

export default CreateNewArticle;
