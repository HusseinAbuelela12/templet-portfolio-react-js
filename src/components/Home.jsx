import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import 'animate.css';

import Image_2 from '../images/623503637e979197919c6c03_Topology-1 (1).svg';
import Image_3 from '../images/623a183aa76fb537cbc5dc0e_Group 8-p-500.png';
import Image_4 from '../images/62324067d42bfc263ee547ff_image 4 (Traced).svg';
import Image_5 from '../images/6232406724bd9b36622aed48_image 3 (Traced).svg';
import Image_6 from '../images/623240674411e07510215b6f_image 2 (Traced).svg';
import Image_7 from '../images/623506fac432155edb494f48_Topology-2 (1).svg';
import Image_8 from '../images/6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg';
import Image_10 from '../images/6232406724bd9b36622aed48_image 3 (Traced).svg';
import Image_11 from '../images/623240674411e07510215b6f_image 2 (Traced).svg';
import Image_12 from '../images/6296648937731de4e98d9a5a_zapier-seeklogo.com 2.svg';
import Image_13 from '../images/62324067d42bfc263ee547ff_image 4 (Traced).svg';
import Image_15 from '../images/62966934fc028e3715017571_undraw_mobile_development_re_wwsn 1.svg';
import Image_16 from '../images/62966cbb57bfa16e79fe8406_undraw_data_re_80ws 1 (1).svg';
import Image_17 from '../images/62966cd0f71f4f702ab6febd_undraw_asset_selection_re_k5fj 1.svg';

import AppFooter from './AppFooter';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    const [projects , setProjects ] = useState([]);

    useEffect(() => {
        axios.get("data.json")
        .then((res) => {
            setProjects(res.data.projects)
            console.log(res.data.projects);
            
        })
    } , [])

    return (
    <>
    <section className='banner'>
        <Container>
            <Row>
                <Col className='banner-text wow slideInLeft' data-wow-duration="1s" data-wow-delay="0.1s">
                    <p>WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span> SEO</p>
                    <h1>Web developer portfolio .</h1>
                    <h5>We build marketing websites that help you sell on autopilot.</h5>
                    <HashLink to="/#contact"><button>Let's talk</button></HashLink>
                </Col>
                <Col className='banner-image wow slideInRight' data-wow-duration="1s" data-wow-delay="0.1s">
                    <img src={Image_2} alt="img" className='waves'/>
                    <img src={Image_3} alt="img" className='laptop'/>
                    <div className='imgbox gimg'>
                        <img src={Image_4} alt="img" />
                    </div>
                    <div className='imgbox uimg'>
                        <img src={Image_5} alt="img" />
                    </div>
                    <div className='imgbox wimg'>
                        <img src={Image_6} alt="img" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <section className="home-sec2">
        <Container>
            <Row>
                <Col md={6} sm={12} className="wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                <div className="secimgs">
                    <img src={Image_7} alt="" className="waves" />
                    <img src={Image_8} alt="" className="people" />
                </div>
                </Col>
                <Col md={6} sm={12} className="sec2text wow slideInRight" data-wow-duration="1s" data-wow-delay="0.1s">
                <button>the dream</button>
                <p>Imagine having your sales team on the job 24/7, interacting with an endless stream of ready-to-buy visitors.</p>
                </Col>
            </Row>
        </Container>
    </section>
    <section className="home-sec3" id="latest">
        <div className="sectext wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
            <h3>Latest builds.</h3>
            <Link to="/projects">View Projects</Link>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                    640: {
                    width: 640,
                    slidesPerView: 1,
                    },
                    768: {
                    width: 768,
                    slidesPerView: 2,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {projects.slice(1, 6).map((project) => (
                <SwiperSlide key={project.id}>
                    <a href={project.link} target="_blank">
                        <img src={project.photo} alt="" />
                    </a>
                </SwiperSlide>
            ))}
            </Swiper>
    </section>
    <section className="home-sec4" id="process">
        <h3>How it's done.</h3>
        <div className="divLeft wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s">
            <img src={Image_10} alt="" />
            <div>
                <h5>UX/UI Design</h5>
                <p>Where concepts turn into a strategic user-experience.</p>
            </div>
            </div>
            <div className="divRight wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
            <img src={Image_11} alt="" />
            <div>
                <h5>Webflow Development</h5>
                <p>Where design turns into code.</p>
            </div>
            </div>
            <div className="divLeft wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
            <img src={Image_12} alt="" />
            <div>
                <h5>System Automation</h5>
                <p>Where busywork gets delegated.</p>
            </div>
            </div>
            <div className="divRight wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.5s">
            <img src={Image_13} alt="" />
            <div>
                <h5>SEO</h5>
                <p>Where customers come flooding in.</p>
            </div>
        </div>
    </section>
    <section className="home-sec5" id="service">
        <h2 className=" wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">Why Webflow.</h2>
        <Container>
            <Row>
                <Col md={4} sm={12} className="divRight wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                <div>
                    <h5>REASON 1</h5>
                    <h3>Next-Level Storytelling</h3>
                    <img src={Image_15} alt="img" />
                    <p>Unleash the best visuals and experiences that modern web design has to offer. Webflow turns your wildest of ideas into strategic customer-experiences.</p>
                </div>
                </Col>
                <Col md={4} sm={12}>
                <div className="divRight wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                    <h5>REASON 2</h5>
                    <h3>Unbelievable Performance</h3>
                    <img src={Image_16} alt="img" />
                    <p>Hosted on an ultra-fast global CDN, Webflow goes full steam ahead with load speed, uptime, asset optimization, and SEO. All without ever needing to install a patch .</p>
                </div>
                </Col>
                <Col md={4} sm={12}>
                <div className="divRight wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                    <h5>REASON 3</h5>
                    <h3>Developer-Free Tweaks</h3>
                    <img src={Image_17} alt="img" />
                    <p>Webflow’s ‘Editor Mode’ allows any team member to update content as they please without wreaking havoc or paying people like us to fix it.</p>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    <section className="home-sec6" id="contact">
        <Container>
            <h3 className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">Contact Us</h3>
            <Row className="align-items-center">
                <Col md={6} sm={12} className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                <div>
                    <p><span>Email:</span> info@gmail.com</p>
                    <p><span>Phone:</span> 0121133133131</p>
                    <p><span>Address:</span> 23 street newyork</p>
                </div>
                </Col>
                <Col md={6} sm={12} className="wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                <div>
                    <form>
                    <div className="d-flex">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="company" placeholder="Company" />
                    </div>
                    <div className="d-flex">
                        <input type="text" name="email" placeholder="Email" />
                        <input type="text" name="phone" placeholder="Phone" />
                    </div>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit">Send Message</button>
                    </form>
                </div>
                </Col>

            </Row>
        </Container>
    </section>
    <AppFooter />
    </>
    )
}

export default Home;