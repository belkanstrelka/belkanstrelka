(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{317:function(e,t,n){__NEXT_REGISTER_PAGE("/about",function(){return e.exports=n(318),{page:e.exports.default}})},318:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=(n(5),n(82)),a=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,f(t).call(this,e))).state={loaded:!1},n}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){var e=this;this.timeoutId=setTimeout(function(){e.props.pageTransitionReadyToEnter(),e.setState({loaded:!0})},2e3)}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId)}},{key:"render",value:function(){return this.state.loaded?r.a.createElement("div",{className:"container bg-success page"},r.a.createElement("h1",null,"About us"),r.a.createElement("p",null,'Notice how a loading spinner showed up while my content was "loading"? Pretty neat, huh?'),r.a.createElement(a.a,{href:"/index"},r.a.createElement("a",{className:"btn btn-light"},"Go back home"))):null}}])&&c(n.prototype,i),u&&c(n,u),t}();p(b,"defaultProps",{pageTransitionReadyToEnter:function(){}}),p(b,"pageTransitionDelayEnter",!0),t.default=b}},[[317,1,0]]]);