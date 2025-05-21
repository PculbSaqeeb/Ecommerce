import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCarouselData } from "../services/crousoleServices";

export const fetchCarousel = createAsyncThunk("carousel/fetchCarousel", async () => {
    const response = await getCarouselData();
    return response.data;
});


const crousoleSlice = createSlice({
    name: "crousole",
    initialState: {
        crousole: [],
        loading: false,
        error: null,
    },
    reducers: {
    },

    extraReducers: (builder) => {
        builder

            .addCase(fetchCarousel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchCarousel.fulfilled, (state, action) => {
                state.crousole = action.payload;
            })

            .addCase(fetchCarousel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default crousoleSlice.reducer;
