(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Container_container__30YQU"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"Contacts_form__5jhyb",label:"Contacts_label__3VIJx",input:"Contacts_input__1yFsa",button:"Contacts_button__3V9Z1",item:"Contacts_item__1WMGC"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),o=(n(18),n(19),n(13)),i=n(4),l=n(5),u=n(7),b=n(6),h=n(10),d=n.n(h),j=n(11),m=n.n(j),p=n(0);var f=function(t){var e=t.children;return Object(p.jsx)("div",{className:m.a.container,children:e})},v=n(2),C=n.n(v);var O=function(t){var e=t.contacts,n=t.onDeleteContact,a=C.a.item;return Object(p.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(p.jsxs)("li",{className:a,children:[Object(p.jsxs)("span",{children:[c,": ",r]}),Object(p.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},x=n(12),g=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddNewContact(a,c),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=e.length>0&&n.length>0,c=C.a.label,r=C.a.input,s=C.a.form,o=C.a.button;return Object(p.jsxs)("form",{className:s,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:c,children:["Name",Object(p.jsx)("input",{className:r,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange,placeholder:" "})]}),Object(p.jsxs)("label",{className:c,children:["Number",Object(p.jsx)("input",{className:r,type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange,placeholder:" "})]}),Object(p.jsx)("button",{className:o,type:"submit",disabled:!a,children:"Add contact"})]})}}]),n}(a.Component);var _=function(t){var e=t.value,n=t.onChangeFilter,a=C.a.label,c=C.a.input;return Object(p.jsxs)("label",{className:a,children:["Filter contacts by name",Object(p.jsx)("input",{className:c,type:"text",value:e,onChange:n,placeholder:" "})]})},y=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addNewContact=function(e,n){var a=t.state.contacts,c={id:d.a.generate(),name:e,number:n};a.map((function(t){return t.name})).includes(e)?alert("".concat(e," is already in contacts")):t.setState((function(t){return{contacts:[c].concat(Object(o.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){var n=e.currentTarget;t.setState({filter:n.value})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.value,e=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(p.jsxs)(f,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(g,{onAddNewContact:this.addNewContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(_,{value:t,onChangeFilter:this.changeFilter}),Object(p.jsx)(O,{contacts:n,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0822e300.chunk.js.map