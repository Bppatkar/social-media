import { useContext, useRef } from "react";

import { PostList } from "../store/Post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="htmlForm-label">
          Enter Your User Id Here :-
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="htmlForm-control"
          id="userId"
          placeholder="User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="htmlForm-label">
          Post Title :-
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="htmlForm-control"
          id="id"
          placeholder="How Are You Feeling Today ...."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="htmlForm-label">
          Post Content : -
        </label>
        <textarea
          rows="4"
          ref={postBodyElement}
          type="text"
          className="htmlForm-control"
          id="id"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="htmlForm-label">
          No. of Reactions:-
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="htmlForm-control"
          id="reactions"
          placeholder="How Many People Reacted To This Post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Tags" className="htmlForm-label">
          Enter Your #Hashtags Here:-
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="htmlForm-control"
          id="Tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
