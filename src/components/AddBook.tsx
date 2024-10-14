import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/bookReducer";
import { createBook } from "../api/api";
import { Heading2 } from "./Typography/Heading";
import { TextInput } from "./Inputs/TextInput";
import { ColContainer, RowContainer } from "./Layout/FlexContainer";
import { BasicDatePicker } from "./Inputs/BasicDatePicker";
import { Button1 } from "./Buttons/Button1";
import FlexItem from "./Layout/FlexItem";
import { colorMap } from "../styleVars/colors";

const AddBook = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishedDate, setPublishedDate] = useState("");

    const handleAddBook = async () => {
        const newBook = await createBook({ title, author, publishedDate });
        dispatch(addBook(newBook));
        setTitle("");
        setAuthor("");
        setPublishedDate("");
    };

    return (
        <ColContainer>
            <Heading2 color="white">Add Book</Heading2>
            <RowContainer>
                <TextInput
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextInput
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </RowContainer>
            <FlexItem
                style={{
                    backgroundColor: colorMap.orange300,
                    padding: "10px",
                    borderRadius: "4px",
                }}
            >
                <BasicDatePicker
                    label="Published Date"
                    setDate={setPublishedDate}
                />
            </FlexItem>
            <Button1
                onClick={handleAddBook}
                backgroundColorOnHover="blue500"
                fontColorOnHover="white"
            >
                Add
            </Button1>
        </ColContainer>
    );
};

export default AddBook;
