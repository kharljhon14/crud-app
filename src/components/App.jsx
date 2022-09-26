import React, { useState } from "react";
import CreateNewArticle from "./CreateNewArticle";
import TopScreen from "./TopScreen";
import Details from "./Details";
import ArticleEdit from "./AticleEdit";

const App = () => {
   const [posts, setPosts] = useState([]);
   const [selectedPost, setSelectedPost] = useState({});
   const [isEditing, setIsEditing] = useState(false);
   const [isAdding, setIsAdding] = useState(false);
   const [detailed, setDetailed] = useState(false);

   const onCreateNewArticle = () => {
      setIsAdding(!isAdding);
   };

   const addNewPost = (post) => {
      setPosts([...posts, post]);
   };

   const editPost = (post) => {
      setSelectedPost(post);
   };

   const deletePost = (id) => {
      setPosts(posts.filter((post) => post.id !== id));
   };

   const handleSelectedPost = (post) => {
      setSelectedPost(post);
      setDetailed(!detailed);
   };

   return (
      <div className="app">
         {isEditing ? (
            <ArticleEdit post={selectedPost} onSetEditing={setIsEditing} />
         ) : (
            <div className="top-screen">
               {isAdding ? (
                  <CreateNewArticle onAddNewPost={addNewPost} onCreateNew={onCreateNewArticle} />
               ) : detailed ? (
                  <Details post={selectedPost} />
               ) : (
                  <TopScreen posts={posts} onCreateNew={onCreateNewArticle} onDeletePost={deletePost} onArticleSelect={handleSelectedPost} onEditPost={editPost} onSetEditing={setIsEditing} />
               )}
            </div>
         )}
      </div>
   );
};

export default App;
