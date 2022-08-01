import { createAsyncThunk } from '@reduxjs/toolkit';


export const loadCommentsForArticleId = createAsyncThunk(
  'comments/loadCommentsForArticleId',
  async(id) => {
    const route = `api/articles/${id}/comments`;
    const response = await fetch(route);
    const json = await response.json();
    return json;
  }
)

export const postCommentForArticleId = createAsyncThunk(
  'comments/postCommentForArticleId',
  async({ articleId, comment }) => {
    const requestBody = JSON.stringify(comment);
    const endpoint = `api/articles/${articleId}/comments`;
    const options = {method: 'POST', body: requestBody};
    const response = await fetch(endpoint, options);
    const json = await response.json();
    return json;
  }
)

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    byArticleId: {},
    isLoadingComments: false,
    failedToLoadComments: false,
    createCommentIsPending: false,
    failedToCreateComment: false
  },
  extraReducers: {
    [loadCommentsForArticleId.pending]: (state, action) => {
      state.isLoadingComments = true;
      state.failedToLoadComments = false;
    },
    [loadCommentsForArticleId.rejected]: (state, action) => {
      state.isLoadingComments = false;
      state.failedToLoadComments = true;
    },
    [loadCommentsForArticleId.fulfilled]: (state, action) => {
      const { articleId, comments } = action.payload;
      state.byArticleId[articleId] = comments;
      state.isLoadingComments = false;
      state.failedToLoadComments = false;
    },
    [postCommentForArticleId.pending]: (state, action) => {
      state.createCommentIsPending = true;
      state.failedToCreateComment = false;
    },
    [postCommentForArticleId.rejected]: (state, action) => {
      state.createCommentIsPending = false;
      state.failedToCreateComment = true;
    },
    [postCommentForArticleId.fulfilled]: (state, action) => {
      const { articleId, comments } = action.payload;
      state.byArticleId[articleId] = comments;
      state.createCommentIsPending = false;
      state.failedToCreateComment = false;
    }
  }
});

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;
