import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { withRouter } from 'react-router-dom';


function Resume() {

  return (
    <div class="resume">
      
        <div class="resume_left">
        <div class="resume_profile">
          <img src="image/im3.jpg" alt="profile_pic" />
        </div>
        <div class="resume_content">
          <div class="resume_item resume_info">
            <div class="title">
              <p class="bold">Darshan Shewale</p>
              <p class="regular">Student</p>
            </div>
            <ul>
              <li>
                <div class="icon">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div class="data">
                  PUNE<br /> INDIA
             </div>
              </li>
              <li>
                <div class="icon">
                  <i class="fa fa-mobile" aria-hidden="true"></i>
                </div>
                <div class="data">
                  (+91)983-453-8824
             </div>
              </li>
              <li>
                <div class="icon">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div class="data">
                  darshanshewale1@gmail.com
             </div>
              </li>

            </ul>
          </div>
          <div class="resume_item resume_skills">
            <div class="title">
              <p class="bold">skill's</p>
            </div>
            <ul>
              <li>
                <div class="skill_name">
                  HTML
             </div>
                <div class="skill_progress">
                  <span style={{ width: "80%" }}></span>
                </div>
                <div class="skill_per">70%</div>
              </li>
              <li>
                <div class="skill_name">
                  CSS
             </div>
                <div class="skill_progress">
                  <span style={{ width: "70%" }}></span>
                </div>
                <div class="skill_per">70%</div>
              </li>
              <li>
                <div class="skill_name">
                  C
             </div>
                <div class="skill_progress">
                  <span style={{ width: "90%" }}></span>
                </div>
                <div class="skill_per">70%</div>
              </li>
              <li>
                <div class="skill_name">
                  C++
             </div>
                <div class="skill_progress">
                  <span style={{ width: "60%" }}></span>
                </div>
                <div class="skill_per">80%</div>
              </li>
              <li>
                <div class="skill_name">
                  Python
             </div>
                <div class="skill_progress">
                  <span style={{ width: "88%" }}></span>
                </div>
                <div class="skill_per">50%</div>
              </li>
            </ul>
          </div>
          <div class="resume_item resume_social">
            <div class="title">
              <p class="bold">Certificate</p>
            </div>
            <ul>
              <li>
                <div class="data">
                  <p class="semi-bold">Letsupgrade</p>
                  <p>Certification Programe In Javascript Essentials (08/2020)</p>
                </div>
              </li>
              <li>
                <div class="data">
                  <p class="semi-bold">Texas Instrument</p>
                  <p>DST and  Texas Innovation Challenge Design Contest 2018(07/2018)</p>
                </div>
              </li>
              <li>
                <div class="data">
                  <p class="semi-bold">Janakalyan Raktapedhi</p>
                  <p>Voluntary Blood Donation Movement (09/2018)</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="resume_item resume_social">
            <div class="title">
              <p class="bold">Workshop</p>
            </div>
            <ul>
              <li>
                <div class="data">
                  <p class="semi-bold">Bennett University</p>
                  <p>WORKSHOP ON ARTIFICIAL INTELLIGENCE AND DEEP LEARNING (07/2019)</p>
                </div>
              </li>
              <li>
                <div class="data">
                  <p class="semi-bold">GHRIET</p>
                  <p>PYTHON AND MACHINE LEARNING WORKSHOP(09/2019)</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
      

        
        
        <div class="resume_right">
        <div class="resume_item resume_about">
          <div class="title">
            <p class="bold">OBJECTIVE</p>
          </div>
          <p>A self motivated and  hardworking individual capable of work under pressure in all environments. Searching for new opportunities in a dynamic organisation to earn practical experience through my knowledge and skills.</p>
        </div>

        <div class="resume_item resume_education">
          <div class="title">
            <p class="bold">Education</p>
          </div>
          <ul>
            <li>
              <div class="date">2017 - 2021</div>
              <div class="info">
                <p class="semi-bold">COMPUTER OF ENGINEERING (SPPU University)</p>
                <p>SGPA= 8.22</p>
              </div>
            </li>
            <li>
              <div class="date">2016 - 2017</div>
              <div class="info">
                <p class="semi-bold">MAHARSHARA STATE BOARD</p>
                <p>HSC=75.38%</p>
              </div>
            </li>
            <li>
              <div class="date">2014 - 2015</div>
              <div class="info">
                <p class="semi-bold">MAHARSHATRA STATE BOARD</p>
                <p>SSC=84.80%</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="resume_item resume_work">
          <div class="title">
            <p class="bold">ACHIEVEMENTS </p>
          </div>
          <ul>
            <li>
              <div class="date">State Hockey Sport School Competition (09/2013)</div>
              <div class="info">
                <p class="semi-bold">At the age of 14 played on state level in the hockey ,which is under age 19 group.
get best player award</p>
              </div>
            </li>
            <li>
              <div class="date">National Service Scheme Co-ordinator from Computer And IT
Department (06/2018 - Present)</div>
              <div class="info">
                <p class="semi-bold">Participation in Blood donation Camp of GHRIET. Also The part Of NSS Camp
(2019 SPPU).</p>
              </div>
            </li>

            <li>
              <div class="date">FE Cricket Team Captain (2018)</div>
              <div class="info">
                <p class="semi-bold">Inter College Cricket Competion 2018</p>
              </div>
            </li>
            <li>
              <div class="date">HR HEAD (02/2020 - 05/2020)</div>
              <div class="info">
                <p class="semi-bold">Through The association many excellence program has been taken for students.
                also The responsibility of Magazine Head and Workshop and Event Management
Head .</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="resume_item resume_work">
          <div class="title">
            <p class="bold">PERSONAL INFORMATION </p>
          </div>
          <ul>
            <li>
              <div class="date">DATE OF BIRTH</div>
              <div class="info">
                <p class="semi-bold">30 AUG 2020</p>
              </div>
            </li>
            <li>
              <div class="date">GENDER</div>
              <div class="info">
                <p class="semi-bold">MALE</p>
              </div>
            </li>
            <li>
              <div class="date">LANGUAGES KNOWS</div>
              <div class="info">
                <p class="semi-bold">ENGLISH,MARATHI,HINDI</p>
              </div>
            </li>


          </ul>
        </div>



      </div>




          
  
      
    

    </div>

  )


}
export default Resume;

