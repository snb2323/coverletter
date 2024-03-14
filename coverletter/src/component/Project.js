import React from "react";
import { Link } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaGithub, FaFigma, } from "react-icons/fa";
// import { BsLink45Deg } from "react-icons/bs";
import { HiLink } from "react-icons/hi2";


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';


export default function Project() {



    return (
        <>
            <div className="pjc">
                <div className='project d-flex justify-content-center align-items-center mt-5'>
                    <Link to="projectsSection" smooth={true} duration={500}></Link>

                    <h1 id="projectsSection">
                        Projects
                    </h1>
                </div>

                <Swiper
                    modules={[Navigation,]}
                    navigation
                    pagination={{ clickable: true }}
                    className="d-md-flex  mt-4 mx-5"
                >
                    <SwiperSlide>
                        <div className="phtoflilo container d-lg-flex justify-content-center align-items-center flex-lg-row-reverse ">
                            <div className="works col-10 col-lg-12 mx-auto">
                                <div className="period b-flex">
                                    <h4> <span># 개인프로젝트</span> / <span className="prohece">아인서점</span> <span className="myzde">.</span>
                                    </h4>
                                    <p className="wors">
                                        독립서점 웹 프로젝트를 선정한 이유는 다른 서점들과 달리 <br></br>편안하고 직관적인 디자인으로 사용자들이 쉽게 원하는 작품을 <br></br>찾을 수 있는 경험을 제공하고자 했습니다. 또한,  <br></br> 독자들 간의 소통을 촉진하는 리뷰 및 추천 기능을 도입하여 더욱 풍부한 사용자 경험을 제공하고자 합니다.
                                    </p>
                                </div>


                                <div className="period b-flex ">
                                    <h4># Period</h4>
                                    <p>2022.02.10 ~ 2022.03.15</p>
                                </div>
                                <div className="period ">
                                    <h4># Tech</h4>
                                    <p> - React<br></br>
                                        -Javascript <br></br>
                                        - Node.js<br></br>
                                        - mysql<br></br>
                                        - SCSS<br></br>
                                        - Styled-components<br></br>
                                        - Bootstrap 4.6.2<br></br>
                                        - bootsstrap icon 1.11.1<br></br>
                                        - Swiper 11<br></br>
                                    </p>
                                </div>
                                <div className="period b-flex">

                                </div>
                                <div className="backicon d-flex ">
                                    <a href="https://github.com/snb2323/portfolio" target="blank"> <FaGithub className=" mb-3"></FaGithub></a>
                                    <a href="https://www.figma.com/file/3ePwKovJqYTbLRALUgC49p/%EA%B0%9C%EC%9D%B8%ED%8F%AC%ED%8F%B4?type=design&node-id=0%3A1&mode=dev&t=092PlsjjVsTcTqbL-1" target="blank">   <FaFigma className="mx-3 mb-3"></FaFigma></a>
                                    <a href="https://www.notion.so/1e7173072d194f90a7c2f3a8bb04b2ce"> <img src="./img/notion.svg" className="notionimg"></img></a>
                                    <a href="http://ainbook.cafe24app.com/" target="blank">
                                        <HiLink className="sitelink" />
                                    </a>
                                </div>
                            </div>

                            <div className="works d-flex justify-content-center">
                                <img className="worksimg" src="../project/ainproject.png" alt="ainbook" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="phtoflilo container d-flex justify-content-center align-items-center flex-row-reverse ">
                            <div className="works">
                                <div className="period b-flex">
                                    <h4># 개인프로젝트 / 자기소개서</h4>
                                    <p className="wors">
                                        CRA로 제작된 SPA 자소서
                                    </p>
                                </div>


                                <div className="period b-flex ">
                                    <h4># Period</h4>
                                    <p>2022.02.10 ~ 2022.03.15</p>
                                </div>
                                <div className="period ">
                                    <h4># Tech</h4>
                                    <p> - React<br></br>
                                        -Javascript <br></br>
                                        - Node.js<br></br>
                                        - mysql<br></br>
                                        - SCSS<br></br>
                                        - Styled-components<br></br>
                                        - Bootstrap 4.6.2<br></br>
                                        - bootsstrap icon 1.11.1<br></br>
                                        - Swiper 11<br></br>
                                    </p>
                                </div>
                                <div className="period b-flex">

                                </div>
                                <div className="backicon d-flex ">
                                    <a href="https://github.com/snb2323/portfolio" target="blank"> <FaGithub className=" mb-3"></FaGithub></a>
                                    <a href="https://www.figma.com/proto/3ePwKovJqYTbLRALUgC49p/%EA%B0%9C%EC%9D%B8%ED%8F%AC%ED%8F%B4?type=design&node-id=511-19&t=jFKbgYuW4pDZIyMi-0&scaling=min-zoom&page-id=0%3A1" target="blank">   <FaFigma className="mx-3 mb-3"></FaFigma></a>
                                    <a href="https://www.notion.so/1e7173072d194f90a7c2f3a8bb04b2ce"> <img src="./img/notion.svg" className="notionimg"></img></a>
                                    <a href="http://ainbook.cafe24app.com/" target="blank">
                                        <HiLink className="sitelink" />
                                    </a>
                                </div>
                            </div>

                            <div className="works d-flex justify-content-center">
                                <img className="worksimg" src="../project/lee1.png" alt="ainbook" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="phtoflilo container d-flex justify-content-center align-items-center flex-row-reverse ">
                            <div className="works">
                                <div className="period b-flex">
                                    <h4># 팀프로젝트 / 하림펫푸드 홍보&체험사이트</h4>
                                    <p className="wors">
                                        독립서점 웹 프로젝트를 선정한 이유는 다른 서점들과 달리 <br></br>편안하고 직관적인 디자인으로 사용자들이 쉽게 원하는 작품을 <br></br>찾을 수 있는 경험을 제공하고자 했습니다. 또한,  <br></br> 독자들 간의 소통을 촉진하는 리뷰 및 추천 기능을 도입하여 더욱 풍부한 사용자 경험을 제공하고자 합니다.
                                    </p>
                                </div>


                                <div className="period b-flex ">
                                    <h4># Period</h4>
                                    <p>2022.02.10 ~ 2022.03.15</p>
                                </div>
                                <div className="period ">
                                    <h4># Tech</h4>
                                    <p> - React<br></br>
                                        -Javascript <br></br>
                                        - Node.js<br></br>
                                        - mysql<br></br>
                                        - SCSS<br></br>
                                        - Styled-components<br></br>
                                        - Bootstrap 4.6.2<br></br>
                                        - bootsstrap icon 1.11.1<br></br>
                                        - Swiper 11<br></br>
                                    </p>
                                </div>
                                <div className="period b-flex">

                                </div>
                                <div className="backicon d-flex ">
                                    <a href="https://github.com/snb2323/portfolio" target="blank"> <FaGithub className=" mb-3"></FaGithub></a>
                                    <a href="https://www.figma.com/proto/3ePwKovJqYTbLRALUgC49p/%EA%B0%9C%EC%9D%B8%ED%8F%AC%ED%8F%B4?type=design&node-id=511-19&t=jFKbgYuW4pDZIyMi-0&scaling=min-zoom&page-id=0%3A1" target="blank">   <FaFigma className="mx-3 mb-3"></FaFigma></a>
                                    <a href="https://www.notion.so/1e7173072d194f90a7c2f3a8bb04b2ce"> <img src="./img/notion.svg" className="notionimg"></img></a>
                                    <a href="http://ainbook.cafe24app.com/" target="blank">
                                        <HiLink className="sitelink" />
                                    </a>
                                </div>
                            </div>

                            <div className="works d-flex justify-content-center">
                                <img className="worksimg" src="../project/petfood.png" alt="ainbook" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div >
        </>
    );
}
