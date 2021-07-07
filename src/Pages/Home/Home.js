/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./Home.css";
import Footer from "../Footer/Footer";

const anchors = ["firstPage", "secondPage", "thirdPage"];
class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }

  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <ReactFullpage
          scrollOverflow={true}
          onLeave={this.onLeave.bind(this)}
          anchors={anchors}
          navigation
          navigationTooltips={anchors}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section" id="section1">
                  <div class="w3-animate-opacity w3-text-white">
                    <div class="w3-display-middle">
                      <h1 class="w3-jumbo w3-animate-top" className="hometitle">
                        용택월드
                      </h1>

                      <hr class="w3-border-grey" />

                      <p class="homesubtitle">연습장이다</p>
                    </div>
                  </div>
                </div>
                <div className="section" id="section2">
                  <div className="slide">section1</div>
                  <div className="slide">2</div>
                  <div className="slide">3</div>
                </div>{" "}
                <div className="section fp-auto-height">
                  <Footer />
                </div>
              </div>
            );
          }}
        />
      </>
    );
  }
}

export default FullpageWrapper;
