import { BooksTypesProps } from '../../types/types'
import BookSingleCard from './BookSingleCard'


const BooksCard = ({ books }: BooksTypesProps) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {books && Array.from(books)?.map((book) => (
                <BookSingleCard book={book} key={book._id} />
            ))}
        </div>
    )
}

export default BooksCard
