/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import './Home.css';

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log('Leaving section ' + origin.index);
  }

  afterLoad(origin, destination, direction) {
    console.log('After load: ' + destination.index);
  }

  render() {
    return (
      <>
  
        <ReactFullpage
          scrollOverflow={true}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section section1" id="section1">
                  <div class="w3-animate-opacity w3-text-white">
                    <div class="w3-display-middle">
                      <h1
                        id="Hometitle"
                        class="w3-jumbo w3-animate-top"
                        className="NanumSqaure"
                      >
                       용택월드
                      </h1>

                      <hr class="w3-border-grey" />

                      <p id="Hometitle2">용택연습장</p>
                    </div>
                  </div>
                </div>

                <div className="section" id="section22">
                  <div className="slide">
                    <div class="section" id="section6">
                      <div className="textbox6">
                        <div id="textbox6Header">
                          <strong>고객만족 고객지향</strong> 최상의 서비스를
                          만듭니다
                        </div>{' '}
                        <hr />
                        <ul>
                          <li>
                            우리는 고객만족을 최우선으로 고객의 입장에서
                            생각하고 행동하며, 고객의 의견을 존중하여
                            <br /> 만족과 감동을 주는 서비스를 제공하기 위해
                            ‘고객헌장’을 제정하여 실천한다.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

            

                

                  <div className="slide">
                    <div class="section" id="section4">
                      <div className="textbox4">
                        <div id="textbox4Header">
                          <br />
                          <strong>깨끗하고 정직한 조직문화</strong>
                        </div>{' '}
                        <hr />
                        <div id="textbox4text">
                          우리는 깨끗하고 정직한 조직문화를 바탕으로 경영이념을
                          실천함과 <br />
                          VISON 2020실현을 위해 의사결정의 판단기준으로 삼고자
                          합니다.
                        </div>
                      </div>
                    </div>{' '}
                  </div>

                  <div className="slide">
                   
                    </div>
           
                </div>{' '}
              
               
                <div className="section fp-auto-height lefty">
                  <h />
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
