import react from "../../assets/img/react.svg";
import reactnative from "../../assets/img/reactnative.svg";
import swift from "../../assets/img/swift.svg";
import javascript from "../../assets/img/javascript.svg";
import firebase from "../../assets/img/firebase.svg";
import nodejs from "../../assets/img/nodejs.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png";
import './Skills.css';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                <br></br>
                                Lorem Ipsum has been the industry's standard dummy text.
                            </p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                <div className="item">
                                    <img src={javascript} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={reactnative} alt="Image" />
                                    <h5>React Native</h5>
                                </div>
                                <div className="item">
                                    <img src={swift} alt="Image" />
                                    <h5>Swift</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className="item">
                                    <img src={firebase} alt="Image" />
                                    <h5>Firebase</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="Image" />
                                    <h5>NodeJS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img
                className="background-image-left"
                src={colorSharp}
                alt="Image"
            /> */}
        </section>
    )
}

export default Skills;