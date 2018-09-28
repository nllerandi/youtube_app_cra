import _ from "lodash";
import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyANawJyLQKpg6YM4BCoeUMbZMKSUx4Hk_U";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        this.goSearch("surfing");
    }

    goSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            console.log(searchTerm);
        });
    }


    render() {
        const videoSearch = _.debounce((newTerm) => {
            this.goSearch(newTerm);
        }, 700);

        return (
            <div>
                <SearchBar
                    onSearchTermChange={videoSearch}
                />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(theChosenOne) => {
                        this.setState({selectedVideo: theChosenOne})
                    }}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

export default App;