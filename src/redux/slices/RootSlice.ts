import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        isbn: "isbn",
        title: "title",
        author: "author",
        length: "length",
        style: "style",
    },
    reducers: {
        chooseISBN: (state, action) => { state.isbn = action.payload},
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseLength: (state, action) => { state.length = action.payload},
        chooseStyle: (state, action) => { state.style = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseISBN, chooseTitle, chooseAuthor, chooseLength, chooseStyle} = rootSlice.actions