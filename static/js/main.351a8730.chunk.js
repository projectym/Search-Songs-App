(this.webpackJsonpsearchsongs=this.webpackJsonpsearchsongs||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),i=s(5),r=s.n(i),l=(s(12),s(13),s(2)),o=(s(14),s(4)),j=s.n(o),d=s(6),b=function(){var e=Object(n.useContext)(f),t=e.isMobile,s=e.menuOpen,a=e.setMenuOpen,i=e.isDark,r=e.setIsDark,l=function(){s&&a(!1)},o=function(e){r(e.target.checked)};Object(n.useEffect)((function(){return function(){a(!1)}}),[t,a]);var j=["GitHub Code","JSON Data"],d=["https://github.com/projectym/Search-Songs-App","https://raw.githubusercontent.com/projectym/Songs-Api/main/db.json"];return t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"my-navbar",children:[Object(c.jsx)("h4",{className:"icon",children:"pjT"}),Object(c.jsxs)("div",{className:"hamburger-div",onClick:function(){a(!s)},children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})]}),Object(c.jsxs)("div",{className:s?"mobile-side-container menu-open":"mobile-side-container",children:[Object(c.jsxs)("div",{className:"mobile-side-div",children:[Object(c.jsxs)("ul",{className:"links",children:[j.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:d[t],children:e})},e)})),Object(c.jsx)("li",{children:Object(c.jsx)("div",{className:"switch",children:Object(c.jsxs)("label",{children:["Dark Mode",Object(c.jsx)("input",{type:"checkbox",checked:i,onChange:o}),Object(c.jsx)("span",{className:"lever"})]})})},"switch")]}),Object(c.jsx)("button",{className:"close-button",onClick:l,children:"Close"})]}),Object(c.jsx)("div",{className:s?"close-div-open":"close-div",onClick:l})]})]}):Object(c.jsxs)("div",{className:"my-navbar",children:[Object(c.jsx)("h4",{className:"icon",children:"pjT"}),Object(c.jsxs)("ul",{className:"links",children:[j.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:d[t],children:e})},e)})),Object(c.jsx)("li",{children:Object(c.jsx)("div",{className:"switch",children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:i,onChange:o}),Object(c.jsx)("span",{className:"lever"}),"Dark"]})})},"switch")]})]})},u=function(){var e=Object(n.useContext)(f),t=e.loading,s=e.keys,a=e.setFilterKey,i=e.setFilterLead,r=function(e){switch(e.target.id){case"keys":a(e.target.value);break;case"leads":i(e.target.value)}},l=t?[]:s.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{className:"center",children:"Filter by"}),Object(c.jsx)("label",{htmlFor:"keys",children:"Key:"}),Object(c.jsxs)("select",{className:"browser-default",name:"keys",id:"keys",onChange:r,children:[Object(c.jsx)("option",{value:"",children:"All"}),l]}),Object(c.jsx)("label",{htmlFor:"leads",children:"Leaders:"}),Object(c.jsxs)("select",{className:"browser-default",name:"leads",id:"leads",onChange:r,children:[Object(c.jsx)("option",{value:"",children:"All"}),["Keith","Sis. Jackie","Sis. Jones","Tymbree"].map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))]})]})},h=function(e){var t=function(t){"sortBy"===t.target.name&&e.setSortBy(t.target.value),"ascDesc"===t.target.name&&e.setAscDesc(t.target.value)};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{className:"center",children:"Sort by"}),Object(c.jsxs)("div",{className:"flex-row asc-desc",children:[Object(c.jsxs)("div",{className:"radio-button width-30",children:[Object(c.jsx)("label",{htmlFor:"title",children:"Asc"}),Object(c.jsx)("input",{type:"radio",id:"asc",name:"ascDesc",value:"asc",onClick:t,defaultChecked:!0})]}),Object(c.jsxs)("div",{className:"radio-button width-30",children:[Object(c.jsx)("label",{htmlFor:"title",children:"Desc"}),Object(c.jsx)("input",{type:"radio",id:"desc",name:"ascDesc",value:"desc",onClick:t})]})]}),Object(c.jsxs)("div",{className:"radio-button",children:[Object(c.jsx)("label",{htmlFor:"title",children:"Title"}),Object(c.jsx)("input",{type:"radio",id:"title",name:"sortBy",value:"name",onClick:t,defaultChecked:!0})]}),Object(c.jsxs)("div",{className:"radio-button",children:[Object(c.jsx)("label",{htmlFor:"date",children:"Last Sung"}),Object(c.jsx)("input",{type:"radio",id:"date",name:"sortBy",value:"date",onClick:t})]}),Object(c.jsxs)("div",{className:"radio-button",children:[Object(c.jsx)("label",{htmlFor:"key",children:"Key"}),Object(c.jsx)("input",{type:"radio",id:"key",name:"sortBy",value:"key",onClick:t})]})]})},O=function(){var e=Object(n.useContext)(f),t=e.isMobile,s=e.showSettings,a=e.setSortBy,i=e.setAscDesc,r=e.setShowSettings;return Object(c.jsx)("div",{className:t?"settings-container-mobile":"settings-container",hidden:!s,children:Object(c.jsxs)("div",{className:"settings-div",children:[Object(c.jsx)(u,{}),Object(c.jsx)(h,{setSortBy:a,setAscDesc:i}),Object(c.jsx)("button",{onClick:function(){return r(!1)},hidden:!t,children:"Close"})]})})},x=function(e){var t=Object(n.useState)(""),s=Object(l.a)(t,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){e.setSearchVal(a)}),[e,a]),Object(c.jsxs)("div",{className:"search-component",children:[Object(c.jsx)("div",{className:"search-bar",children:Object(c.jsx)("input",{className:"browser-default",type:"text",name:"search",placeholder:"Search",value:a,onChange:function(e){i(e.target.value)}})}),Object(c.jsx)("button",{className:"clear-search",onClick:function(){return i("")},children:"Clear"}),Object(c.jsx)("button",{className:"settings-button",onClick:function(){return e.setShowSettings(!e.showSettings)},hidden:!e.isMobile,children:"Settings"})]})},m=function(){var e=Object(n.useContext)(f),t=e.setSearchVal,s=e.isMobile,a=e.showSettings,i=e.setShowSettings;return Object(c.jsxs)("div",{className:"top-div",children:[Object(c.jsx)("h2",{children:"Search Songs"}),Object(c.jsx)("p",{style:{padding:"0 10px"},children:"A React app made to search through, filter, and sort a list of songs. Deployed with GitHub."}),Object(c.jsx)(x,{setSearchVal:t,showSettings:a,setShowSettings:i,isMobile:s})]})},p=function(e){var t=e.song,s=t.name,n=t.lead,a=t.key,i=t.url,r=t.last_date_sung,l="https://projectym.net/songs/"+i,o=r?new Date(r+"T12:00:00Z").toDateString().slice(3):"";return Object(c.jsxs)("div",{className:"song-card",children:[Object(c.jsx)("h5",{children:s}),Object(c.jsxs)("p",{children:["Last Sung: ",o]}),Object(c.jsxs)("p",{children:[n?"Lead: ".concat(n," | "):""," Key: ",a," |  ",Object(c.jsx)("a",{href:l,children:"Lyrics"})]})]})},v=function(){var e=Object(n.useContext)(f),t=e.loading,s=e.sortResults,a=e.ascDesc,i=e.sortBy,r=e.songResults;return t?Object(c.jsx)("div",{className:"bottom-div",children:Object(c.jsx)("h4",{children:"Loading..."})}):Object(c.jsxs)("div",{className:"bottom-div",children:[s("name",a),"name"===i?null:s(i,a),r.length?r.map((function(e){return Object(c.jsx)(p,{song:e},e.id)})):Object(c.jsx)("h3",{className:"center",children:"No Results :("})]})},f=a.a.createContext(),g=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(!0),i=Object(l.a)(a,2),r=i[0],o=i[1],b=Object(n.useState)([]),u=Object(l.a)(b,2),h=u[0],O=u[1],x=Object(n.useState)([]),m=Object(l.a)(x,2),p=m[0],v=m[1];return s||function(){var e=Object(d.a)(j.a.mark((function e(){var t,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,fetch("https://raw.githubusercontent.com/projectym/Songs-Api/main/db.json");case 4:return t=e.sent,e.next=7,t.json();case 7:s=e.sent,O(s.Songs),v(s.Keys),o(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}()(),{loading:r,songs:h,keys:p}}(),t=e.loading,s=e.songs,a=e.keys,i=Object(n.useState)([]),r=Object(l.a)(i,2),o=r[0],u=r[1],h=Object(n.useState)(""),x=Object(l.a)(h,2),p=x[0],g=x[1],y=Object(n.useState)(""),S=Object(l.a)(y,2),k=S[0],N=S[1],C=Object(n.useState)("name"),w=Object(l.a)(C,2),D=w[0],A=w[1],F=Object(n.useState)("asc"),B=Object(l.a)(F,2),L=B[0],M=B[1],U=Object(n.useState)(""),E=Object(l.a)(U,2),K=E[0],R=E[1],_=Object(n.useState)(!1),J=Object(l.a)(_,2),T=J[0],V=J[1],I=Object(n.useState)(!0),z=Object(l.a)(I,2),G=z[0],H=z[1],P=Object(n.useState)(!1),W=Object(l.a)(P,2),Z=W[0],q=W[1],Q=Object(n.useState)(!1),X=Object(l.a)(Q,2),Y=X[0],$=X[1],ee=function(){var e=window.innerWidth;e>1e3&&T?(V(!1),H(!0)):e<=1e3&&!T&&(V(!0),H(!1))};return Object(n.useEffect)((function(){t||u(s)}),[s,t]),Object(n.useEffect)((function(){if(!t){var e=s.filter((function(e){return""!==p&&""!==k?e.key===p&&e.lead.includes(k):""!==p?e.key===p:""===k||e.lead.includes(k)}));""!==K&&function(){var t=K.toUpperCase().split(" "),s=t.indexOf("");s>-1&&t.splice(s,1);for(var c=function(s){e.length>0&&(e=e.filter((function(e){var c=e.name,n=e.lead,a=e.key;return!!c.toUpperCase().includes(t[s])||(!!n.toUpperCase().includes(t[s])||!!a.toUpperCase().includes(t[s]))})))},n=0;n<t.length;n++)c(n)}(),u(e)}}),[t,p,k,s,K]),Object(n.useEffect)((function(){return ee(),window.addEventListener("resize",ee),function(){window.removeEventListener("resize",ee)}})),Object(c.jsx)(f.Provider,{value:{loading:t,isMobile:T,showSettings:G,keys:a,setFilterKey:g,setFilterLead:N,setSortBy:A,setAscDesc:M,setShowSettings:H,sortBy:D,ascDesc:L,setSearchVal:R,sortResults:function(e,t){o&&o.sort((function(s,c){var n=1,a=-1;"desc"===t&&(n=-1,a=1);var i="",r="";return"key"===e?(i=s.key.toUpperCase(),r=c.key.toUpperCase()):"date"===e?(i=s.last_date_sung.toUpperCase(),r=c.last_date_sung.toUpperCase()):(i=s.name.toUpperCase(),r=c.name.toUpperCase()),i<r?a:i>r?n:0}))},songResults:o,menuOpen:Y,setMenuOpen:$,isDark:Z,setIsDark:q},children:Object(c.jsxs)("div",{className:function(){var e="App";return Z&&(e="App-dark"),T&&(Y||G)&&(e+=" fixed"),e}(),children:[Object(c.jsx)(b,{}),Object(c.jsxs)("div",{className:"app-content",children:[Object(c.jsx)(O,{}),Object(c.jsxs)("div",{className:T?"main-div-mobile":"main-div",children:[Object(c.jsx)(m,{}),Object(c.jsx)(v,{})]})]})]})})};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.351a8730.chunk.js.map