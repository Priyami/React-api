(window["webpackJsonpreact-api"]=window["webpackJsonpreact-api"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(2),r=n.n(l),c=(n(13),n(3)),i=n(4),m=n(6),d=n(5),s=n(7),u=function(e){var t=e.questions;console.log(t),console.log(t[0]);var n=JSON.parse(t);return console.log(n[0]),a.a.createElement("div",null,a.a.createElement("center",null,a.a.createElement("h1",null,"Questions")),a.a.createElement("table",{id:"tbl1"},a.a.createElement("tbody",null,a.a.createElement("tr",{id:"row1"},a.a.createElement("td",{id:"dd",bgcolor:"#FF0000"},"assasdasdadad                 "),a.a.createElement("td",{bgcolor:"#00FF00"},"second column"),a.a.createElement("td",{bgcolor:"#FF0000"},"first column"),a.a.createElement("td",{bgcolor:"#00FF00"},"second column"),a.a.createElement("td",{bgcolor:"#FF0000"},"first column")))),a.a.createElement("table",{id:"tbl1"},a.a.createElement("tbody",null,a.a.createElement("tr",{id:"row2"},a.a.createElement("td",{bgcolor:"#FF0000"},"first column"),a.a.createElement("td",{width:"313",bgcolor:"#ffffff"}),a.a.createElement("td",{bgcolor:"#FF0000"},"first column")))),a.a.createElement("table",{id:"tbl3"},a.a.createElement("tbody",null,a.a.createElement("tr",{id:"row3"},a.a.createElement("td",{bgcolor:"#FF0000"},"first column"),a.a.createElement("td",{width:"313",bgcolor:"#ffffff"}),a.a.createElement("td",{bgcolor:"#FF0000"},"first column")))),a.a.createElement("table",{id:"tbl4"},a.a.createElement("tbody",null,a.a.createElement("tr",{id:"row4"},a.a.createElement("td",{bgcolor:"#FF0000"},"first column"),a.a.createElement("td",{width:"313",bgcolor:"#ffffff"}),a.a.createElement("td",{bgcolor:"#FF0000"},"first column")))),a.a.createElement("table",{id:"tbl5"},a.a.createElement("tbody",null,a.a.createElement("tr",{id:"row5"},a.a.createElement("td",{bgcolor:"#FF0000"},"first column"),a.a.createElement("td",{bgcolor:"#00FF00"},"second column"),a.a.createElement("td",{bgcolor:"#FF0000"},"first column"),a.a.createElement("td",{bgcolor:"#00FF00"},"second column"),a.a.createElement("td",{bgcolor:"#FF0000"},"first column")))))},f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={questions:[]},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(u,{questions:this.state.questions})}},{key:"componentDidMount",value:function(){var e=this;fetch("./math.json").then(function(e){return e.json()}).then(function(t){e.setState({questions:t})}).catch(console.log)}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e4c09713.chunk.js.map