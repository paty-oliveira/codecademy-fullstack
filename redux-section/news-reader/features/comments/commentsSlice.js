// Import createAsyncThunk and createSlice here.

// Create loadCommentsForArticleId here.

// Create postCommentForArticleId here.

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
      // Add initial state properties here.
    },
    // Add extraReducers here.
  });

  export const selectComments = (state) => state.comments.byArticleId;
  export const isLoadingComments = (state) => state.comments.isLoadingComments;
  export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

  export default commentsSlice.reducer;
