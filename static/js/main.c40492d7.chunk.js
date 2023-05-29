(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(8),d=c(2),r=c(1),i=(c(13),c(14),c(6)),o=c.n(i),j=c(0),u=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.completed,n=e.title;return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:t}),Object(j.jsx)("td",{className:"is-vcentered",children:a&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:o()({"has-text-success":a,"has-text-danger":!a}),children:n})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:o()("far",(null===c||void 0===c?void 0:c.id)===e.id?"fa-eye-slash":"fa-eye")})})})})]},t)}))})]})};!function(e){e.all="all",e.active="active",e.completed="completed"}(s||(s={}));var b=function(e){var t=e.searchBy,c=e.setSearchBy,a=e.setQuery,n=e.query;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return c(e.target.value)},children:[Object(j.jsx)("option",{value:s.all,children:"All"}),Object(j.jsx)("option",{value:s.active,children:"Active"}),Object(j.jsx)("option",{value:s.completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:n.length&&Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(r.useState)(null),a=Object(d.a)(s,2),n=a[0],l=a[1],i=t.id,o=t.userId,u=t.completed,b=t.title;return Object(r.useEffect)((function(){(function(e){return m("/users/".concat(e))})(o).then(l)}),[o]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),n?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(i)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:b}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[u?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(j.jsx)(h,{})]})},x=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(null),i=Object(d.a)(n,2),o=i[0],x=i[1],f=Object(r.useState)(s.all),p=Object(d.a)(f,2),v=p[0],N=p[1],y=Object(r.useState)(""),g=Object(d.a)(y,2),S=g[0],k=g[1],T=Object(r.useState)(!1),w=Object(d.a)(T,2),C=w[0],B=w[1],_=Object(r.useState)(!0),E=Object(d.a)(_,2),L=E[0],A=E[1],I=function(){return m("/todos").then((function(e){a(e),A(!1)})).catch((function(){B(!0),A(!1)}))};Object(r.useEffect)((function(){I()}),[]);var q=Object(r.useMemo)((function(){return function(e,t){var c=Object(l.a)(e);if(S){var a=S.toLowerCase().trim();c=c.filter((function(e){return e.title.toLowerCase().includes(a)}))}return c.filter((function(e){switch(t){case s.active:return!e.completed;case s.completed:return e.completed;case s.all:default:return e}}))}(c,v)}),[v,c,S]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{searchBy:v,setSearchBy:N,setQuery:k,query:S})}),L&&Object(j.jsx)(h,{}),C?Object(j.jsx)("p",{className:"has-text-danger",children:"An error occured when loading todos"}):Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(u,{todos:q,selectedTodo:o,setSelectedTodo:x})})]})})}),o&&Object(j.jsx)(O,{selectedTodo:o,setSelectedTodo:x})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c40492d7.chunk.js.map