import React, { useState, useEffect } from "react";

const Contact = () => {
    const [msg, setMsg] = useState(null);
    const [formData, setFormData] = useState({
        company_name: "",
        interview_date_time: "",
        contact_person_info: "",
        interview_location_address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("/form/contact_info", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMsg(data.msg)
                // {msg: 'i'}
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    const handleReset = () => {
        setMsg(null);
        setFormData({
            company_name: "",
            interview_date_time: "",
            contact_person_info: "",
            interview_location_address: ""
        });
    };

    useEffect(() => {
        // Additional code if needed
    }, []);

    return (

        <div className="container">
            <div id="Contact" className="contact d-flex justify-content-center align-items-center">
                <h1> Contact me</h1>
            </div>

            {msg ?
                <div>감사합니다. 빠른 응답드리도록 하겠습니다. <button onClick={handleReset}>다시작성하기</button></div> :

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>
                            <div className="d-flex flex-column align-items-center">
                                <div className="py-3">
                                    <label htmlFor="company_name"></label>
                                    <input
                                        className="contactin py-1"
                                        type="text"
                                        name="company_name"
                                        placeholder="회사명"
                                        value={formData.company_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="py-3">
                                    <label htmlFor="interview_date_time"></label>
                                    <input
                                        className="contactin py-1"
                                        type="text"
                                        name="interview_date_time"
                                        placeholder="면접날짜와 시간"
                                        value={formData.interview_date_time}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="py-3">
                                    <label htmlFor="contact_person_info"></label>
                                    <input
                                        className="contactin py-1"
                                        type="text"
                                        name="contact_person_info"
                                        placeholder="담당자 정보 및 연락처"
                                        value={formData.contact_person_info}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="py-3">
                                    <label htmlFor="interview_location_address"></label>
                                    <input
                                        className="contactin py-1"
                                        type="text"
                                        name="interview_location_address"
                                        placeholder="면접장 소재지 및 주소"
                                        value={formData.interview_location_address}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="contactbtn d-flex justify-content-center py-5">
                                <button type="submit">제안하기</button>
                            </div>
                        </legend>
                    </fieldset>
                </form>

            }
        </div>

    );
};

export default Contact;
