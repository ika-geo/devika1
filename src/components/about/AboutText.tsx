const AboutText = () => {
    return (
        <div style={{marginBottom:'50px'}} className="about__text text">
            <p>
                Welcome at Devika! A small but dedicated team of passionate professionals, we specialize in creating modern, user-friendly, and results-driven websites tailored to your unique needs. As a boutique company, we take pride in delivering a personalized experience, ensuring every project receives the attention it deserves.

                Our mission is to provide you with a digital platform that not only looks stunning but also drives real results for your business. Let’s work together to make your vision a reality!</p>
            <ul>
                <li>
                    <p>
                        <strong className="coloredText2">Why Choose Us? </strong>
                        <span>We focus on building websites that are:</span>
                    </p>
                    <ul>
                        <li style={{listStyle: "disc"}}>Fast, responsive, and compatible with all devices.</li>
                        <li style={{listStyle: "disc"}}>SEO-optimized to improve your online visibility.</li>
                        <li style={{listStyle: "disc"}}>Uniquely crafted to showcase your brand's personality and values.</li>
                    </ul>
                </li>
                <li>
                    <b className="coloredText2">What We Offer: </b>
                    Whether you’re a small business owner, a freelancer, or launching a new project, we can help. From
                    single-page websites to multi-page platforms, we deliver tailored solutions that fit your goals.
                </li>
                <li>
                    <b className="coloredText2">The Devika Advantage: </b>
                    Our process is collaborative and transparent. We listen to your needs, offer professional insights,
                    and ensure every detail of your website aligns with your vision. We handle everything — from design
                    to deployment — so you can focus on growing your business.
                </li>
            </ul>
            <p>Let’s work together to build a website that not only impresses but also delivers measurable success.
                Contact us today to get started!</p>
        </div>

    );
};

export default AboutText;