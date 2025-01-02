import { AiOutlineEdit } from "react-icons/ai"
import { BiUserCircle, BiShow } from "react-icons/bi"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineDelete } from "react-icons/md"
import { PiBookOpenTextLight } from "react-icons/pi"
import { Link } from "react-router-dom"
import { BookTypesProps } from "../../types/types"
import { useState } from "react"
import BookAddModal from "./BookModal"

const BookSingleCard = ({ book }: BookTypesProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <div key={book._id} className='border-2 border-gray-500 rounded-xl px-4 py-2 m-4 relative hover:shadow-xl'>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>{book?.publishYear}</h2>
            <h4 className='my-2 text-gray-500'>{book?._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-2xl text-red-300' />
                <h2 className='text-xl my-1'>{book?.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-2xl text-red-300' />
                <h2 className='text-xl my-1'>{book?.author}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <BiShow className='text-2xl text-blue-800 hover:text-black' onClick={() => setShowModal(true)} />
                <Link to={`/books/details/${book?._id}`}>
                    <BsInfoCircle className='text-2xl text-gray-800 hover:text-black' />
                </Link>
                <Link to={`/books/edit/${book?._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/books/delete/${book?._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                </Link>
            </div>
            {
                showModal && (<BookAddModal book={book} onClose={() => setShowModal(false)} />)
            }
        </div>
    )
}

export default BookSingleCard
