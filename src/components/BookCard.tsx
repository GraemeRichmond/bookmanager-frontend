import { colorMap } from "../styleVars/colors";
import { ColContainer } from "./Layout/FlexContainer";
import { Heading3 } from "./Typography/Heading";
import { P1, P2 } from "./Typography/P";
import { Button2 } from "./Buttons/Button1";
import { useDispatch } from "react-redux";
import { deleteBook } from "../features/bookReducer";

const BookCard = ({
    title,
    author,
    publishedDate,
    id,
}: {
    title: string;
    author: string;
    publishedDate: string;
    id: number;
}) => {
    const dispatch = useDispatch();

    const handleDeleteBook = () => {
        dispatch(deleteBook(id));
    };

    return (
        <ColContainer
            rowGap={10}
            style={{
                backgroundColor: colorMap.orange300,
                padding: "10px",
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 1)",
            }}
        >
            <Heading3>{title}</Heading3>
            <P1>by {author}</P1>
            <P2>Published: {publishedDate}</P2>
            <Button2
                backgroundColor="orange400"
                color="black"
                backgroundColorOnHover="red400"
                fontColorOnHover="white"
                onClick={handleDeleteBook}
            >
                Delete
            </Button2>
        </ColContainer>
    );
};

export default BookCard;
