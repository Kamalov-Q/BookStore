import { AiOutlineClose } from "react-icons/ai"
import { BookAddProps } from "../../types/types"
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"

const BookAddModal = ({ book, onClose }: BookAddProps) => {
    return (
        <div className="fixed z-30 bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center" onClick={onClose}>
            <div className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative" onClick={(event) => event.stopPropagation()}>
                <AiOutlineClose className="absolute top-6 right-6 text-red-600 cursor-pointer" onClick={onClose} />
                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>{book?.publishYear}</h2>
                <h4 className='my-2 text-gray-500'>{book?._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-2xl text-red-300' />
                    <h2 className='text-xl my-1'>{book?.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-2xl text-red-300' />
                    <h2 className='text-xl my-1'>{book?.author}</h2>
                </div>
                <p className="mt-4">{book?.description}</p>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum explicabo dolore est cumque, error earum, accusamus fuga ipsum adipisci reprehenderit quam sequi quas a ipsam veritatis culpa excepturi quibusdam? Iusto, perferendis dignissimos quod deserunt minima debitis. Dolore dolorum libero quae nisi est pariatur totam exercitationem sit repellendus delectus. Laborum!</p>
            </div>
        </div>
    )
}

export default BookAddModal
