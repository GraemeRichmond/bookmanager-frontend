import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import BookCard from "../../components/BookCard";
import booksReducer, { removeBook } from "../../features/bookReducer";
import { deleteBook } from "../../api/api";

// Mock the deleteBook action
jest.mock("../../api/api");
jest.mock("../../features/bookReducer", () => ({
    ...jest.requireActual("../../features/bookReducer"),
    removeBook: jest.fn(),
}));

describe("BookCard", () => {
    let store: ReturnType<typeof configureStore>;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                books: booksReducer,
            },
        });
        store.dispatch = jest.fn();
        (deleteBook as jest.Mock).mockResolvedValue(1);
    });

    it("renders book information correctly", () => {
        render(
            <Provider store={store}>
                <BookCard
                    id={1}
                    title="Test Book"
                    author="Test Author"
                    publishedDate="2023-01-01"
                />
            </Provider>
        );

        expect(screen.getByText("Test Book")).toBeInTheDocument();
        expect(screen.getByText("by Test Author")).toBeInTheDocument();
        expect(screen.getByText("Published: 2023-01-01")).toBeInTheDocument();
    });

    it("calls deleteBook action when delete button is clicked", () => {
        render(
            <Provider store={store}>
                <BookCard
                    id={1}
                    title="Test Book"
                    author="Test Author"
                    publishedDate="2023-01-01"
                />
            </Provider>
        );

        fireEvent.click(screen.getByText("Delete"));

        expect(store.dispatch).toHaveBeenCalledWith(removeBook(1));
    });
});
