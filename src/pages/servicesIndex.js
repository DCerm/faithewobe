import { Link } from 'react-router-dom';

function Services() {

    return (
        <>
            {/* LEGISLATIVE COMMUNICATION        LEGISLATIVE COMMUNICATION        LEGISLATIVE COMMUNICATION */}
            <div className="redBg center" id="legislators">
                <div className="spacer20">
                    <h2>Legislative Communication </h2>
                </div>    
                <div className="spacer20"></div>      
            </div>
            <section className="columns grid100 start">
                <div className="columns30">
                    <div className="spacer50"></div>
                    <p className="">At the heart of Nation building is law making and social Justice.
                    These courses are specially designed to focus on equipping Legislators and Legislative 
                    Aides with professional and political capacity to function optimally in the capacity 
                    of Reformer, Nation Builders and Justice Dispensers.</p>
                    <div className="mspacer"></div>
                    <div className="mspacer"></div>
                </div>
                <div className="columns70 row grid20">
                    <div className="columns grid20">
                        <div className="columns50 card serviceCard center">
                            <h3 className="center serviceTitle">Master Legislative Affairs (MLA)</h3>
                            <div className="spacer50"></div>
                        
                            <Link to="/services/master-legislative-affairs"><button className="button">View Course</button></Link>
                        </div>

                        <div className="columns50 card serviceCard center">
                            <h3 className="center serviceTitle">The Legislative Business Basics (LBB)</h3>
                            
                            <div className="spacer50"></div>
                            <Link to="/services/legislative-business-basics"><button className="button">View Course</button></Link>
                        </div>
                    </div>

                    <div className="columns grid20 ">
                        <div className="columns50 card serviceCard center">
                            <h3 className="center serviceTitle">The Leadman Legislative Brunch (LLB)</h3>
                            <div className="spacer50"></div>
                            
                            <Link to="/services/the-leadman-legislative-brunch"><button className="button">View Course</button></Link>
                        </div>

                        <div className="columns50 card serviceCard center">
                            <h3 className="center serviceTitle">The Indispensable Aide Package (TiAP)</h3>
                            <div className="spacer50"></div>
                            
                            <Link to="/services/the-indispensable-aide-package"><button className="button">View Course</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="spacer100"></div>


            {/* EMPLOYABILITY        EMPLOYABILITY        EMPLOYABILITY */}
            <div className="redBg center" id="employability">
                <div className="spacer20">
                    <h2>Employability </h2>
                </div>    
                <div className="spacer20"></div>      
            </div>
            <section className="columns grid100 start">
                <div className="columns30">
                    <div className="spacer20"></div>
                    <p className="">These courses are designed to prepare you to meet the demands and opportunities of the evolving workspace.</p>
                    <div className="mspacer"></div>
                    <div className="mspacer"></div>
                </div>
                <div className="columns70 row grid20">
                    <div className="columns grid20">
                        <div className="columns50 card serviceCard center">
                            <h3 className="center serviceTitle">Advanced Career Evolution Excellence (A.C.E.E)</h3>
                            <div className="spacer50"></div>
                            
                            <Link to="/services/advanced-career-evolution-excellence"><button className="button">View Course</button></Link>
                        </div>

                        <div className="columns50 card serviceCard center center">
                            <h3 className="center serviceTitle">The Personal brand & Image Projection Course (TBIP)</h3>
                            <div className="spacer50"></div>
                            
                            <Link to=""><button className="button">View Course</button></Link>
                        </div>
                    </div>

                    <div className="columns grid20 ">
                        <div className="columns50 card serviceCard center center">
                            <h3 className="center serviceTitle columns100">Transform</h3>
                            <p className="hidden">
                                This is a course designed to help business owners transform their businesses
                            </p>
                            <Link to=""><button className="button">View Course</button></Link>
                        </div>

                        <div className="columns50 card serviceCard center hidden">
                            <h3 className="center serviceTitle">)</h3>
                            <div className="spacer20"></div>
                            <p className="">
                            </p>
                            <div className="spacer20"></div>
                            <Link to=""><button className="button">View Course</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="spacer100"></div>


            {/* ENTREPRENEURSHIP         ENTREPRENEURSHIP             ENTREPRENEURSHIP */}
            <div className="redBg center" id="entrepreneurship">
                <div className="spacer20">
                    <h2>Entrepreneurship </h2>
                </div>    
                <div className="spacer20"></div>      
            </div>
            <section className="columns grid100 start">
                <div className="columns30">
                    <div className="spacer20"></div>
                    <p className="hidden">These courses are designed to prepare you to meet the demands and opportunities of the evolving workspace.</p>
                </div>
                <div className="columns70 row grid20">
                    <div className="columns grid20">
                        <div className="columns50 card serviceCard center center">
                            <h3 className="center serviceTitle">The Brand Projection Course (TBP)</h3>
                            <div className="spacer20"></div>
                            <p className="hidden">
                            </p>
                            <div className="spacer20"></div>
                            <Link to=""><button className="button">View Course</button></Link>
                        </div>

                        <div className="columns50 card serviceCard center center">
                            <h3 className="center serviceTitle">Sales & 
                            Marketing</h3>
                            <div className="spacer20"></div>
                            <p className="hidden">sales and marketing

                            </p>
                            <div className="spacer20"></div>
                            <Link to=""><button className="button">View Course</button></Link>
                        </div>
                    </div>

                    <div className="columns grid20 ">
                        <div className="columns50 card serviceCard center center">
                            <h3 className="center serviceTitle columns100">Social Media Marketing</h3>
                            <div className="spacer20"></div>
                            <p className="hidden">
                                ssm
                            </p>
                            <div className="spacer20"></div>
                            <Link to=""><button className="button">View Course</button></Link>
                        </div>

                        <div className="columns50 card serviceCard center center">
                            <h3 className="center serviceTitle">Advanced Sponsored Adverts Class (ASAC)</h3>
                            <div className="spacer20"></div>
                            <p className="hidden">
                            </p>
                            <div className="spacer20"></div>
                            <Link to=""><button className="button">View Course</button></Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Services;