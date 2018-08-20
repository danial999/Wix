import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './Image.scss';

class Image extends React.Component {
  static propTypes = {
    dto: PropTypes.object,
    galleryWidth: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.calcImageSize = this.calcImageSize.bind(this);
    this.state = {
      size: 200
    };
    this.state = {filter: 0};
    this.RandFilter = this.RandFilter.bind(this);
  }

  calcImageSize() {
    const {galleryWidth} = this.props;
    const targetSize = 200;
    const imagesPerRow = Math.round(galleryWidth / targetSize);
    const size = (galleryWidth / imagesPerRow);
    this.setState({
      size
    });
  }

  componentDidMount() {
    this.calcImageSize();
  }

  urlFromDto(dto) {
    return `https://farm${dto.farm}.staticflickr.com/${dto.server}/${dto.id}_${dto.secret}.jpg`;
  }
  
  //set state random number 
  RandFilter() {
    var rand=Math.floor(Math.random() * 5) + 1  
    this.setState({filter: rand});
  }

  render() {
    //Add basic class and add random class on filter click 
    let classes = 'image-root ';
   
    switch (this.state.filter) {
    case 0:
        break;
    case 1:
        classes += ' RandF1';
        break;
    case 2:
         classes += ' RandF2';
        break;
    case 3:
         classes += ' RandF3';
        break;
    case 4:
         classes += ' RandF4';
        break;
    case 5:
         classes += ' RandF5';
        break;
}
    return (
      
      <div
        className={classes}
        style={{
          backgroundImage: `url(${this.urlFromDto(this.props.dto)})`,
          width: this.state.size + 'px',
          height: this.state.size + 'px'
        }}
        >
        <div>
          <FontAwesome className="image-icon" name="clone" title="clone" onClick={this.Duplicate}/>
          <FontAwesome className="image-icon" name="filter" title="filter" onClick={this.RandFilter}/>
          <FontAwesome className="image-icon" name="expand" title="expand"/>
        </div>
      </div>
    );
  }
}

export default Image;
