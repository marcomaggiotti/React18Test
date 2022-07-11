import React from "react";
//import "./index.css";

import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TabsPage() {
  return (
    <div className="tab-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Tabs defaultActiveKey="deven" className="bg-dark">
              <Tab eventKey="alex" title="ALEX">
                <div className="tab-item-wrapper">
                  <h4>Name : Alex</h4>
                  <h5>Profession : FrontEnd Developer</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime libero vitae quia unde ex ducimus qui reiciendis
                    dolore, cumque possimus.
                  </p>
                </div>
              </Tab>

              <Tab eventKey="deven" title="DEVEN">
                <div className="tab-item-wrapper">
                  <h4>Name : Deven</h4>
                  <h5>Profession : FullStack Developer</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime libero vitae quia unde ex ducimus qui reiciendis
                    dolore, cumque possimus.
                  </p>
                </div>
              </Tab>

              <Tab eventKey="alina" title="ALINA">
                <div className="tab-item-wrapper">
                  <h5>Contact Info</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus, labore dignissimos? Accusantium impedit assumenda
                    quisquam incidunt quibusdam temporibus animi.
                  </p>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
