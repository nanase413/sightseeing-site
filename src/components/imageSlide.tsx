import * as React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image1 from '../images/spot/AmericaSpot.jpg';
import Image2 from '../images/spot/GermanySpot.jpg';
import Image3 from '../images/spot/MaltaSpot.jpg';
import Image4 from '../images/spot/VietnamSpot.jpg';
import Image5 from '../images/spot/AmericaSpot2.jpg';
import Image6 from '../images/spot/GermanySpot2.jpg';
import Image7 from '../images/spot/MaltaSpot2.jpg';
import Image8 from '../images/spot/VietnamSpot2.jpg';
import Image9 from '../images/spot/AmericaSpot3.jpg';
import Image10 from '../images/spot/GermanySpot3.jpg';
import Image11 from '../images/spot/MaltaSpot3.jpg';
import Image12 from '../images/spot/VietnamSpot4.jpg';

interface ImageData {
    src: string;
    alt: string;
}
const images: ImageData[]  = [
    { src: Image1, alt: 'Image 1' },
    { src: Image2, alt: 'Image 2' },
    { src: Image3, alt: 'Image 3' },
    { src: Image4, alt: 'Image 4' },
    { src: Image5, alt: 'Image 5' },
    { src: Image6, alt: 'Image 6' },
    { src: Image7, alt: 'Image 7' },
    { src: Image8, alt: 'Image 8' },
    { src: Image9, alt: 'Image 9' },
    { src: Image10, alt: 'Image 10' },
    { src: Image11, alt: 'Image 11' },
    { src: Image12, alt: 'Image 12' },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
const StyledSlider = styled(Slider)`
  .slick-slide img {
    background-size: contain;
    margin-top: 20%;
    width: 90%;
    height: 40%;
    border-radius: 30px;
  }
  .slick-prev {
    top: 60%;
    z-index: 1;
  }
  .slick-next {
    top: 60%;
    left: 91%;
    z-index: 1;
  }
`;

const SimpleSlider = () => {
    return (
        <StyledSlider {...settings}>
            {images.map((image) => (
                <div key={image.src}>
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </StyledSlider>
    );
};

export default SimpleSlider;