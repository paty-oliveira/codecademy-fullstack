import BookSchedule from './components/Booklist';
import React from "react";

function App() {
	return (
		<div className="App">
			<h1><span role="img" aria-label="Book Emoji">📚</span> BookNow <span role="img" aria-label="Book Emoji">📚</span></h1>
			<BookSchedule />
		</div>
	);
}

export default App;
