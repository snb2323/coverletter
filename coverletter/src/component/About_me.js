import React, { useEffect, useState } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { CiMenuBurger } from "react-icons/ci";




const Leedongmin = {
    name: "이동민",
    age: 28,
    address: "경기도 성남시 수정구",
    tel: "010-5378-1047",
    email: "dheltus1r@naver.com",
    MBTI: "INFJ",
};

const codeString = `
<div class="lee">
  <p class="code"><span class="con">const</span> <span class="leename">Leedongmin</span> <span><span class="colwhite"> ={</span></span></p>
  <p class="code">  name <span class="colwhite">:</span> <span class="daddd"> "${Leedongmin.name}"</span><span class="colwhite">,</span></p>
  <p class="code">  age <span class="colwhite">:</span> <span class="daddd2"> ${Leedongmin.age}</span><span class="colwhite">,</span></p>
  <p class="code">  address <span class="colwhite">:</span> <span class="daddd"> "${Leedongmin.address}"</span><span class="colwhite">,</span></p>
  <p class="code">  tel<span class="colwhite">:</span> <span class="daddd"> "${Leedongmin.tel}"</span> <span class="colwhite">,</span></p>
  <p class="code">  email<span class="colwhite">:</span> <span class="daddd"> "${Leedongmin.email}"</span> <span class="colwhite">,</span></p>
  <p class="code">  MBTI<span class="colwhite">:</span><span class="daddd"> "${Leedongmin.MBTI}"</span><span class="colwhite">};</span></p>
</div>
`;

export default function About() {
    const [displayText, setDisplayText] = useState("");
    const [clickedSection, setClickedSection] = useState(null);
    const [showmenu, setshowmenu] = useState(false)

    const handleclick = (section) => {
        setClickedSection(section);
    };


    useEffect(() => {
        let i = 0;
        let animationFrameId;
        const typingSpeed = 7;

        const animateTyping = () => {
            for (let j = 0; j < typingSpeed && i < codeString.length; j++) {
                let txt = codeString[i++];
                if (txt !== "\n") {
                    setDisplayText((prevText) => prevText + txt);
                }
            }

            if (i < codeString.length) {
                animationFrameId = requestAnimationFrame(animateTyping);
            }
        };

        animateTyping();

        return () => cancelAnimationFrame(animationFrameId);
    }, [codeString]);
    const togglemenu = () => {
        setshowmenu(!showmenu)
    };

    useEffect(() => {
        const allmenu = document.querySelector(".btni button");
        allmenu.addEventListener('click', () => {
            document.querySelector(".btni").classList.toggle("toggle")
        })
        console.log("allmenu")
    }, [])

    return (
        <>

            <Navbar bg="dark" variant="dark" className="my_navar d-lg-flex  justify-content-space-between">
                <Navbar.Brand href="#home" className="aboutlogo d-block d-lg-flex ">LDM Portfolio</Navbar.Brand>
                <div className={`btni  d-lg-none `}>
                    <button onClick={togglemenu} className='border-0 bg-transparent '><CiMenuBurger></CiMenuBurger></button>
                </div>
                <Nav className="mx-4 gnb">


                    <Nav.Link
                        className={clickedSection === "about" ? "section clicked" : "section"}
                        onClick={() => handleclick("about")}
                        href="#aboutSection"
                    >
                        About Me
                    </Nav.Link>
                    <Nav.Link
                        className={clickedSection === "skills" ? "section clicked" : "section"}
                        onClick={() => handleclick("skills")}
                        href="#skillsSection"
                    >
                        Skills
                    </Nav.Link>
                    <Nav.Link
                        className={clickedSection === "projects" ? "section clicked" : "section"}
                        onClick={() => handleclick("projects")}
                        href="#projectsSection"
                    >
                        Portfolio
                    </Nav.Link>
                    <Nav.Link
                        className={clickedSection === "preinterview" ? "section clicked" : "section"}
                        onClick={() => handleclick("preinterview")}
                        href="#Preinterview"
                    >
                        Preinterview
                    </Nav.Link>
                    <Nav.Link
                        className={clickedSection === "Contact" ? "section clicked" : "section"}
                        onClick={() => handleclick("Contact")}
                        href="#Contact"
                    >
                        Contact me
                    </Nav.Link>
                </Nav>
            </Navbar>

            <div id="home" className="container">
                <div className="ldm px-5 mx-5">
                    <div className="leeabout">
                        <div className="leetext">
                            <div id="aboutSection" className="abouttitle text-center">
                                <strong className="en">FRONTEND</strong>
                                <strong className="kr">이동민</strong>
                            </div>
                            <div className="abtext text-center">
                                <p>안녕하세요 저는 프론트엔드 개발자가 되고 싶은 이동민입니다. 시간을 내어 제 포트폴리오를 봐주셔서 감사합니다.</p>
                            </div>
                            <div className="leeobj" dangerouslySetInnerHTML={{ __html: displayText }} />
                        </div>
                    </div>
                    <div className="myphto">
                        <img src="../project/about.png" alt="about" />
                    </div>
                </div>
            </div>
        </>
    );
}
