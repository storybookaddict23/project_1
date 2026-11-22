import { useState } from "react";
import { createPost } from "./Api";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const postData = {
      title: title,
      body: body,
      userId: 1,
    };

    createPost(postData).then((data) => {
      setPost(data);
    });
  }

  return (
    <div className="App">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Enter post"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <br /><br />

        <button type="submit">Create Post</button>
      </form>

      {/* Display POST response on webpage */}
      {post && (
        <div className="post-result">
          <h2>POST Response</h2>
          <p><strong>ID:</strong> {post.id}</p>
          <p><strong>Title:</strong> {post.title}</p>
          <p><strong>Body:</strong> {post.body}</p>
          <p><strong>User ID:</strong> {post.userId}</p>
        </div>
      )}
    </div>
  );
}

export default App;