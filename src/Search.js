import React, { Component } from 'react';
import "./search.css";

const map = {
  'search': 'command+s',
  'down': 'down'
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      filteredList: [],
      list: [
        "Matt 1",
        "Matt 2",
        "Mark 1",
        "Luke 1",
        "John 1"
      ]

    };

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.filterList = this.filterList.bind(this)
  }

  filterList(event) {
    var updatedList = this.state.list;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });

    this.setState({filteredList: updatedList});
  }

  toggleDropdown() {
    this.setState(previousState => {
      return { showDropdown: !previousState.showDropdown };
    });
  }


  render() {
    return (
        <div className="search-container">
          <input
            onFocus={this.toggleDropdown}
            onBlur={this.toggleDropdown}
            placeholder="Search"
            className="input"
            onChange={this.filterList}
          />
          <div className="search-dropdown">
            {this.state.filteredList.map(function(d, id) {
              return (
                <div key={id} className="search-dropdown-item"> {d} </div>
              )
            })}
          </div>
        </div>

    )
  }
}

export default Search;
