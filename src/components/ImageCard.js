import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState = ({ spans });
  };



  render() {
    const { description, urls } = this.props.image;

    return (
      // this.state.spans should be interpolated to make dynamic but does not work atm - ***investigate***
      <div style={{ gridRowEnd: `span ${15}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
