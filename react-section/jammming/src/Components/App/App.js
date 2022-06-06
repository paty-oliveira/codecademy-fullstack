import "./App.css";
import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchResults: [
      {name: "Tiny Dancer", artist: "Elton John", album: "Madman Across The Water", id: 1},
      {name: "Tiny Dancer", artist: "Tim McGraw", album: "Love Story", id: 2},
      {name: "Tiny Dancer", artist: "The White Raven", album: "Tiny Dancer", id: 3}
    ]
  };
}


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            {/* Add a Playlist component */}
          </div>
        </div>
      </div>
    )
  }
}


export default App;
