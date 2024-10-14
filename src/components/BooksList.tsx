import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Heading2 } from "./Typography/Heading";
import { ColContainer } from "./Layout/FlexContainer";
import BookCard from "./BookCard";

const BooksList = () => {
    const books = useSelector((state: RootState) => state.books.books);

    return (
        <ColContainer>
            <Heading2 color="white">Books</Heading2>
            <ul style={{ padding: 0 }}>
                {books.map((book) => (
                    <li
                        key={book.id}
                        style={{
                            marginBottom: "16px",
                            listStyleType: "none",
                            maxWidth: "40vw", // <--- Temporary fix to prevent overflow
                        }}
                    >
                        <BookCard
                            title={book.title}
                            author={book.author}
                            publishedDate={book.publishedDate}
                            id={book.id}
                        />
                    </li>
                ))}
            </ul>
        </ColContainer>
    );
};

export default BooksList;
