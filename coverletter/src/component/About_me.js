import React, { useEffect, useState } from "react";
import { Nav, Navbar, Button } from 'react-bootstrap';


const Leedongmin = {
    name: "이동민",
    age: 28,
    address: "경기도 성남시 수정구",
    tel: "010-5378-1047",
    email: "dheltus1r@naver.com",
    MBTI: "INFJ",
};

// 코드 문자열을 정의.

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
    const [showmenu, setshowmenu] = useState(false) //버튼을 클릭할시에만 메뉴나오게 
    const [displayText, setDisplayText] = useState(""); //나의소개 상태관리 타이핑효과
    const [clickedSection, setClickedSection] = useState(null);//navivar링크 클릭시 font-style변경


    const tooglemenu = () => {
        setshowmenu(!showmenu)
    }
    // 네비게이션 링크 클릭시 상태 업데이트하는 함수
    const handleclick = (section) => {
        setClickedSection(section);
    };

    useEffect(() => {
        let i = 0;
        let animationFrameId;
        const typingSpeed = 7; // Characters per frame

            // 타이핑 효과 애니메이션을 생성
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
            console.log(codeString)

        };
        // 컴포넌트가 마운트되면 타이핑 애니메이션 시작
        animateTyping();
        // 컴포넌트가 언마운트되면 애니메이션 정리
        return () => cancelAnimationFrame(animationFrameId);
    }, [codeString]);

    return (
        <>
            <Navbar bg="dark" variant="dark" className="my_navar d-flex justify-content-end">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="mx-4">
                    <div className="aboutlogo ">
                        <img src="https://www.abe9.co.kr/data/common/logo_img" alt="logo"></img>
                    </div>
                    <Button variant="outline-light" onClick={tooglemenu} className={`btni d-md-none ${showmenu ? 'close-menu' : ''}`}>
                        {showmenu ? '닫기' : '메뉴'}
                    </Button>
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

            {/* Your Navbar code */}
            <div className="container">
                <div className="ldm px-5 mx-5">
                    <div className="leeabout">
                        <div className="leetext">
                            <div id="aboutSection"className="abouttitle text-center">
                                <strong className="en">FRONTEND</strong>
                                <strong className="kr">이동민</strong>
                            </div>
                            <div className="abtext text-center">
                                <p>안녕하세요 저는 프론트엔드 개발자가 되고 싶은 이동민입니다. 시간을 내어 제 포트폴리오를 봐주셔서 감사합니다.</p>
                            </div>
                            <div className="leeobj">
                                <div dangerouslySetInnerHTML={{ __html: displayText }} />
                            </div>
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
