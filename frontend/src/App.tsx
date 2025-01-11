import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateBook from "./pages/Create/CreateBook";
import ShowBook from "./pages/Show/ShowBook";
import UpdateBook from "./pages/Update/UpdateBook";
import DeleteBook from "./pages/Delete/DeleteBook";


const App = () => {
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
