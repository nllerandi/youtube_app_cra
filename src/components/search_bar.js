import React, { Component } from "react"

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ""
        }
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.searchTerm}
                    onChange={e => this.inputHasChanged(e.target.value)}
                />
            </div>
        )
    }

    inputHasChanged(newTerm) {
        this.setState({searchTerm: newTerm});
        this.props.onSearchTermChange(this.state.searchTerm);
    }
}

export default SearchBar;