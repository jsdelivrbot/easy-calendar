// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var HelloReact = require("./Hello.react");

function make(children) {
  return ReasonReact.wrapJsForReason(HelloReact, undefined, children);
}

exports.make = make;
/* ReasonReact Not a pure module */
