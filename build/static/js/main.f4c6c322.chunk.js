(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{40:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=a(37),l=a(85),s=a(88),u=a(87),m=a(86),h=a(31),p=a(32),d=a.n(p),f=new function e(){var t=this;Object(h.a)(this,e),this.getSimilar=function(){return t.services.get("api/similar?info=1&q=Harry%20Potter&k=363390-Alejandr-H8ZN1837").then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},this.services=d.a.create({baseURL:"https://tastedive.com/",withCredentials:!0})};var v=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],i=g();return r.a.createElement("div",{className:"App"},r.a.createElement("form",{className:i.root},r.a.createElement(s.a,{fullWidth:!0,margin:"normal"},r.a.createElement(u.a,{id:"Search",label:"Search",value:a,onChange:function(e){var t=e.target;return c(t.value)}})),r.a.createElement(m.a,{variant:"contained",color:"secondary",onClick:function(){f.getSimilar()}},"Send")))},g=Object(l.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f4c6c322.chunk.js.map