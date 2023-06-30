import React from "react";
import "../Page.css";
import img0 from "../img/0.png";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";
import img9 from "../img/9.png";

const Body = () => {
  return (
    <div id="mainbody" class="h-80 d-inline-block">
      <dl>
        <dt height="100px">
          <p class="h5">Insert The Variable:</p>
          <img
            id="v1"
            src={img1}
            width="32px"
            height="32px"
            type="button"
            onclick="btnAddV_OnClick(1)"
          />
          <img
            id="v2"
            src={img2}
            width="32px"
            height="32px"
            type="button"
            onclick="btnAddV_OnClick(2)"
          />
          <img
            id="v3"
            src={img3}
            width="32px"
            height="32px"
            type="button"
            onclick="btnAddV_OnClick(3)"
          />
          <img
            id="v4"
            src={img4}
            width="32px"
            height="32px"
            type="button"
            onclick="btnAddV_OnClick(4)"
          />
          <img
            id="v5"
            src={img5}
            width="32px"
            height="32px"
            type="button"
            onclick="btnAddV_OnClick(5)"
          />
          <img
            id="v6"
            src={img6}
            width="32px"
            height="32px"
            type="button"
            onclick="btnAddV_OnClick(6)"
          />
          <img
            id="v7"
            src={img7}
            width="32px"
            height="32px"
            type="button"
            onclick="btnAddV_OnClick(7)"
          />
          <img
            id="v8"
            src={img8}
            width="32px"
            height="32px"
            type="button"
            onclick="btnAddV_OnClick(8)"
          />
          <img
            id="v9"
            src={img9}
            width="32px"
            height="32px"
            type="button"
            onclick="btnAddV_OnClick(9)"
          />
          <img
            id="v0"
            src={img0}
            width="32px"
            height="32px"
            type="button"
            onclick="btnAddV_OnClick(0)"
          />
        </dt>
      </dl>
      <h5>Place your sentence and variable below:</h5>
      <dt
        class="editable"
        id="txtCodeArea"
        contenteditable="plaintext-only"
      ></dt>
      <dt height="50px">
        <button
          id="btnRun"
          type="button"
          class="btn btn-primary pull-right w-100"
          width="100%"
          onclick="btnRun_OnClick()"
        >
          Generate the result below
        </button>
      </dt>
      <dt class="editable" id="txtCodeResult" contenteditable="readonly"></dt>
      <dt height="50px">
        <button
          id="btnCopy"
          type="button"
          class="btn btn-primary pull-right w-100"
          onclick="btnCopy_OnClick()"
        >
          Copy result
        </button>
      </dt>
    </div>
  );
};

export default Body;
