import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Book } from "../../types/types"
import { Base } from "../../config"
import { BackButton } from "../../components/back/BackButton"
import { Spinner } from "../../components/spinner/Spinner"


const ShowBook: FC = () => {
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { id } = useParams<string>();

    const getBookDetails = async (): Promise<void> => {
        try {
            setLoading(true);
            const response = await Base.api.get(`/books/${id}`);
            console.log(response?.data, "Response Details");
            setBook(response?.data);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getBookDetails();
    }, [])


    return (
        <div className="p-4">
            <BackButton  destination="/"/>
            <h1 className="text-3xl my-4">
                Show Book
            </h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Id :</span>
                        <span>{book?._id}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Title :</span>
                        <span>{book?.title}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Author :</span>
                        <span>{book?.author}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Publish Year :</span>
                        <span>{book?.publishYear}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Description :</span>
                        <span>{book?.description ?? "Izoh"}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Create Time :</span>
                        <span>{new Date(book?.createdAt ?? "").toLocaleString()}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Last Update Time :</span>
                        <span>{new Date(book?.updatedAt ?? "").toLocaleString()}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowBook
