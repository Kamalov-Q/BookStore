import { FC } from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import { Book } from "../../types/types"
import { Base } from "../../config"
import Spinner from "../../components/Spinner/Spinner"

const Home: FC = () => {

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getBooks = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await Base.api.get('/books');
      setBooks(response?.data?.data);
    }
    catch (err) {
      console.log(err);
    }
    finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    getBooks();
  }, [])

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books</h1>
        <Link to={`/books/create`}>
          <MdOutlineAddBox className="text-4xl text-sky-800" />
        </Link>
      </div>
      {
        loading ? (
          <div className="h-[65vh] w-full flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">
                  No
                </th>
                <th className="border border-slate-600 rounded-md">
                  Title
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Author
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Publish Year
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Description
                </th>
                <th className="border border-slate-600 rounded-md">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {
                books && Array.from(books)?.map((book, index) => (
                  <tr key={index} className="h-8">
                    <td className="border border-slate-700 rounded-md text-center">
                      {index + 1}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {book?.title}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                      {book?.author}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                      {book?.publishYear}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                      {book?.description}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      <div className="flex justify-center gap-x-4">
                        <Link to={`/books/details/${book?._id}`}>
                          <BsInfoCircle className="text-2xl text-green-800" />
                        </Link>
                        <Link to={`/books/edit/${book?._id}`}>
                          <AiOutlineEdit className="text-2xl text-yellow-600" />
                        </Link>
                        <Link to={`/books/delete/${book?._id}`}>
                          <MdOutlineDelete className="text-2xl text-red-600" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  )
}

export default Home
