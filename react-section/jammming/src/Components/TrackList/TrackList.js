import React from "react";
import "./TrackList.css";
import {Track} from "../Track/Track.js";

export class TrackList extends React.Component {

    mapTracks() {
        return this.props.tracks.map(
            track => {
                return <Track track={track} key={track.id} />
            }
        );
    }

    render() {
        return (
            <div className="TrackList">
                {this.mapTracks()}
            </div>
        )
    }
}