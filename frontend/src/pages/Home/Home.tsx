import { FC } from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { MdOutlineAddBox } from "react-icons/md"
import { Book, ShowType } from "../../types/types"
import { Base } from "../../config"
import {Spinner} from "../../components/spinner/Spinner"
import BooksTable from "../../components/home/BooksTable"
import BooksCard from "../../components/home/BooksCard"

const Home: FC = () => {

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showType, setShowType] = useState<ShowType | string>('card');

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
    <div className="p-4 container mx-auto w-full">
      <div className="flex justify-center items-center gap-x-4">
        {
          showType === 'table' ? (
            <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
              onClick={() => setShowType('card')}>
              Card
            </button>
          ) : (
            <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
              onClick={() => setShowType('table')}>
              Table
            </button>
          )}

      </div>
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
          showType === 'table' ? <BooksTable books={books} /> : <BooksCard books={books} />
        )
      }
    </div>
  )
}

export default Home
