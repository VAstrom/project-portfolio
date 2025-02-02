import "../components/mediumHeadline.css";
import "../components/headline.css";
import "./techSkills.css";

import { Headline } from "../components/Headline";
import { MediumHeadline } from "../components/MediumHeadline";



export const TechSkills = () => {
    let headerText = "Tech";
    let mediumSizeHeader = `HTML, CSS, Flexbox, JavaScript, ES6, 
    JSX, React, React Hooks, Node.js, APIs, 
    Web Accessibility, mob-programming, pair-programming, GitHub. `


    return (
        <>
            <section className="techSkills-page-wrapper">
                <Headline
                    className="big-heading"
                    headerText={headerText}
                />
                <MediumHeadline
                    id="tech-hind-h2"
                    className="white-h2"
                    mediumSizeHeader={mediumSizeHeader}
                    useSpan={false}
                />
            </section>
        </>
    )
}
