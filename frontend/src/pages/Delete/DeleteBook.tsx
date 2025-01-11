import { FC, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Base } from "../../config";
import {BackButton} from "../../components/back/BackButton";
import {Spinner} from "../../components/spinner/Spinner";
import { useSnackbar } from "notistack";

const DeleteBook: FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();

    const handleDeleteBook = async () => {
        try {
            setLoading(true);
            const response = await Base.api.delete(`/books/${id}`);
            console.log(response, "Delete Book");
            navigate('/');
            enqueueSnackbar("Book Deleted Successfully", { variant: 'success' });
        }
        catch (err) {
            console.log(err);
            enqueueSnackbar("Failed to delete book", { variant: 'error' });
        }
        finally {
            setLoading(false);
        }
    }


    return (
        <div className="p-4">
            <BackButton destination="/"/>
            <h1 className="text-3xl my-4">Delete Book</h1>
            {loading && <Spinner />}
            <div className="flex flex-col items-center justify-center border-sky-400 rounded-xl w-[600px] p-8 mx-auto border-2">
                <h3 className="text-2xl">Are you sure you want to delete this book ? </h3>
                <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteBook}
                >
                    Yes, Delete it
                </button>
                <button className="bg-sky-300 text-white px-5 py-3 w-full" onClick={() => navigate(-1)}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteBook
