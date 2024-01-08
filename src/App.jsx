import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./conponents/Header";
import Footer from "./conponents/footer";
import Sidebar from "./conponents/Sidebar";
import CreatePost from "./conponents/CreatePost";
import PostList from "./conponents/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
