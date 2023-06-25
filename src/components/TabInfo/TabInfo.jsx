import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabImgLg from "../../assets/img/info-lg.png";
import TabImgSm from "../../assets/img/info-sm.png";
import "./TabInfo.scss";

function TabInfo() {
  return (
    <section className="tab">
      <h2 className="tab__title">What are clinical trials?</h2>
      <p className="tab__text">
        Clinical Trials are medical research studies that help to find out
        whether a treatment works and is safe for use before it can be
        distributed to the whole population. Regulatory agencies review the
        results from these studies and make an independent decision on whether a
        treatment can be approved for use. All Galapagos clinical studies are
        performed according to government regulations that are in place to help
        protect the rights of anyone taking part in a trial.
      </p>
      <br />
      <p className="tab__text">
        There are four main phases of clinical studies:
      </p>
      <br />
      <div>
        <Tabs>
          <TabList className="tab__title__container">
            <Tab>Phase 1</Tab>
            <Tab>Phase 2</Tab>
            <Tab>Phase 3</Tab>
            <Tab>Phase 4</Tab>
          </TabList>

          <TabPanel>
            <div className="tabInfo">
              <p className="tabInfo__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                enim quas voluptatum aliquam eius commodi. Dicta vitae
                consectetur ducimus aliquid mollitia, reprehenderit quo nisi
                laborum officiis Minus eum debitis vel ipsum accusamus dolorum
                vero quisquam atque. Voluptas repellendus repellat possimus
                tempore, quisquam numquam nihil. Nemo, adipisci libero! Minus
                eum debitis vel ipsum accusamus.
              </p>
              <div className="tabInfo__Img">
                <img
                  src={TabImgLg}
                  alt="tabInfoImgLg"
                  className="hidden lg:block tabInfo__Img--lg"
                />
                <img
                  src={TabImgSm}
                  alt="tabInfoImgSm"
                  className="block lg:hidden tabInfo__Img--sm"
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div>Any content 2</div>
          </TabPanel>
          <TabPanel>
            <div>Any content 3</div>
          </TabPanel>
          <TabPanel>
            <div>Any content 4</div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
}

export default TabInfo;
