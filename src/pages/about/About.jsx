import React from 'react';
import '../../css/style.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <section className="about section" id="about">
        <div className="container-about">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text">
                  <h3>I'm Ajay Dhangar and <span>web developer</span></h3>
                  <p>
                    Hello, my name is Ajay Dhangar and I am an aspiring
                    software development engineer. I am currently pursuing a
                    B.Tech degree in Computer Science and Engineering and am
                    passionate about software engineering. I strive to use my
                    skills to solve real-world problems through software
                    development and make a meaningful impact. <br /><br />

                    My specialties and skills include advanced knowledge of
                    Java, GitHub, HTML, CSS, Bootstrap, and experience in
                    developing responsive websites using JavaScript, React,
                    and various other web development technologies. I am also
                    proficient in programming languages such as Python, C, and
                    C++, and I have experience developing Android apps using
                    Java in Android Studio. Additionally, I am well-versed in
                    RedHat-Linux and have a good understanding of MySQL,
                    GitHub, Git Bash, Visual Studio Code, Eclipse, and
                    Codesandbox.<br /><br />

                    I love collaborating and making connections with
                    like-minded individuals who share my passion for
                    programming and coding. You can find my blog where I
                    discuss programming topics at ajaydhangar49.medium.com. I
                    am always open to chatting about programming and coding,
                    and you can connect with me on LinkedIn, Twitter, YouTube,
                    GitHub, Medium, and Facebook.<br /><br />

                    In addition to my software development pursuits, I am a
                    branch ambassador for the Intellectual Property Rights
                    Club and a member of the Industry Academia Club at my
                    university. I am a problem solver at heart and have
                    designed a project, which you can check out on my GitHub
                    profile.<br /><br />

                    If you need any help or would like to discuss anything
                    related to software development, feel free to message me.
                    I would love to chat and connect with you.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>Birthday : <span>19 march 2001</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Age : <span>22</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        website :
                        <span
                        ><Link to="https://ajay-dhangar.github.io/portfolio/"
                        ><i className="fa fa-globe"></i></Link
                          > Portfolio</span
                        >
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Linkedin:
                        <span
                        ><Link
                          to="https://www.linkedin.com/in/ajay-dhangar-bb89b4227/"
                        ><i className="fa-brands fa-linkedin-in"> </i
                        ></Link>
                          Ajay Dhangar</span
                        >
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Degree : <span>CSE</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Freelnace : <span>Available <img src="https://ajay-dhangar.github.io/images/verified.png" alt="verified" width={25} height={15} style={{ marginTop: '2px', marginLeft: '-5px' }} /></span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>City : <span>Mandsaur</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>country : <span>India</span></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <Link
                        to="https://drive.google.com/file/d/1aDq7ihLLrMsssBb1GuwimURztB1x92qC/view"
                        className="btn"
                      >My CV</Link
                      >
                      <a
                        href="https://ajay-dhangar.github.io/Responsive-portfolio-website.github.io"
                        className="btn hire-me"
                      >More About Me</a
                      >
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>HTML</h5>
                      <div className="progress">
                        <div className="progress-in" style={{width:'98%'}}></div>
                        <div className="skill-percent">98%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>CSS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{width:'96%'}}></div>
                        <div className="skill-percent">96%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{width:'86%'}}></div>
                        <div className="skill-percent">86%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Bootstrap</h5>
                      <div className="progress">
                        <div className="progress-in" style={{width:'98%'}}></div>
                        <div className="skill-percent">96%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{width:'85%'}}></div>
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* <!--==== timeline item ====--> */}

                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2017 - 2018
                          </h3>
                          <h4 className="timeline-title">
                            Board Of Secondary Education, Madhya Pradesh,
                            Bhopal (passed in 10th from First Division )
                          </h4>
                          <p className="timeline-text">
                            I have achieve 87.3% percentage in className 10th
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2019 - 2020
                          </h3>
                          <h4 className="timeline-title">
                            Board Of Secondary Education, Madhya Pradesh,
                            Bhopal (passed in 12th fromFirst Division )
                          </h4>
                          <p className="timeline-text">
                            I have achieve 76.4% percentage in className 12th
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2022 - present
                          </h3>
                          <h4 className="timeline-title">
                            Project Manager (Right Education Official)
                          </h4>
                          <p className="timeline-text">
                            Experience : 6 Months<br /><button>
                              <a
                                href="https://www.linkedin.com/company/right-education-official/"
                                style={{color:'#fff'}}
                              >
                                See More</a
                              >
                            </button>
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2020 - 2024
                          </h3>
                          <h4 className="timeline-title">B.Tech( CSE )</h4>
                          <p className="timeline-text">
                            I am currently studying.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience & Certifications</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* <!--==== timeline item ====--> */}

                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> Apr 2022
                          </h3>
                          <h4 className="timeline-title">Microsoft</h4>
                          <p className="timeline-text">
                            BADGE : Build a Java app with cloud-scale NoSQL
                            Cosmos DB
                            <br /><button>
                              <a
                                href="https://www.linkedin.com/feed/update/urn:li:activity:6927996246607486976/"
                                style={{color: '#ffffff'}}
                              >
                                See More</a
                              >
                            </button>
                          </p>
                          <p className="timeline-text">
                            BADGE : Build a simple website using HTML, CSS,
                            and JavaScriptBADGE
                            <br /><button>
                              <a
                                href="https://www.linkedin.com/posts/ajay-dhangar-bb89b4227_build-a-simple-website-using-html-css-and-activity-6927152855636213760-YN-x/"
                                style={{color: '#ffffff'}}
                              >
                                See More</a
                              >
                            </button>
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> Apr 2022
                          </h3>
                          <h4 className="timeline-title">Edureka</h4>
                          <p className="timeline-text">
                            Certificate : Web Development Internship Demo
                            Session - Edureka <br /><button>
                              <a
                                href="https://www.linkedin.com/posts/ajay-dhangar-bb89b4227_web-development-internship-demo-session-activity-6931989600961777664-bH3h/"
                                style={{color: '#ffffff'}}
                              >
                                Show credential</a
                              >
                            </button>
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> Apr 2022
                          </h3>
                          <h4 className="timeline-title">Oracle</h4>
                          <p className="timeline-text">
                            Certificate : Database Foundations ( DFo Database
                            Foundations Learner )Database Foundations ( DFo
                            Database Foundations Learner ) <br /><button>
                              <a
                                href="https://www.linkedin.com/feed/update/urn:li:ugcPost:6923230544591814656/"
                                style={{color: '#ffffff'}}
                              >
                                Show credential</a
                              ></button
                            ><br />
                          </p>
                          <p className="timeline-text">
                            Certificate : Java Foundations Certification
                            <br /><button>
                              <a
                                href="https://www.linkedin.com/posts/ajay-dhangar-bb89b4227_oracle-java-foundations-certificate-activity-6921740938570584064-5ZA5/"
                                style={{color: '#ffffff'}}
                              >
                                Show credential</a
                              ></button
                            ><br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
