(this.webpackJsonpsearchsongs=this.webpackJsonpsearchsongs||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),o=n(3),a=n.n(o),i=(n(10),n(4)),d=function(e){var t=e.name,n=e.leader,s=e.songKey,r="https://projectym.net/songs/"+e.url;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("h5",{children:t}),Object(c.jsxs)("p",{children:["Lead: ",n,"  | Key: ",s," |  ",Object(c.jsx)("a",{href:r,children:"Lyrics"})]})]})},j=(n(11),function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){fetch("https://my-json-server.typicode.com/projectym/Songs-Api/db").then((function(e){return e.json()})).then((function(e){var t=e.Songs;r(t)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"top-div",children:[Object(c.jsx)("h1",{children:"Search Songs"}),Object(c.jsx)("p",{children:"A react app to search through songs using redux and custom api deployed by GitHub."})]}),Object(c.jsx)("div",{className:"bottom-div",children:n.map((function(e){return Object(c.jsx)(d,{name:e.name,leader:e.lead,songKey:e.key,url:e.url},e.id)}))})]})});a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.fa602fa6.chunk.js.map