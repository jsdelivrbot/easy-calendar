// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var DateFns = require("date-fns");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var DayUtil$ReactTemplate = require("./DayUtil.bs.js");

var component = ReasonReact.statelessComponent("Cells");

function firstStartDay(param) {
  return DateFns.startOfWeek($$Array.fold_left((function (a, b) {
                    return a + ("-" + b);
                  }), "", $$Array.map((function (prim) {
                        return String(prim);
                      }), /* array */[
                      param[0],
                      param[1]
                    ])));
}

function getStartDays(startDay) {
  return $$Array.mapi((function (x, _) {
                return DateFns.addDays(startDay, Caml_int32.imul(7, x));
              }), Caml_array.caml_make_vect(5, startDay));
}

function getOneWeekDays(startDay) {
  return $$Array.mapi((function (x, _) {
                return DayUtil$ReactTemplate.dayInfo(DateFns.addDays(startDay, x));
              }), Caml_array.caml_make_vect(7, /* record */[
                  /* year */0,
                  /* month */0,
                  /* date */0,
                  /* str */""
                ]));
}

function cellStyle($staropt$star, _) {
  var b = $staropt$star !== undefined ? $staropt$star : "#bbdefb";
  return {
          background: b,
          margin: "2px",
          padding: "0.5em"
        };
}

function renderWeekRow(renderDays, currentMonth) {
  return $$Array.map((function (e) {
                var match = currentMonth === e[/* month */1];
                var style = match ? cellStyle(undefined, /* () */0) : cellStyle("#e0e0e0", /* () */0);
                return React.createElement("div", {
                            className: "col-sm card",
                            style: style
                          }, String(e[/* date */2]));
              }), renderDays);
}

function renderOneWeek(weekDays) {
  return ReactDOMRe.createElementVariadic("div", {
              className: "row"
            }, weekDays);
}

function renderDays(param, currentMonth) {
  return $$Array.map(renderOneWeek, $$Array.map((function (e) {
                    return renderWeekRow(e, currentMonth);
                  }), $$Array.map(getOneWeekDays, getStartDays(firstStartDay(/* tuple */[
                              param[0],
                              param[1]
                            ])))));
}

function make(currentMonth, currentYear, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return React.createElement("div", {
                          className: "container"
                        }, renderDays(/* tuple */[
                              currentYear,
                              currentMonth
                            ], currentMonth), React.createElement("button", {
                              onClick: (function () {
                                  console.log(getStartDays(firstStartDay(/* tuple */[
                                                currentYear,
                                                currentMonth
                                              ])));
                                  return /* () */0;
                                })
                            }, "current month: " + String(currentMonth)));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.firstStartDay = firstStartDay;
exports.getStartDays = getStartDays;
exports.getOneWeekDays = getOneWeekDays;
exports.cellStyle = cellStyle;
exports.renderWeekRow = renderWeekRow;
exports.renderOneWeek = renderOneWeek;
exports.renderDays = renderDays;
exports.make = make;
/* component Not a pure module */
