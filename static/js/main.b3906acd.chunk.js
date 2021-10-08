(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={input:"Filter_input__2r30Q"}},22:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=(n(22),"items/Add"),s="items/Remove",u="items/Filter",l=n(3),b=n.n(l),d=n(2),m=n(6),j=n.n(m),p=n(1);var f=Object(d.b)((function(t){var e=t.contacts,n=e.filter,a=e.items,c=n.toLowerCase();return{contacts:a.filter((function(t){return t.name.toLowerCase().includes(c)}))}}),(function(t){return{onDeleteContact:function(e){return t(function(t){return{type:s,payload:t}}(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsxs)("li",{className:j.a.item,children:[Object(p.jsx)("span",{className:j.a.name,children:"".concat(t.name,":")}),Object(p.jsx)("span",{className:j.a.number,children:t.number}),Object(p.jsx)("button",{type:"submit",className:j.a.button,onClick:function(){return n(t.name)},children:"Delete"})]},t.id)}))})})),h=n(14),O=n(7),v=n.n(O);var x=Object(d.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onAddContact:function(e,n){return t(function(t,e){return{type:i,payload:{id:b.a.generate(),name:t,number:e}}}(e,n))}}}))((function(t){var e=t.contacts,n=t.onAddContact,c=Object(a.useState)(""),r=Object(h.a)(c,2),o=r[0],i=r[1],s=Object(a.useState)(""),u=Object(h.a)(s,2),l=u[0],d=u[1],m=b.a.generate(),j=b.a.generate(),f=function(t){switch(t.target.name){case"name":i(t.target.value);break;case"number":d(t.target.value);break;default:return}};return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.find((function(t){return t.name.toLowerCase()===o.toLowerCase()}))?alert("".concat(o," is already in contacts")):n(o,l),i(""),d("")},className:v.a.wrap,children:[Object(p.jsxs)("label",{htmlFor:m,children:["Name",Object(p.jsx)("input",{className:v.a.input,onChange:f,value:o,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:m})]}),Object(p.jsxs)("label",{htmlFor:j,children:["Number",Object(p.jsx)("input",{className:v.a.input,onChange:f,value:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:j})]}),Object(p.jsx)("button",{type:"submit",className:v.a.button,children:"Add contact"})]})})),g=n(15),C=n.n(g);var _=Object(d.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onFilter:function(e){return t((n=e.target.value,{type:u,payload:n}));var n}}}))((function(t){var e=t.filter,n=t.onFilter,a=b.a.generate();return Object(p.jsxs)("label",{htmlFor:a,children:["Find contacts by name",Object(p.jsx)("input",{className:C.a.input,onChange:n,type:"text",value:e,id:a})]})}));n(36);function y(){return Object(p.jsxs)("div",{className:"wrap",children:[Object(p.jsx)("h1",{className:"title",children:"Phonebook"}),Object(p.jsx)(x,{}),Object(p.jsx)("h2",{className:"title",children:"Contacts"}),Object(p.jsx)(_,{}),Object(p.jsx)(f,{})]})}var F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))},w=n(17),N=n(5),A=n(16),L=Object(N.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case i:return[a].concat(Object(w.a)(t));case s:return t.filter((function(t){return t.name!==a}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;return n===u?a:t}}),k=Object(N.combineReducers)({contacts:L}),D=Object(N.createStore)(k,Object(A.composeWithDevTools)());o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(d.a,{store:D,children:Object(p.jsx)(y,{})})}),document.getElementById("root")),F()},6:function(t,e,n){t.exports={item:"ContactList_item__2sMbi",name:"ContactList_name__3GRis",button:"ContactList_button__3uj-o"}},7:function(t,e,n){t.exports={wrap:"ContactForm_wrap__3rKJW",input:"ContactForm_input__IOtZ3",button:"ContactForm_button__13nzu"}}},[[37,1,2]]]);
//# sourceMappingURL=main.b3906acd.chunk.js.map