(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{230:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(232),u=(e(20),e(74),e(25)),o=e(127),l=e(125),c=e(234),f=e.n(c),d=e(75),s=e(244),m=e.n(s);function p(){var n=w(["\n  padding: 0;\n  padding-left: 3px;\n  width: 54px;\n  height: 54px;\n  border-radius: 50%;\n  border: 0;\n  background: ",";\n  position: absolute;\n  bottom: 0;\n  right: 30px;\n  transform: translateY(22px);\n  box-shadow: 0 8px 12px ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return p=function(){return n},n}function x(){var n=w(['\n  margin: 0;\n  margin-bottom: 10px;\n  font-size: 24px;\n  line-height: 29px;\n  font-family: "Helvetica Neue";\n  color: white;\n']);return x=function(){return n},n}function g(){var n=w(["\n  height: 82px;\n  max-width: 325px;\n  padding-left: 30px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n"]);return g=function(){return n},n}function v(){var n=w(["\n  position: absolute !important;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  border-bottom-left-radius: 50px;\n"]);return v=function(){return n},n}function h(){var n=w(["\n  position: relative;\n  height: 180px;\n  margin-bottom: 51px;\n  flex: 0 0 auto;\n"]);return h=function(){return n},n}function w(n,t){return t||(t=n.slice(0)),n.raw=t,n}var y=u.default.div(h()),b=Object(u.default)(f.a)(v()),M=u.default.div(g()),E=u.default.h2(x()),N=u.default.button.attrs(function(){return{children:r.a.createElement("img",{src:m.a,alt:"play the list"})}})(p(),d.d,d.b),D=function(n){var t=n.name,e=n.cover;return r.a.createElement(y,null,r.a.createElement(b,{fluid:e}),r.a.createElement(M,null,r.a.createElement(E,null,t)),r.a.createElement(N,null))};function L(){var n=A(['\n  padding-top: 1px;\n  font-size: 12px;\n  font-family: "Helvetica Neue";\n  line-height: 14px;\n  color: ',";\n"]);return L=function(){return n},n}function z(){var n=A(['\n  font-size: 12px;\n  font-family: "Helvetica Neue";\n  line-height: 14px;\n  color: ',";\n"]);return z=function(){return n},n}function I(){var n=A(["\n  margin: 0;\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-family: Montserrat;\n  line-height: 17px;\n"]);return I=function(){return n},n}function j(){var n=A([""]);return j=function(){return n},n}function C(){var n=A(["\n  padding-top: 10px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n\n  & + & {\n    border-top: 1px solid ",";\n  }\n"]);return C=function(){return n},n}function A(n,t){return t||(t=n.slice(0)),n.raw=t,n}var T=u.default.div(C(),d.c),P=u.default.div(j()),k=u.default.h6(I()),S=u.default.div(z(),d.a),H=u.default.div(L(),d.a),O=function(n){var t=n.name,e=n.author,a=n.duration;return r.a.createElement(T,null,r.a.createElement(P,null,r.a.createElement(k,null,t),r.a.createElement(S,null,e)),r.a.createElement(H,null,a))};function Z(){var n=function(n,t){t||(t=n.slice(0));return n.raw=t,n}(["\n  padding-left: 30px;\n  padding-right: 30px;\n  max-height: 100%;\n  overflow: auto;\n"]);return Z=function(){return n},n}var Q=u.default.div(Z()),W=function(n){var t=n.items;return r.a.createElement(Q,null,t.map(function(n){return r.a.createElement(O,{key:n.name,name:n.name,author:n.author,duration:n.duration})}))};function B(){var n=function(n,t){t||(t=n.slice(0));return n.raw=t,n}(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return B=function(){return n},n}var U=u.default.div(B()),Y=function(){var n=Object(a.useContext)(o.b),t=Object(a.useContext)(l.b),e=t.playLists.find(function(n){return n.name===t.playing.playListName});return r.a.createElement(U,null,r.a.createElement(D,{name:e.name,cover:n[e.cover]}),r.a.createElement(W,{items:e.items}))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:"Music Player | Play List"}),r.a.createElement(Y,null))}},232:function(n,t,e){"use strict";var a=e(233),r=e(0),i=e.n(r),u=e(235),o=e.n(u);function l(n){var t=n.description,e=n.lang,r=n.meta,u=n.title,l=a.data.site,c=t||l.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:e},title:u,titleTemplate:"%s",meta:[{name:"description",content:c},{property:"og:title",content:u},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:c}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},233:function(n){n.exports={data:{site:{siteMetadata:{title:"Music Player",description:"Designed by Tia",author:"@EasonChiang7178"}}}}},244:function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS43MDkiIGhlaWdodD0iMjAuMTk3IiB2aWV3Qm94PSIwIDAgMTUuNzA5IDIwLjE5NyI+PHBhdGggZD0iTTE1LjQ5LDkuNy43OTUuMDg1QS41MzIuNTMyLDAsMCwwLC4yNzEuMDU1LjQ3OC40NzgsMCwwLDAsMCwuNDhWMTkuNzE3YS40NzkuNDc5LDAsMCwwLC4yNzEuNDI2LjUzMS41MzEsMCwwLDAsLjUyMy0uMDNsMTQuNy05LjYxOGEuNDY3LjQ2NywwLDAsMCwwLS43OTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjZmZmIi8+PC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-list-js-fc9e33c06caf4be80708.js.map