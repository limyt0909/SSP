import "./Top.css";
import React from "react";

const Top4 = () => {
  return (
    <>
      <div class="dropdowntest">
        <ul>
          <li>
            <div class="degrees">
              AONE
              <span></span>
            </div>
            <ul class="dropdown">
              <li>
                <a href="/">소개</a>
                <a href="/">VISION</a>
                <a href="/">경영방침</a>
                <a href="/">연혁</a>
                <a href="/">CI</a>
                <a href="/">구성원소개</a>
                <a href="/">채용</a>
                <a href="/">주요고객사</a>
                <a href="/">지점현황</a>
              </li>
            </ul>
          </li>

          <li>
            <div class="degrees">
              지속가능경영 <span></span>
            </div>
            <ul class="dropdown">
              <li>
                <div>
                  <a href="/">임직원가치 향상</a>
                  <a href="/">윤리경영</a>
                  <a href="/">품질경영</a>
                </div>
              </li>
            </ul>
          </li>

          <li>
            <div class="degrees">
              SERVICES<span></span>
            </div>
            <ul class="dropdown">
              <li>
                <div class="row">
                  <div class="col-3">
                    <h4>CLEARANCE SERVICE</h4>
                    <a href="/">수출입통관</a>
                    <a href="/">환급</a>
                    <br /> <br /> <br />
                    <a href="/">요건</a>
                    <a href="/">검역</a>
                  </div>

                  <div class="col-3">
                    <h4>CONSULTING</h4>
                    <a href="/">FTA</a>
                    <a href="/">AEO</a>
                    <a href="/">기타</a>
                  </div>

                  <div class="col-3">
                    <h4>LEGAL SUPPORTING</h4>
                    <a href="/">심사</a>
                    <a href="/">조사</a>
                    <a href="/">행정쟁송</a>
                  </div>

                  <div class="col-3">
                    <h4>OTHER SERVICE</h4>
                    <a href="/">EDU</a>
                    <a href="/">IT</a>
                    <a href="/">기타</a>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          <li>
            <div class="degrees">
              RESOURCE <span></span>
            </div>

            <ul class="dropdown">
              <li>
                <a href="/">관세무역 뉴스</a>
                <a href="/">관세무역 자료실</a>
                <a href="/">WEB-ZINE</a>
                <a href="/">유관기관 안내</a>
                <a href="/">정운기칼럼</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="dropdownBG">　</div>
      </div>
    </>
  );
};

export default Top4;
