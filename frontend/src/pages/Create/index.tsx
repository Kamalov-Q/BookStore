import { FC, useState } from 'react'
import BackButton from '../../components/Back/BackButton'
import Spinner from '../../components/Spinner/Spinner'
import { useNavigate } from 'react-router-dom'
import { Base } from '../../config'


const CreateBook: FC = () => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [publishYear, setPublishYear] = useState<number>();
    const [description, setDescription] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSaveBook = async () => {
        try {
            setLoading(true);
            const data = {
                title,
                author,
                publishYear,
                description
            }
            const response = await Base.api.post('/books', { ...data });
            navigate('/');
            console.log("Post Response", response?.data);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Create Book</h1>
            {
                loading && <Spinner />
            }
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label htmlFor="" className='text-xl text-gray-500'>Title</label>
                    <input type="text" className='border-2 border-gray-500 px-4 py-2 w-full' onChange={(e) => setTitle(e?.target?.value)} />
                </div>
                <div className='my-4'>
                    <label htmlFor="" className='text-xl text-gray-500'>Author</label>
                    <input type="text" className='border-2 border-gray-500 px-4 py-2 w-full' onChange={(e) => setAuthor(e?.target?.value)} />
                </div>
                <div className='my-4'>
                    <label htmlFor="" className='text-xl text-gray-500'>Publish Year</label>
                    <input type="text" className='border-2 border-gray-500 px-4 py-2 w-full' onChange={(e) => setPublishYear(Number(e?.target?.value))} />
                </div>
                <div className='my-4'>
                    <label htmlFor="" className='text-xl text-gray-500'>Description</label>
                    <input type="text" className='border-2 border-gray-500 px-4 py-2 w-full' onChange={(e) => setDescription(e?.target?.value)} />
                </div>
                <button onClick={handleSaveBook} className='border-none bg-green-600 text-white px-5 py-2'>Add</button>
            </div>
        </div>
    )
}

export default CreateBook
