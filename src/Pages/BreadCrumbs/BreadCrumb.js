import React from "react";
import "./BreadCrumb.css";

const BreadCrumb = () => {
  var elements = document.getElementsByClassName("bread-group");

  const clickHandler = () => {
    var element = document.getElementById("bread-group1");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("invisible");
    }
    element.classList.remove("invisible");
  };

  return (
    <div class="breadcrumbwrap">
      <div class="locationwrap" id="menu">
        <ul class="main1">
          <a class="home" href="/" button={clickHandler}>
            <span class="hide-txt">홈</span>
          </a>
          <li>
            <a class="ui-btn" href="#" button={clickHandler} data-state="">
              <span>업무분야</span>
            </a>
            <ul class="main2">
              <li>1-1</li>
              <li>1-2</li>
              <li>1-3</li>
              <li>1-4</li>
              <li>1-5</li>
            </ul>
          </li>

          <li>
            <a class="ui-btn" href="#" button={clickHandler} data-state="">
              <span>전체</span>
            </a>{" "}
            <ul class="main2">
              <li>2-1</li>
              <li>2-2</li>
              <li>2-3</li>
              <li>2-4</li>
              <li>2-5</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
