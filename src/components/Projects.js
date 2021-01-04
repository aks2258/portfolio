import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Button } from 'semantic-ui-react'

export default () => (
  <Carousel autoPlay showThumbs = {false} infiniteLoop = {true}>
    <div>
        <img alt="" src="https://raw.githubusercontent.com/aks2258/Typing-Test/main/images/Home.png" />
            <div className="legend">
                    <Button inverted color='blue'>
                        Typing Test
                    </Button>
                    <Button>Source Code</Button>
            </div>
    </div>
    <div>
        <img alt="" src="https://raw.githubusercontent.com/aks2258/Playbase/master/playbase_login.png" />
            <div className="legend">
                <Button inverted color='black'>
                    Playbase
                </Button>
                <Button>Source Code</Button>
            </div>
    </div>
    <div>
        <img alt="" src="https://raw.githubusercontent.com/aks2258/mtg_project_frontend/main/src/images/Home.png" />
            <div className="legend">
                <Button  inverted color='green'>
                    Imperfect Gathering
                </Button>
                <Button>Source Code</Button>
            </div>
    </div>
  </Carousel>
);
