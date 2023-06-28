import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabImgLg from "../../assets/img/info-lg.png";
import TabImgSm from "../../assets/img/info-sm.png";
import "./TabInfo.scss";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

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
      <div className="hidden lg:block">
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
            <div className="tabInfo">
              <p className="tabInfo__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                enim quas voluptatum aliquam eius commodi. Dicta vitae
                consectetur ducimus aliquid mollitia, reprehenderit quo nisi.
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
            <div className="tabInfo">
              <p className="tabInfo__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                enim quas voluptatum aliquam eius commodi. Dicta vitae
                consectetur ducimus aliquid mollitia, reprehenderit quo nisi
                laborum officiis Minus eum debitis vel ipsum accusamus dolorum
                vero quisquam atque.
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
        </Tabs>
      </div>
      <div className="block lg:hidden accordion">
        <Accordion allowZeroExpanded preExpanded={["a"]}>
          <AccordionItem uuid="a">
            <AccordionItemHeading>
              <AccordionItemButton>Phase 1</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="accordion__Info">
                <p className="accordion__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus enim quas voluptatum aliquam eius commodi. Dicta vitae
                  consectetur ducimus aliquid mollitia, reprehenderit.
                </p>
                <div className="accordion__Img">
                  <img
                    src={TabImgSm}
                    alt="tabInfoImgSm"
                    className="block lg:hidden accordion__Img--sm"
                  />
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Phase 2</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div className="accordion__Info">
                <p className="accordion__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus enim quas voluptatum aliquam eius commodi. Dicta vitae
                  consectetur ducimus aliquid mollitia, reprehenderit.
                </p>
                <div className="accordion__Img">
                  <img
                    src={TabImgSm}
                    alt="tabInfoImgSm"
                    className="block lg:hidden accordion__Img--sm"
                  />
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Phase 3</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div className="accordion__Info">
                <p className="accordion__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus enim quas voluptatum aliquam eius commodi. Dicta vitae
                  consectetur ducimus aliquid mollitia, reprehenderit.
                </p>
                <div className="accordion__Img">
                  <img
                    src={TabImgSm}
                    alt="tabInfoImgSm"
                    className="block lg:hidden accordion__Img--sm"
                  />
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Phase 4</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div className="accordion__Info">
                <p className="accordion__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus enim quas voluptatum aliquam eius commodi. Dicta vitae
                  consectetur ducimus aliquid mollitia, reprehenderit.
                </p>
                <div className="accordion__Img">
                  <img
                    src={TabImgSm}
                    alt="tabInfoImgSm"
                    className="block lg:hidden accordion__Img--sm"
                  />
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default TabInfo;
