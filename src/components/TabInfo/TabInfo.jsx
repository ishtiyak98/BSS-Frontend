import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./TabInfo.scss";

function TabInfo() {
  return (
    <section className="tab-info-container">
      <h2 className="title">What are clinical trials?</h2>

      <p className="para-text">
        Clinical Trials are medical research studies that help to find out
        whether a treatment works and is safe for use before it can be
        distributed to the whole population. Regulatory agencies review the
        results from these studies and make an independent decision on whether a
        treatment can be approved for use. All Galapagos clinical studies are
        performed according to government regulations that are in place to help
        protect the rights of anyone taking part in a trial.
      </p>
      <br />
      <p className="para-text">
        There are four main phases of clinical studies:
      </p>
      <br />
      <div className="tab-container">
        <Tabs>
          <TabList className="tab-title-container">
            <Tab>Phase 1</Tab>
            <Tab>Phase 2</Tab>
            <Tab>Phase 3</Tab>
            <Tab>Phase 4</Tab>
          </TabList>

          <TabPanel>
            <div>Any content 1</div>
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
