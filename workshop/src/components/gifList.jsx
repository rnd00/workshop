import React, { Component } from 'react';
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
export default class GifList extends Component {
  render() {
    const { gifIds, changeGif } = this.props;
    return (
      <div className="gif-list">
        { gifIds.map(id => <Gif gifId={id} changeGif={changeGif} />) }
      </div>
    );
  }
}
