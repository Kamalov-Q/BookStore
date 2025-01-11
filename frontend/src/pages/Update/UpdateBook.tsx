import { FC, useEffect, useState } from 'react'
import {BackButton} from '../../components/back/BackButton'
import {Spinner} from '../../components/spinner/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import { Base } from '../../config'
import { useSnackbar } from 'notistack'


const UpdateBook: FC = () => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [publishYear, setPublishYear] = useState<number>();
    const [description, setDescription] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        try {
            setLoading(true);
            Base.api.get(`/books/${id}`).then((response) => {
                setTitle(response?.data?.title);
                setAuthor(response?.data?.author);
                setPublishYear(response?.data?.publishYear);
                setDescription(response?.data?.description);
            });
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }, []);


    const handleEditBook = async () => {
        try {
            setLoading(true);
            const data = {
                title: title,
                author: author,
                publishYear: publishYear,
                description: description
            }
            const response = await Base.api.put(`/books/${id}`, data);
            navigate('/');
            enqueueSnackbar("Book Edited Successfully", { variant: 'success' });
            console.log(response, "Edit Book");

        }
        catch (err) {
            console.log(err);
            enqueueSnackbar("Failed to edit book", { variant: 'error' });
        }
        finally {
            setLoading(false);
        }
    }



    return (
        <div className='p-4'>
            <BackButton destination='/'/>
            <h1 className='text-3xl my-4'>Create Book</h1>
            {
                loading && <Spinner />
            }
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label htmlFor="" className='text-xl text-gray-500'>Title</label>
                    <input type="text" className='border-2 
                    border-gray-500 px-4 py-2 w-full'
                        value={title}
                        onChange={(e) => setTitle(e?.target?.value)} />
                </div>
                <div className='my-4'>
                    <label htmlFor="" className='text-xl text-gray-500'>Author</label>
                    <input type="text"
                        value={author} className='border-2 border-gray-500 px-4 py-2 w-full' onChange={(e) => setAuthor(e?.target?.value)} />
                </div>
                <div className='my-4'>
                    <label htmlFor="" className='text-xl text-gray-500'>Publish Year</label>
                    <input type="text"
                        value={publishYear}
                        className='border-2 border-gray-500 px-4 py-2 w-full' onChange={(e) => setPublishYear(Number(e?.target?.value))} />
                </div>
                <div className='my-4'>
                    <label htmlFor="" className='text-xl text-gray-500'>Description</label>
                    <input type="text"
                        value={description}
                        className='border-2 border-gray-500 px-4 py-2 w-full' onChange={(e) => setDescription(e?.target?.value)} />
                </div>
                <button
                    onClick={handleEditBook} className='border-none bg-sky-600 text-white px-5 py-2'>Edit</button>
            </div>
        </div>
    )
}
export default UpdateBook;
