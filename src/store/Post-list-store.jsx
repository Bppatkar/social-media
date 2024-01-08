import { createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

function postListReducerFunc(state, action) {
  let currPostList = state;

  if (action.type === "add_item") {
    currPostList = [action.payload, ...currPostList];
  } else if (action.type === "add_Initial_items") {
    currPostList = action.payload.posts;
  } else if (action.type === "deleted_item") {
    currPostList = state.filter((post) => post.id !== action.payload.postId);
  }
  return currPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, disptachPostList] = useReducer(postListReducerFunc, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    disptachPostList({
      type: "add_item",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userId: userId,
        reaction: reactions,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    disptachPostList({
      type: "add_Initial_items",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    disptachPostList({
      type: "deleted_item",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Frontend Developer",
//     body: "I am Frontend Developer and I Know Html, Css , JavaScript and React",
//     userId: "user-1",
//     reaction: 12,
//     tags: ["frontend", "software", "developer", "react"],
//   },
//   {
//     id: "2",
//     title: "Backend Developer",
//     body: "I am Backend Developer and I Know Node js, Express Js and MongoDB database",
//     userId: "user-2",
//     reaction: 17,
//     tags: ["Backend", "developer", "Node"],
//   },
// ];

export default PostListProvider;
