import "./Top3.css";
import React from "react";

const Top4 = () => {
  return (
    <>
      <div class="mainmenu">
        <ul>
          <li>
            <div class="degree">
              <a href="/">AONE</a>
              <span></span>
            </div>
          </li>
          <li>
            <div class="degree">
              지속가능경영 <span></span>
            </div>
          </li>
          <li>
            <div class="degree">
              <a href="/">SERVICES</a> <span></span>
            </div>
          </li>
          <li>
            <div class="degree">
              <a href="/">RESOURCE</a> <span></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="submenu">
        <div class="dropdown">
          <ul>
            <li>
              <div>
                <a href="/">sub-1</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <ul>
            <li>
              <div>
                <span>지속가능 경영</span>
                <a href="/">sub-1</a>
                <a href="/">sub-1</a>
                <a href="/">sub-1</a>
                <a href="/">sub-1</a>
                <a href="/">sub-1</a>
                <span>경영 지속 가능</span>
              </div>

              <div>
                <a href="/">sub-2</a>
                <a href="/">sub-2</a>
                <a href="/">sub-2</a>
                <a href="/">sub-2</a>
                <a href="/">sub-2</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <ul>
            <li>
              <a href="/">sub-1</a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <ul>
            <li>
              <a href="/">sub-1</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Top4;
