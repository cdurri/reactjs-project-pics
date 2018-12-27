import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  // put async keyword in front of the method name
  async onSearchSubmit(term) {
                     // put await keyword in front of whatever is returning (taking time to resolve - network request)  
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID c6ae82e007b0aa434d88702c2bae5069b22869c118f3f42d619e04e2bfd63b8b'
      }
    });

    console.log(response.data.results);

  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App;
