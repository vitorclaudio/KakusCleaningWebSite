import React, { useRef } from 'react';
import titleImage from '../../Images/TitleImage1.png';
import whyUsImage from '../../Images/WhyUs.jpeg';
import OurService1 from '../../Images/OurServices1.jpeg';
import OurService2 from '../../Images/OurServices2.png';
import OurService3 from '../../Images/OurServices3.jpeg';


function Home() {
    const title_image_url = 'https://bookdirtbusters.com/wp-content/uploads/2020/10/Cleaning-supplies.png';
    const experience_image_url = 'https://cleanmypremises.ca/wp-content/uploads/2021/04/woman-with-gloves-cleaning-solution-disinfecting-gym-equipment.jpg'
    const targetDivRefAboutUs = useRef(null);
    const targetDivRefOurServices = useRef(null);
    const targetDivRefWhyUs = useRef(null);
    const targetDivRefContact = useRef(null);


    function scrollToTargetDivAboutUs() {
        targetDivRefAboutUs.current.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollToTargetDivOurServices() {
        targetDivRefOurServices.current.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollToTargetDivWhyUs() {
        targetDivRefWhyUs.current.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollToTargetDivContact() {
        targetDivRefContact.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div>
            <div className='row' style={{backgroundColor:'#02539D', display:"flex", justifyContent: "space-between", height:'75px'}}>
                <div className="topHeader">
                    <div>Kaku's </div>
                    <div>Cleaning</div>
                </div>

                <div className="titleOptions">
                    <div onClick={scrollToTargetDivAboutUs} style={{marginLeft:'30px'}}>About Us</div>
                    <div onClick={scrollToTargetDivOurServices} style={{marginLeft:'15px'}}>Our Services</div>
                    <div onClick={scrollToTargetDivWhyUs} style={{marginLeft:'15px'}}>Why Us?</div>
                    <div onClick={scrollToTargetDivContact} style={{marginLeft:'15px', marginRight:'10px'}}>Contact</div>
                </div>
            </div>



            <div className='title' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage : `url(${titleImage})`
            }}>
                <div className='titleText' style={{opacity:'70%'}}>The Best & Trusted</div>
                <div className='titleText' style={{opacity:'70%', fontSize:'30px'}}>Cleaning Services</div>
                <div className='titleSubText'>We are a professional cleaning company specializing in providing
                    top-notch cleaning services to commercial properties.</div>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'start', // Optional: Align items vertically centered
            }}>
                <div className="ExperienceImage"
                    style={{
                        backgroundImage: `url(${experience_image_url})`
                    }}
                />
                <div
                    ref={targetDivRefAboutUs}
                    style={{
                        display: 'flex',
                        flexDirection: 'column', // Add flexDirection: 'column' to stack child elements vertically
                    }}
                >
                <div
                    className=""
                    style={{
                        marginLeft: '15px', // Add marginLeft to separate the two divs
                        display: 'flex', // Add display: 'flex' to create a horizontal layout
                    }}
                >
                    <div className="bottomAlignedTexts" style={{
                        display: 'flex',
                        marginTop: '30px',
                        alignItems: 'flex-end', // Align items to the bottom
                    }}>
                        <div className="ExperienceTextDate" style={{justifyItems: 'center'}}>20</div>
                        <div style={{justifyItems: 'center', opacity:'50%'}}>Years Experience</div>
                    </div>
                </div>
                        <div className="ExperienceTextDescription">Our team of trained and experienced
                            cleaners are dedicated to making your space spotless and leaving you with a sense of peace
                            and comfort.
                        </div>

                    <div onClick={scrollToTargetDivContact} className="ExperienceContactButton" >
                        <div>
                            Contact Us
                        </div>
                    </div>

                    </div>

            </div>

            <div ref={targetDivRefOurServices} className="OurServicesTitleText">
                Our Services
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-around', // Distribute space evenly between child elements
            }}>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column', // Stack child elements vertically
                        alignItems: 'center', // Center child elements horizontally
                        width: '80px' // Set a fixed width for the parent div
                    }}
                >
                    <div className="OurServicesImages" style={{backgroundImage: `url(${OurService1})`}}></div>
                    <div className="OurServicesText">Move-In/Move-Out Cleaning</div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column', // Stack child elements vertically
                        alignItems: 'center', // Center child elements horizontally
                        width: '80px' // Set a fixed width for the parent div
                    }}
                >
                    <div className="OurServicesImages" style={{backgroundImage: `url(${OurService2})`}}></div>
                    <div className="OurServicesText">Commercial Cleaning</div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column', // Stack child elements vertically
                        alignItems: 'center', // Center child elements horizontally
                        width: '80px' // Set a fixed width for the parent div
                    }}
                >
                    <div className="OurServicesImages" style={{backgroundImage: `url(${OurService3})`}}></div>
                    <div className="OurServicesText">Carpet Cleaning</div>
                </div>
            </div>

            <div style={{
                marginTop:'15px',
                display: 'flex',
                alignItems: 'start', // Optional: Align items vertically centered
            }}>

                <div className="WhyUsLeftSide"
                    style={{
                        display: 'flex',
                        flexDirection: 'column', // Add flexDirection: 'column' to stack child elements vertically
                    }}
                >
                    <div ref={targetDivRefWhyUs} className="WhyUsTitleText" style={{opacity:'50%'}}>
                        Why Choose Us?
                    </div>

                    <div className="WhyUsImage"
                        style={{
                            backgroundImage: `url(${whyUsImage})`,

                        }}
                    />
                </div>

                <div className="WhyUsGroupCheck">

                    <div style={{

                        display: 'flex',
                        alignItems: 'center', // Optional: Align items vertically centered
                    }}>
                        <div className="WhyUsCheckPoint">
                            &#10003;
                        </div>
                        <div className="WhyUsTextCheck">
                            Trained and experienced cleaners
                        </div>
                    </div>
                    <div style={{
                        marginTop:'10px',
                        display: 'flex',
                        alignItems: 'center', // Optional: Align items vertically centered
                    }}>
                        <div className="WhyUsCheckPoint">
                            &#10003;
                        </div>
                        <div className="WhyUsTextCheck">
                            Quality cleaning services at affordable prices
                        </div>
                    </div>
                    <div style={{
                        marginTop:'10px',
                        display: 'flex',
                        alignItems: 'center', // Optional: Align items vertically centered
                    }}>
                        <div className="WhyUsCheckPoint">
                            &#10003;
                        </div>
                        <div className="WhyUsTextCheck">
                            Flexible scheduling options
                        </div>
                    </div>
                    <div style={{
                        marginTop:'10px',
                        display: 'flex',
                        alignItems: 'center', // Optional: Align items vertically centered
                    }}>
                        <div className="WhyUsCheckPoint">
                            &#10003;
                        </div>
                        <div className="WhyUsTextCheck">
                            Environmentally-friendly cleaning products used
                        </div>
                    </div>
                    <div style={{
                        marginTop:'10px',
                        display: 'flex',
                        alignItems: 'center', // Optional: Align items vertically centered
                    }}>
                        <div className="WhyUsCheckPoint">
                            &#10003;
                        </div>
                        <div className="WhyUsTextCheck">
                            100% satisfaction guarantee
                        </div>
                    </div>

                </div>

            </div>

            <div ref={targetDivRefContact} style={{backgroundColor:'#D9D9D9', height:'140px', marginTop:'25px'}}>
                <div className="AboutUsCollection" style={{paddingTop: '10px'}}>
                    <div style={{fontSize:"15px", marginLeft:'15px', fontWeight:"bold"}}>
                        Contact Us
                    </div>
                    <div style={{fontSize:"10px", marginLeft:'15px', marginTop:'10px'}}>
                        For more information or to schedule a cleaning appointment
                        please contact us at:
                    </div>
                    <div style={{
                        marginTop:'5px',
                        display: 'flex',
                        alignItems: 'center', // Optional: Align items vertically centered
                    }}>
                        <div style={{fontSize:"10px", marginLeft:'15px'}}>
                            Phone:
                        </div>
                        <div style={{fontSize:"10px", marginLeft:'5px', fontWeight:"bold"}}>
                            +1 (475) 377-2482
                        </div>
                    </div>

                    <div style={{
                        marginTop:'5px',
                        display: 'flex',
                        alignItems: 'center', // Optional: Align items vertically centered
                    }}>
                        <div style={{fontSize:"10px", marginLeft:'15px'}}>
                            E-mail:
                        </div>
                        <div style={{fontSize:"10px", marginLeft:'3px', fontWeight:"bold"}}>
                            contact@kakuscleaning.com
                        </div>
                    </div>

                    <div style={{
                        marginTop:'5px',
                        display: 'flex',
                        alignItems: 'center', // Optional: Align items vertically centered
                    }}>
                        <div style={{fontSize:"10px", marginLeft:'15px'}}>
                            From:
                        </div>
                        <div style={{fontSize:"10px", marginLeft:'3px', fontWeight:"bold"}}>
                            Waterbury, CT
                        </div>
                    </div>

                    <div>
                        <a style={{fontSize:"10px", marginLeft:'15px', marginTop:'5px'}} href="https://linktr.ee/kakuscleaning" target="_blank" rel="noopener noreferrer">
                            Access for more Information
                        </a>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Home;
//   <div className='title' style={{ opacity:'10',  backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover',backgroundImage : `url(${title_image_url})` }}>
