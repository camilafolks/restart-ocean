import React, { useState } from "react";
import LSidebar from "../components/Foro/Left-Sidebar/LSidebar";
import PostList from "../components/Foro/PostList";
import RSidebar from "../components/Foro/Right-Sidebar/RSidebar";
import PostForm from "../components/Foro/PostForm"; // Asegúrate de importar PostForm si es un componente separado
import { Container, Row, Col } from 'react-bootstrap';

function Foro() {
  // Aquí comienza la lógica del post list más el contenedor donde comenzar a escribir un post
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([
      { ...post, id: Date.now(), comments: [] },
      ...posts,
    ]);
  };

  const addComment = (postId, comment) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    ));
  };

  const editPost = (postId, newTitle, newContent) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, title: newTitle, content: newContent } : post
    ));
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <Container fluid className="foro-container">
      <Row>
        <Col xs={12} md={3} className="sidebar-left">
          <LSidebar />
        </Col>
        <Col xs={12} md={6} className="post-list">
          {/* <PostForm addPost={addPost} /> */}
          <PostList
            posts={posts}
            addComment={addComment}
            editPost={editPost}
            deletePost={deletePost}
          />
        </Col>
        <Col xs={12} md={3}>
          <RSidebar />
        </Col>
      </Row>
    </Container>


  );
}

export default Foro;
