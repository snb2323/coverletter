import { FaGithub, FaFigma, } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <div className="footerpx">
                <div className="backicon ps-2 d-flex flex-column flex-start">

                    <a href="https://github.com/snb2323/CRA-coverletter.git" target="blank"> <FaGithub className=" mb-3"></FaGithub></a>

                    <a href="https://www.figma.com/file/RDBdOswXvMWdwM5ZCbxrqF/%EC%9D%B4%EB%8F%99%EB%AF%BC-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9E%90%EC%86%8C%EC%84%9C?type=design&node-id=0%3A1&mode=dev&t=EBxdpgLPA3ZjixvA-1" target="blank">   <FaFigma className=" mb-3"></FaFigma></a>

                    <a href="https://even-amber-f05.notion.site/1e7173072d194f90a7c2f3a8bb04b2ce"> <img src="./img/notion.svg" className="notionimg"></img></a>
                </div>
            </div>
        </>
    )

}
