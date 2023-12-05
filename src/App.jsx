import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetail from "./components/VideoDetail";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import VideoList from "./components/Admin/VideoList";
import AddVideo from "./components/Admin/AddVideo";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="flex flex-col h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/admin" element={<VideoList />} />
        <Route path="/addvideo" element={<AddVideo />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
