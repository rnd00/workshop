import React, { Component } from 'react';
import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGifId: "11CXAq0P8h50GI",
      gifIds: ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq", "13FrpeVH09Zrb2"]
    };
  }

  changeSelectedGif = (newGifId) => {
    this.setState({ selectedGifId: newGifId });
  }

  render() {
    const { selectedGifId, gifIds } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif gifId={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIds={gifIds} changeGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}
