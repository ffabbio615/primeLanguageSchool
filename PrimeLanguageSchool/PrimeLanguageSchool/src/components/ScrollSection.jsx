import React, { useRef, useEffect, useState, createContext } from "react";
import { throttle } from "lodash";

export const ScrollSectionContext = createContext(); // Criar o contexto

export default function ScrollSection({ id, sectionClassName, enterPosition, exitPosition, children }) {
    const sectionRef = useRef(null);
    const [sectionActive, setSectionActive] = useState(false);

    useEffect(() => {
        const handleScroll = throttle(() => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
                const viewportHeight = window.innerHeight;

                if (window.scrollY >= sectionTop - viewportHeight * enterPosition) {
                    setSectionActive(true);
                } else if (window.scrollY <= sectionTop - viewportHeight * exitPosition) {
                    setSectionActive(false);
                }
            }
        }, 200);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ScrollSectionContext.Provider value={sectionActive}>
            <section id={id} className={sectionClassName} ref={sectionRef}>
                {children}
            </section>
        </ScrollSectionContext.Provider>
    );
}