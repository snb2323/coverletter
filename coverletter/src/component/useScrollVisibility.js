import { useState, useEffect } from "react";

export function useScrollVisibility(selector) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const elementOffsetTop = document.querySelector(selector).offsetTop;

            // 스크롤 위치에 따라 요소가 화면 안팎에 있는지 확인합니다.
            if (scrollTop + windowHeight >= elementOffsetTop) {
                setIsVisible(true); // 요소가 화면 안팎에 있으면 isVisible을 true로 설정합니다.
            } else {
                setIsVisible(false); // 요소가 화면 안팎에 없으면 isVisible을 false로 설정합니다.
            }
        };

        // 스크롤 이벤트를 등록합니다.
        window.addEventListener("scroll", handleScroll);

        // 컴포넌트가 언마운트될 때 스크롤 이벤트를 제거합니다.
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [selector]); // selector가 변경될 때마다 useEffect를 다시 실행합니다.

    return isVisible;
}
