import React, { Component } from "react";
import "../Page.css";

const Sidebar = () => {
  return (
    <div id="sidebar" class="h-80 d-inline-block">
      <dl>
        <div class="row">
          <div class="col-md-12">
            <ul id="tab-list" class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#tab1"
                  role="tab"
                  data-toggle="tab"
                >
                  <span>Var_1 </span>
                  <span class="glyphicon glyphicon-pencil text-muted edit"></span>
                </a>
              </li>
            </ul>

            <div>
              <div class="pnlBox">
                From &nbsp
                <input class="txtNum" type="text" id="txtFnum" value="1" />
                &nbsp To &nbsp
                <input class="txtNum" type="text" id="txtLnum" value="9" />
                &nbsp Step &nbsp
                <input class="txtNum" type="text" id="txtStep" value="1" />
                &nbsp &nbsp
              </div>
              <div class="w-100">
                <button
                  type="button"
                  class="btn btn-primary pull-right w-100"
                  id="btnDo"
                  //   onclick="btnDo_OnClick()"
                >
                  MakeGenerate Parameters
                </button>
              </div>
            </div>
            <div id="tab-content" class="tab-content">
              <div class="tab-pane fade show active" id="tab1" role="tabpanel">
                <div class="txtNote">One parameter per line</div>
                <dt
                  class="txtParam"
                  id="txtParam1"
                  contenteditable="plaintext-only"
                ></dt>
              </div>
            </div>
          </div>
        </div>
      </dl>
    </div>
  );
};

export default Sidebar;
