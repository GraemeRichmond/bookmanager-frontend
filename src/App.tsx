import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBooks } from "./features/bookReducer";
import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";
import { fetchBooks } from "./api/api";
import { Heading1 } from "./components/Typography/Heading";
import { colorMap } from "./styleVars/colors";
import { RowContainer } from "./components/Layout/FlexContainer";
import FlexItem from "./components/Layout/FlexItem";

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadBooks = async () => {
            const books = await fetchBooks();
            dispatch(setBooks(books));
        };

        loadBooks();
    }, [dispatch]);

    return (
        <div
            style={{
                padding: "20px",
                backgroundColor: colorMap.charcoal400,
            }}
        >
            <Heading1 color="orange400">
                Book Management - Graeme Richmond
            </Heading1>
            <RowContainer justifyContent="space-evenly" alignItems="start">
                <FlexItem basis="50%">
                    <AddBook />
                </FlexItem>
                <FlexItem basis="50%">
                    <BooksList />
                </FlexItem>
            </RowContainer>
        </div>
    );
};

export default App;
