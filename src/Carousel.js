import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      active: 0,
    };
  }

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];
    if (media && media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  handleIndexClick = (event) => {
    this.setState({ active: +event.target.dataset.index });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={index}
              onClick={this.handleIndexClick}
              data-index={index}
              alt="animal"
              src={photo}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;