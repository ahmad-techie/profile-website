import React from "react";

function Home() {
    return (<div className="home">
            <div className="avatar">
                <img src="images/profile1.jpg" alt=""/>
            </div>
            <div className="content">
                <h1 className="main-title">Ahmad Habibzad</h1>
                <h2 className="main-title main-title-secondary">
                    Java Developer - QA Automation Engineer
                </h2>
                <p className="body-txt">
                    Hi, my name is Ahmad. I am a Java developer and QA Automation Engineer. I currently work as a
                    Technical Advisor for Merit America
                </p>
                <p>f you're working on anything related to testing, test automation, or quality assurance, I'd love to
                    join forces. Let's bring our collective skills together to create robust and high-quality solutions.
                    Feel free to reach out—I'm excited about the opportunity to collaborate and contribute to meaningful
                    projects. Let's make testing excellence a shared journey!</p>
                <a href="#contact" className="cnt-btn">
                    Get In Touch
                </a>
            </div>
        </div>);
}

export default Home;
