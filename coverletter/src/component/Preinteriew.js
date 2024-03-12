import React, { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


export default function Preinterview() {
    const [selectedQuestion, setSelectedQuestion] = useState(null); //선택된 질문을 추척

    const questions = [
        "프론트 엔드 개발자가 된 동기",
        "팀 프로젝트를 하면서 느낀점",
        "react 하면서 가장 힘들었던점",
    ];


    const answers = [
        "요식업에서의 경험을 통해 디지털 플랫폼의 중요성을 깨닫고, 레스토랑에서의 효율적인 서비스와 빠른 응대 경험에서 웹과 개발에 대한 흥미가 동시에 자라게 되었습니다. 이로 인해 프론트엔드 개발자로의 전향을 결정하게 되었으며, 사용자 중심의 디지털 경험을 창조하고 싶은 열망이 높아졌습니다. 지금은 디지털 환경에서 놀라운 기술과 창의적인 디자인을 결합하여 사용자들에게 새로운 가치를 제공하기 위해 열심히 노력하고 있습니다.",
        "팀 프로젝트를 통해 협업의 중요성과 소통이 프로젝트 성패에 큰 영향을 미친다는 것을 몸소 깨닫게 되었습니다. 또한, 팀원들과의 의견 충돌과 문제 해결 과정에서 자신들의 생각하는것을 전달하고 타협점을 찾는 능력이 중요하다는 것을 깨달았습니다. 이러한 경험을 통해 팀 프로젝트에서의 성공은 개인의 기술뿐만 아니라 팀원 간의 원활한 협업과 소통에서 비롯된다는 것을 명확히 이해하고 있습니다. 감사합니다.",
        "개발을 하면서 힘든점에 대한 답변이 들어갈 자리입니다.",
    ];

    const handleQuestionClick = (index) => { //handleQuestionClick` 함수: 질문을 클릭했을 때 호출되는 함수로, 선택된 질문의 인덱스를 변경합니다.
        setSelectedQuestion(selectedQuestion === index ? null : index);
    };

    return (
        <>
            <div className="prewrap d-flex  text-center justify-content-center align-items-center">
                <div id="Preinterview" className="Preinterview ">
                    <h1>Preinterview</h1>
                </div>
                <fieldset>
                    <legend>
                        {questions.map((question, index) => (
                            <div className=" mb-5 " key={index}>
                                <i className="bi bi-hand-index"></i>
                                <div className="interview">
                                    <p
                                        className={`p-2 ${selectedQuestion === index ? "about" : ""}`}
                                        onClick={() => handleQuestionClick(index)}
                                    >
                                        <div className="question d-flex jusify-content-space-between">
                                            <strong className="px-3">{question}</strong>
                                            {selectedQuestion === index ? (
                                                <IoIosArrowUp className="iodrop" />
                                            ) : (
                                                <IoIosArrowDown className="iodrop" />
                                            )}
                                        </div>
                                    </p>
                                    {selectedQuestion === index && (
                                        <p className="answer">{answers[index]}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </legend>
                </fieldset>
            </div>
        </>
    );
}
