import React from 'react';
import {Grid,Cell} from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faStackOverflow, faPython, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Home() {

    return (
        <div className= 'pd'style={{width: '100%', margin: 'auto'}}>

            <Grid className="gridCentre" >
                <Cell col={12}>

                    <img src="image/image1.png" width="200"height="200" alt="myAvatar"/>


                </Cell>
                <Cell col={12}>

                 <img src="image/signature.png" alt="signature"/>


                </Cell>



                 </Grid>
                <div className="banner">
                    <h1>Student</h1> 
                        <hr/>
                            <p>
                                C | C++ | JAVA | PYTHON | HTML | CSS | REACT | MYSQL | JAVASCRIPT 
                   
                            </p>
               
                                <a href="https://github.com/darshanshewale" target= "_blank"> <i   class="fa fa-github fa-4x " style ={{color:"gold"}} aria-hidden="true"/></a>
                                <a href="https://www.linkedin.com/in/darshan-shewale-9883b6170/" target= "_blank"><i  class="fa fa-linkedin fa-4x" style ={{color:"gold"}} aria-hidden="true"></i></a>
                                <a href="https://www.instagram.com/darshanshewale12/" target= "_blank"><i class="fa fa-instagram fa-4x" style ={{color:"gold"}} aria-hidden="true"/></a>
                               <a href="https://www.facebook.com/darshan.shewale.73/" target="_blank"><i class="fa fa-facebook fa-4x"style ={{color:"gold"}} aria-hidden="true"></i></a>
                                 <span >
                                <a href="https://stackoverflow.com/users/13884995/darshan-shewale?tab=profile" target= "_blank"> <FontAwesomeIcon icon={faStackOverflow} className="spani" /></a>
                                </span>

            

                </div>

            



            
        </div>
    )

    
}
export default Home;