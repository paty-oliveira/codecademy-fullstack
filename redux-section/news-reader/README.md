# News Reader

**Description:** This project—a news reader in which users can view and comment on various articles—gives you an opportunity to practice using Redux Toolkit’s createAsyncThunk and createSlice utilities to add asynchronous functionality to your Redux applications.

Currently, the app fetches and displays a list of all articles in their preview form. It also fetches and displays the current article, which can be selected and changed by the user.

Your task will be to complete the comments feature. Whenever the featured article changes, you will asynchronously fetch the comments for that article and add them to your store so they display under the article. Likewise, when a user submits a new comment, you will submit it to the server via an asynchronous request and display it in the article’s list of comments once it has been successfully created.