(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,t,n){},20:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(15),s=n.n(o),r=(n(20),n(3)),i=n(0),u=function(e){var t=e.addPerson,n=e.handelNoChange,c=e.handelNameChange;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Add New No "}),Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{children:["Name:",Object(i.jsx)("input",{type:"text",name:"name",onChange:c})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{children:["Number:",Object(i.jsx)("input",{type:"text",name:"number",onChange:n})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"Add"})})]})]})},d=function(e){var t=e.handelFilterChange;return Object(i.jsxs)("div",{children:["filter shown with :",Object(i.jsx)("input",{onChange:t})]})},l=function(e){var t=e.persons,n=e.filter,c=e.deleteNo;return Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsxs)("div",{children:[e.name.toLocaleUpperCase().includes(n.toLocaleUpperCase())?"".concat(e.name," ").concat(e.number):"",Object(i.jsx)("button",{onClick:function(){return c(e.id)},children:"Delete"})]},e.id)}))})},j=n(4),h=n.n(j),b="http://localhost:3001/api/persons",f={getAllNo:function(){return h.a.get(b)},addNewNo:function(e){return h.a.post(b,e)},deleteNo:function(e){return h.a.delete("".concat("http://localhost:3001/api/delete","/").concat(e))},updateNo:function(e,t){return h.a.put("".concat(b,"/").concat(e),t)}},m=(n(14),function(e){var t=e.messages,n=t.type,c=t.message;return Object(i.jsx)("div",{className:n,children:c})}),p=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),s=Object(r.a)(o,2),j=s[0],h=s[1],b=Object(c.useState)(""),p=Object(r.a)(b,2),O=p[0],g=p[1],x=Object(c.useState)(""),v=Object(r.a)(x,2),N=v[0],y=v[1],w=Object(c.useState)({type:"",message:""}),C=Object(r.a)(w,2),S=C[0],k=C[1];Object(c.useEffect)((function(){f.getAllNo().then((function(e){a(e.data)}))}),[]);var A=function(e){return n.filter((function(t){return t.id===e}))},D=function(e){return n.filter((function(t){return t.name===e}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"PhoneBook"}),""===S.message?"":Object(i.jsx)(m,{messages:S}),Object(i.jsx)("p",{}),Object(i.jsx)(d,{handelFilterChange:function(e){y(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)(u,{addPerson:function(e){e.preventDefault(),n.filter((function(e){return e.name===j})).length>0?(window.confirm("".concat(j," is already in phone book wanna update the phone no"))&&(f.updateNo(D(j)[0].id,{name:j,number:O}).then(f.getAllNo).then((function(e){return a(e.data)})).then(k({type:"success",message:"".concat(j," has been updated Successfully")})),setTimeout((function(){k({type:"",message:""})}),3e3)),console.log(S)):(f.addNewNo({name:j,number:O}).then(f.getAllNo).then((function(e){return a(e.data)})).then(k({type:"success",message:"".concat(j," has been added Successfully")})),setTimeout((function(){k({type:"",message:""})}),3e3))},handelNoChange:function(e){g(e.target.value)},handelNameChange:function(e){h(e.target.value)}}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Numbers"}),Object(i.jsx)(l,{persons:n,deleteNo:function(e){window.confirm("Do You Really wanna delete ".concat(A(e)[0].name," "))&&(f.deleteNo(e).then((function(t){k({type:"success",message:"".concat(A(e)[0].name," is removed from server")})})).catch((function(t){k({type:"error",message:"".concat(A(e)[0].name," is not found in server")})})),setTimeout((function(){k({type:"",message:""})}),3e3))},filter:N})]})]})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d96578d3.chunk.js.map