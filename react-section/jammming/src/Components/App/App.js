import "./App.css";
import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        searchResults: [
            {name: "Tiny Dancer", artist: "Elton John", album: "Madman Across The Water", id: 1},
            {name: "Tiny Dancer", artist: "Tim McGraw", album: "Love Story", id: 2},
            {name: "Tiny Dancer", artist: "The White Raven", album: "Tiny Dancer", id: 3}
        ],
        playlistName: "Playlist by Patricia",
        playlistTracks: [
            {name: "Stronger", artist: "Britney Spears", album: "Oops!... I Did it Again", id: 4},
            {name: "So Emotional", artist: "Whitney Houston", album: "Whitney", id: 5},
            {name: "It's Not Right But It's Okay", artist: "Whitney Houston", album: "My Love is Your Love", id: 6}
        ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
	this.search = this.search.bind(this);
}

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (!tracks.find(savedTrack => savedTrack.id === track.id)) {
        tracks.push(track);
    }

    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks} );
  }

  updatePlaylistName(newPlaylistName) {
    this.setState({ playlistName: newPlaylistName });
  }

  savePlaylist() {
    const tracksUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(searchItem) {
	console.log(searchItem);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
                searchResults={this.state.searchResults}
                onAdd={this.addTrack} />
            <Playlist
                playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
