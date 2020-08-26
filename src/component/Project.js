import React, { useState } from 'react'
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

const Project = () => {

    const [state, setState] = useState({

        activeTab: 0

    })
    const myfunction = () => {

        if (state.activeTab === 0) {
            return (
                <div className='dis' style={{ display: 'flex' }}>

                    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(image/im4.jpg) center / cover' }}>HEART DISEASE PREDICTION USING ML</CardTitle>
                        <CardText style={{color:"black"}}>
                            It is an miniproject.which intoduce the basic of ML.where Data mining and algorithms are used over Data set . we find accuracy of algorithm .
                </CardText>
                        <CardActions border>
                            <a href="https://github.com/darshanshewale/heart_disease_prediction_using_ml" target="_blank"><Button colored>Git Hub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>





                </div>


            )
        }
        else if (state.activeTab === 1) {
            return (
                <div style={{ display: 'flex' }}>
                    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(image/im5.jpg) center / cover' }}>MY PORTFOLIO</CardTitle>
                        <CardText style={{color:"black"}}>
                            Here we developed a static website where I have provided my own information & which is hosted on aws server using S3 bucket.
                </CardText>
                        <CardActions border>
                            <a href="http://darshan-shewale-website.s3-website.ap-south-1.amazonaws.com/" target="_blank"><Button colored>Git Hub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>





                </div>

            )
        }
        else if (state.activeTab === 2) {

            return (
                <div style={{ display: 'flex' }}>
                    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(image/im6.png) center / cover' }}>CAB BOOKING LOCAL Application</CardTitle>
                        <CardText style={{color:"black"}}>
                            Here we developed a desktop application where we can book a cab and fair is calculated and Displayed according to the source and destination .
                </CardText>
                        <CardActions border>
                            <a href="https://www.google.com" target="_blank"><Button colored>Git Hub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


                </div>




            )



        }
        else {

            return (
                <div style={{ display: 'flex' }}>
                    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(image/im7.jpg) center / cover' }}>BASIC CALCULATOR(FIRST APP)</CardTitle>
                        <CardText style={{color:"black"}}>
                            Design a simple Android  app which perform addition,subtraction, multiplication and division.
                </CardText>
                        <CardActions border>
                            <a href="https://github.com/darshanshewale/Calculator" target="_blank"><Button colored>Git Hub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


                </div>




            )


        }

    }






    return (
        <div className='projec'>
            <Tabs activeTab={state.activeTab} onChange={(tabId) => setState({ ...state, activeTab: tabId })} >
                <Tab>Machine Learning</Tab>
                <Tab>Reactjs</Tab>
                <Tab>JAVA</Tab>
                <Tab>Android </Tab>

            </Tabs>
            <section>
                <Grid>
                    <Cell col={12}>

                        {myfunction()}

                    </Cell>
                </Grid>
            </section>



        </div>


    )
}

export default Project
