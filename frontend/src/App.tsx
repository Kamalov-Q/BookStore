import axios from "axios";
import { useEffect } from "react"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/Create";
import ShowBook from "./pages/Show";
import UpdateBook from "./pages/Update";
import DeleteBook from "./pages/Delete";


const App = () => {

  const getData = async () => {
    const response = await axios.get('http://localhost:5555/api/books');
    console.log(response, "Response");
  }

  useEffect(() => {
    getData();
    console.log("Working");
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<UpdateBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default App
