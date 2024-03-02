import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../constant";


export const getDataFetch = createAsyncThunk(
    'dataSet/getDataFetch',
    async(_, {rejectWithValue}) => {
        const response = await fetch(BASE_URL);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            return rejectWithValue({error: 'Data fetch failed'})
        }
    }
)

const helperSlice = createSlice({
    name: "helperSlice",
    initialState: {
        navbarToggler: false,
        filteredItems: ["lastMonth"],
        isLoading: false,
        fetchedData: [],
        fetchError: "",
    }, 
    reducers: {
        toggleNavbar: (state,action) => {
            state.navbarToggler = action;
        },
        filterSelections: (state, action) => {
            state.filteredItems = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDataFetch.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getDataFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.fetchedData = action.payload;
            state.fetchError = '';
        })
        .addCase(getDataFetch.rejected, (state, action) => {
            state.isLoading = false;
            state.fetchError = action.payload.error;
        });
    }
    
})

export const { toggleNavbar, filterSelections } = helperSlice.actions;
export default helperSlice.reducer;