(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(14),o=n.n(c),i=n(3),s=n(0),u=function(e){var t=e.content,n={width:"500px",height:"30px",backgroundColor:"green",display:"flex",justifyContent:"center",alignItems:"center"};return"Unable to update, contact no longer exists"===t&&(n={width:"500px",height:"30px",backgroundColor:"red",display:"flex",justifyContent:"center",alignItems:"center"}),Object(s.jsx)("div",{style:n,children:Object(s.jsx)("p",{style:{color:"white",fontSize:"1.2rem"},children:t})})},a=n(4),l=n.n(a),d="/api/persons/",j=function(){return l.a.get(d).then((function(e){return e.data}))},b={addPerson:function(e){return l.a.post(d,e).then(j)},getAll:j,removePerson:function(e){return l.a.delete(d+"/"+e).then(j)},updateNumber:function(e){return l.a.put(d+"/"+e.id,e).then(j).catch((function(e){return console.log(e),j()}))}},f=function(e){var t=e.persons,n=e.setPersons,c=e.existingNames,o=Object(r.useState)(""),a=Object(i.a)(o,2),l=a[0],d=a[1],j=Object(r.useState)(""),f=Object(i.a)(j,2),h=f[0],O=f[1],x=Object(r.useState)(!1),m=Object(i.a)(x,2),p=m[0],g=m[1],v=Object(r.useState)(!1),y=Object(i.a)(v,2),w=y[0],C=y[1],k=Object(r.useState)(""),S=Object(i.a)(k,2),A=S[0],N=S[1];return Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:l,onChange:function(e){d(e.target.value)}})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:h,onChange:function(e){O(e.target.value)}})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",onClick:function(){if(c.includes(l.toLowerCase())){if(t.some((function(e){return e.number===h})))alert("'".concat(l,"' is already added to the phonebook!"));else if(window.confirm("".concat(l," is already added to the phonebook. Would you like to replace the old phone number with the new one?"))){var e=t.find((function(e){return e.name===l}));e.number=h,b.updateNumber(e).then((function(e){t.length>e.length&&N(!0),n(e)})),console.log(A),!1===A?(C(!0),setTimeout((function(){C(!1)}),4e3)):setTimeout((function(){N(!1)}),5e3)}}else{var r={name:l,number:h};b.addPerson(r).then((function(e){n(e)})),g(!0),setTimeout((function(){g(!1)}),4e3)}},children:"add"})})]}),Object(s.jsxs)("div",{children:[!0===p?Object(s.jsx)(u,{content:"".concat(l," has been added")}):null,!0===w?Object(s.jsx)(u,{content:"Number has been changed to ".concat(h)}):null,!0===A?Object(s.jsx)(u,{content:"Unable to update, contact no longer exists"}):null]})]})},h=function(e){var t=e.persons,n=e.existingNames,c=e.setFilteredArray,o=Object(r.useState)(""),u=Object(i.a)(o,2),a=u[0],l=u[1],d=n.filter((function(e){return e.includes(a.toLowerCase())})),j=t.filter((function(e){return d.includes(e.name.toLowerCase())}));return Object(r.useEffect)((function(){c(j),""===a&&c([])}),[a,c]),Object(s.jsxs)("div",{children:["Filter contact list: ",Object(s.jsx)("input",{value:a,onChange:function(e){l(e.target.value)}})]})},O=function(e){var t=e.filteredArray,n=e.persons,r=e.setPersons,c=e.setFilteredArray,o=function(e){var o=e.id,i=e.name;window.confirm("Delete ".concat(i,"?"))&&(b.removePerson(o),r(n.filter((function(e){return e.id!==o}))),t.map((function(e){return e.id===o}))&&c(t.filter((function(e){return e.id!==o}))))};return Object(s.jsx)("ul",{children:t.length>0?t.map((function(e){return Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start"},children:[Object(s.jsxs)("li",{children:[e.name," - ",e.number]}),Object(s.jsx)("button",{onClick:function(){return o(e)},children:"delete"})]},e.name)})):n.map((function(e){return Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start"},children:[Object(s.jsxs)("li",{children:[e.name," - ",e.number]}),Object(s.jsx)("button",{onClick:function(){return o(e)},children:"remove"})]},e.name)}))})},x=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)([]),u=Object(i.a)(o,2),a=u[0],l=u[1],d=n.map((function(e){return e.name.toLowerCase()}));return Object(r.useEffect)((function(){b.getAll().then((function(e){c(e)}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(h,{persons:n,existingNames:d,setFilteredArray:l}),Object(s.jsx)("h2",{children:"Add New"}),Object(s.jsx)(f,{persons:n,setPersons:c,existingNames:d}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(O,{persons:n,setPersons:c,filteredArray:a,setFilteredArray:l})]})};o.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.8cfa4abc.chunk.js.map