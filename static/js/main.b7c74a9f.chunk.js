(this.webpackJsonprandom_string_generator=this.webpackJsonprandom_string_generator||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(5),a=n.n(s),l=(n(11),n(2)),i=(n(12),n(6)),b=n(3),o=n(1);var u=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(4),a=Object(l.a)(s,2),u=a[0],j=a[1],d=Object(c.useState)(!1),h=Object(l.a)(d,2),O=h[0],m=h[1],g=Object(c.useState)(!1),p=Object(l.a)(g,2),x=p[0],f=p[1],v=Object(c.useState)(!1),k=Object(l.a)(v,2),S=k[0],y=k[1],C=Object(c.useState)(!1),N=Object(l.a)(C,2),L=N[0],w=N[1],I=function(e){for(var t="",n=e.length,c=0;c<u;c++){var r=Math.round(Math.random()*n);t+=e.charAt(r)}return t},F=function(){return Object(b.b)("Please check at least one box.")};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b.a,{position:"top-center",reverseOrder:!1}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"header",children:"String Generator"}),Object(o.jsxs)("div",{className:"generator",children:[Object(o.jsx)("h3",{children:n}),Object(o.jsx)("button",{onClick:function(){""===n?b.b.error("No String has been generated."):(Object(b.b)("Copied to clipboard."),function(){var e=document.createElement("textarea");e.innerText=n,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()}())},className:"cpy-btn",children:Object(o.jsx)(i.a,{})})]}),Object(o.jsxs)("div",{className:"sub",children:[Object(o.jsx)("label",{for:"String-length",children:"String Length"}),Object(o.jsx)("input",{defaultValue:"StringLength",onChange:function(e){j(e.target.value)},type:"number",id:"String-length",name:"String-length",min:"4",max:"20"})]}),Object(o.jsxs)("div",{className:"sub",children:[Object(o.jsx)("label",{for:"uppercase-letters",children:"Include Uppercase Letters"}),Object(o.jsx)("input",{checked:O,onChange:function(e){return m(e.target.checked)},type:"checkbox",id:"uppercase-letters",name:"uppercase-letters",value:"uppercaseLetters"})]}),Object(o.jsxs)("div",{className:"sub",children:[Object(o.jsx)("label",{for:"lowercase-letters",children:"Include Lowercase Letters"}),Object(o.jsx)("input",{checked:x,onChange:function(e){return f(e.target.checked)},type:"checkbox",id:"lowercase-letters",name:"lowercase-letters",value:"lowercaseLetters"})]}),Object(o.jsxs)("div",{className:"sub",children:[Object(o.jsx)("label",{for:"numbers",children:"Include Numbers"}),Object(o.jsx)("input",{checked:S,onChange:function(e){return y(e.target.checked)},type:"checkbox",id:"numbers",name:"numbers",value:"number"})]}),Object(o.jsxs)("div",{className:"sub",children:[Object(o.jsx)("label",{for:"symbols",children:"Include Symbols"}),Object(o.jsx)("input",{checked:L,onChange:function(e){return w(e.target.checked)},type:"checkbox",id:"symbols",name:"symbols",value:"symbol"})]}),Object(o.jsx)("button",{onClick:function(){if(x||O||S||L){var e="";O&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),x&&(e+="abcdefghijklmnopqrstuvwxyz"),S&&(e+="0123456789"),L&&(e+="!'^+%&/()=?_#$\xbd\xa7{[]}|;:>\xf7`<.*-@\xe9"),r(I(e))}else F()},className:"generate-btn",children:Object(o.jsx)("p",{children:"Generate String"})})]})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.b7c74a9f.chunk.js.map