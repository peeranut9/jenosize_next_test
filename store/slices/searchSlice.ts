import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { SearchData } from "@/models/search.model";
import { placeQuery } from "@/services/placeService";

export interface SearchState {
  error?: string;
  status: string;
  result?: SearchData;
}

const initialState: SearchState = {
  error: undefined,
  status: "idle",
  result: undefined,
};

export const searchQuery = createAsyncThunk(
  "search/query",
  async (query: string) => {
    const response = await placeQuery({
      query,
    });
    return response;
  }
);

export const queryNextPage = createAsyncThunk(
  "search/nextpage",
  async (nextPageToken: string) => {
    const response = await placeQuery({
      nextPageToken,
    });
    return response;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchQuery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchQuery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.result = action.payload;
      })
      .addCase(searchQuery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(queryNextPage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(queryNextPage.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.result) {
          state.result.next_page_token = action.payload?.next_page_token;
          state.result.results = [
            ...state.result.results,
            ...(action.payload?.results || []),
          ];
        } else {
          state.result = action.payload;
        }
      })
      .addCase(queryNextPage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const SearchResultsSelector = (
  store: RootState
): SearchData | undefined => store.search.result;
export const SearchStatusSelector = (store: RootState): string =>
  store.search.status;
export const SearchErrorSelector = (store: RootState): string | undefined =>
  store.search.error;

export default searchSlice.reducer;
