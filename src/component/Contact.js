import React from 'react';
import {Grid,Cell} from 'react-mdl';

const Contact = () => {
    return (
        <div className='pd' style={{width: '90%', margin: 'auto',paddingTop:'80px'}}>
            <Grid className="gridCentre1" >
                 <Cell col={6}>
                    <div>
                        <h1>
                            DARSHAN SHEWALE
                        </h1>

                    </div>
                    <div className="img">

                         <img src="image/image1.png" width="200" height="200"    alt="myAvatar"/>

                    </div>
                    <div  className = 'banner1'>
                        <p>
           
                         Have been a learner and still learning to learn from many 
                             learners who wish to make  me learn whatever Good they
                                            have learnt,
            
                         </p>

                        <p>
               
                         intrested in technology ,computer programming artificial 
                            intelligrnce ,cyber security and yes music is the 
                                            catalyst for me
            
                        </p>              
                

                    </div>
           



                </Cell>
                <Cell col={6}>
                        <div className='dot'>
                            <h1>
                             WANNA GET IN TOUCH ?
                            </h1>
                             <hr/>
                        </div>
              

                        <div className="tab">
                            <Grid>
                                <Cell col={3}>
                                <i class="fa fa-phone-square fa-3x"style ={{color:"green"}} aria-hidden="true"></i>
                            </Cell>
                            <Cell col={6}>
                            <h4>(+91)983-453-8824</h4>
                            </Cell>

                            </Grid>
                            <Grid>
                                <Cell col={3}>
                                <i class="fa fa-envelope-open-o fa-3x"style={{color:"blue"}} aria-hidden="true"></i>

                            </Cell>
                            <Cell col={6}>
                            <h4>darshanshewale1@gmail.com</h4>

                            </Cell>

                            </Grid>
                            <Grid >
                                <Cell col={3}>
                                <i class="fa fa-map-marker fa-3x" style ={{color:"red"}}aria-hidden="true"></i>

                            </Cell>
                            <Cell col={6}>
                            <h4>pune</h4>

                            </Cell>

                            </Grid>


                    

                
                

                        </div>

                

                
                 
                    

           

                </Cell>



            </Grid>



        </div>
    )
}

export default Contact
