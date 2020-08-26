import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Resume from './component/Resume';
import Project from './component/Project';
import Contact from './component/Contact';



import {Layout,Header,Navigation,Content,Drawer} from 'react-mdl';
import { BrowserRouter,Link,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <div className="demo-big-content">
            <Layout>
                <Header title="Darshan Shewale" className="headerApp" scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/Resume">Resume</Link>
                        <Link to="/Project">Project</Link>
                        <Link to="/Contact">Contact</Link>

                    </Navigation>
                </Header>
                <Drawer title="Darshan Shewale"  >
                <Navigation  >
                        <Link to="/">Home</Link>
                        <Link to="/Resume">Resume</Link>
                        <Link to="/Project">Project</Link>
                        <Link to="/Contact">Contact</Link>
                </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <div className = "headerApp">
                      
                    <Switch>
                      <Route exact path="/" component={Home}></Route>

                      <Route exact path="/Resume"component={Resume}></Route>

                      <Route exact path="/Project"component={Project}></Route>
                      
                      <Route exact path="/Contact"component={Contact}></Route>






                    </Switch>
                    </div>

                </Content>
            </Layout>
            
      </div>
      




      </BrowserRouter>

    </div>
  );
}

export default App;
