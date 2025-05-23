import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchProduct } from "../services/productServices";
import { getAllCategory, getCategoryByName } from "../services/catogeryServices";

export const fetchCategories = createAsyncThunk("category/fetchCategories", async () => {
    const response = await getAllCategory();
    return response.data;
});


export const fetchCategoryProductData = createAsyncThunk(
    "category/fetch",
    async (categoryName, { rejectWithValue }) => {
        try {
            const response = await getCategoryByName(categoryName);
            return response?.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const fetchSearchByCategory = createAsyncThunk(
    "category/searchProducts",
    async ({ search, category }, { rejectWithValue }) => {

        try {
            const response = await searchProduct(search, category);
            return response?.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categoryList: [],
        category: [],
        filteredItems: [],
        loading: false,
        error: null,
    },
    reducers: {
    },

    extraReducers: (builder) => {
        builder

            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categoryList = action.payload;
            })

            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchCategoryProductData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategoryProductData.fulfilled, (state, action) => {
                state.loading = false;
                state.category = action.payload;
                state.filteredItems = action.payload;
            })

            .addCase(fetchCategoryProductData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchSearchByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSearchByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.filteredItems = action.payload;
            })
            .addCase(fetchSearchByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default categorySlice.reducer;
