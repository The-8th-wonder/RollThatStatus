import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './imgs/poker-chip/prisonerNumber3-REDESIGN.png';
import image2 from './imgs/poker-chip/idk-wtf-i-drew.png';
import image3 from './imgs/poker-chip/horror-doodles.png';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,

        appendDots: dots => (
            <div>
                <ul style={{
                    margin: "0px", padding: "0px", 
                }}> {dots} </ul>
            </div>
        ),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1, 
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="full-width-carousel">
                <Slider {...settings} className="slider">
                    <div className="full-width-slide">
                        <img src={image1} 
                         alt='' 
                         title="I drew this!"
                         className="slide-image" />
                    </div>
                    <div className="full-width-slide">
                        <img src={image2}
                         alt=""
                         className="slide-image" />
                    </div>
                    <div className="full-width-slide">
                        <img src={image3}
                         alt="Slide 3"
                         className="slide-image" />
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Carousel;