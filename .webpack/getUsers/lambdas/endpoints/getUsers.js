!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const r=n(1);t.handler=async e=>{if(console.log("event",e),!e.pathParameters||!e.pathParameters.ID)return r._400({message:"missing the ID from the path"});let t=e.pathParameters.ID;return o[t]?r._200(o[t]):r._400({message:"no ID in data"})};const o={1234:{name:"Anna Jones",age:25,job:"journalist"},7893:{name:"Chris Smith",age:52,job:"teacher"},5132:{name:"Tom Hague",age:23,job:"plasterer"}}},function(e,t){const n={_200:(e={})=>({headers:{"Content-Type":"application/json","Access-Control-Allow-Methods":"*","Access-Control-Allow-Origin":"*"},statusCode:200,body:JSON.stringify(e)}),_400:(e={})=>({headers:{"Content-Type":"application/json","Access-Control-Allow-Methods":"*","Access-Control-Allow-Origin":"*"},statusCode:400,body:JSON.stringify(e)})};e.exports=n}]));