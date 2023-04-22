import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachDestination =>
      eachDestination.name.includes(searchInput),
    )
    return (
      <div className="main-cont">
        <h1>Destination Search</h1>
        <div className="search-cont">
          <input
            type="search"
            className="search-input"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="list-cont">
          {searchResult.map(eachDestination => (
            <DestinationItem
              DestinationDetail={eachDestination}
              key={eachDestination.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
