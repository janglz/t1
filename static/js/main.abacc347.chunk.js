(this["webpackJsonptodo-courses"]=this["webpackJsonptodo-courses"]||[]).push([[0],[,,,,function(e,t,n){e.exports={menu:"Menu_menu__1wQ3F",content:"Menu_content__T8_Sd",list__item:"Menu_list__item__1k-C_",icon:"Menu_icon__2rkPI",btn__transparent:"Menu_btn__transparent__3mcXj",selected:"Menu_selected__kxwBt"}},function(e,t,n){e.exports={"content__item-img":"Card_content__item-img__1NNwG","content__item-value":"Card_content__item-value__29z3W",section:"Card_section__25Kwc",container:"Card_container__3BCzV",content:"Card_content__3Ie1M",image:"Card_image__3KnJq",content__inner:"Card_content__inner__r3yTY",content__title:"Card_content__title__3c_5h",content__description:"Card_content__description__1Bpn9",btn__div:"Card_btn__div__1tbAe",icon:"Card_icon__19dNt",red:"Card_red__1aEr2",like:"Card_like__1QDJR",black:"Card_black__3ohud",dislike:"Card_dislike__GVDB9"}},,,function(e,t,n){e.exports={menu:"SearchPanel_menu__3Wunx",search:"SearchPanel_search__p9Fcg",searchIcon:"SearchPanel_searchIcon__2-RQH",form:"SearchPanel_form__2aRtr",filterIcon:"SearchPanel_filterIcon__8unf0",navbar:"SearchPanel_navbar__2GnEF",content:"SearchPanel_content__2TZXE"}},,function(e,t,n){e.exports={header:"Header_header__1VCKf",container:"Header_container__1VC87","header-navbar":"Header_header-navbar__341Uy","navbar-brand":"Header_navbar-brand__3HpHi","brand-icon":"Header_brand-icon__3Avos",navbar:"Header_navbar__3zH7f",content:"Header_content__1rjeP"}},,,function(e,t,n){e.exports={"main-favorites":"List_main-favorites__35IJ0",icon:"List_icon__26k2j",contentItem:"List_contentItem__2WIUE",itemImg:"List_itemImg__3Lcbk",value:"List_value__18BRp"}},,function(e,t,n){e.exports={wrapper:"App_wrapper__1sTAm",main:"App_main__cNih0"}},,function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=17},function(e,t){},,,,,,function(e){e.exports=JSON.parse("{}")},function(e){e.exports=JSON.parse("{}")},,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(19),i=n.n(c),s=n(2),o=(n(24),n(25),n(3)),l=n.n(o),u=n(7);function _(e,t){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.github.com/".concat(t),e.next=3,fetch(a).then(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(){}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(u.a)(l.a.mark((function e(){var t,n,a,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,_("users",t);case 3:return n=e.sent,a=n.map((function(e){return{login:e.login,description:e.description,avatarUrl:e.avatar_url,inFavorites:!1,orgaznizationsUrl:e.organizations_url,type:"user"}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(u.a)(l.a.mark((function e(){var t,n,a,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,_("organizations",t);case 3:return n=e.sent,a=n.map((function(e){return{login:e.login,description:e.description,avatarUrl:e.avatar_url,inFavorites:!1,type:"organization"}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=Object(a.createContext)(null);var p=n(10),v=n.n(p),m=n.p+"static/media/logo.98fa2318.svg",O=n(9),h=n.n(O),x=n(0);function g(){var e=Object(a.useContext)(f);e.setPage,e.setCard;return Object(x.jsx)("header",{className:v.a.header,children:Object(x.jsx)("div",{className:v.a.container,children:Object(x.jsx)("div",{className:v.a["header-navbar"],children:Object(x.jsx)("a",{className:v.a["navbar-brand"],href:"#",children:Object(x.jsx)("img",{src:m,id:"logo",className:v.a["brand-icon"]})})})})})}var N,C=n(6),w=n(4),y=n.n(w),k=["title","titleId"];function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function I(e,t){var n=e.title,r=e.titleId,c=S(e,k);return a.createElement("svg",z({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485",style:{enableBackground:"new 0 0 485 485"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,N||(N=a.createElement("g",null,a.createElement("path",{d:"M343.611,22.543c-22.613,0-44.227,5.184-64.238,15.409c-13.622,6.959-26.136,16.205-36.873,27.175 c-10.738-10.97-23.251-20.216-36.873-27.175c-20.012-10.225-41.625-15.409-64.239-15.409C63.427,22.543,0,85.97,0,163.932 c0,55.219,29.163,113.866,86.678,174.314c48.022,50.471,106.816,92.543,147.681,118.95l8.141,5.261l8.141-5.261 c40.865-26.406,99.659-68.479,147.682-118.95C455.838,277.798,485,219.151,485,163.932C485,85.97,421.573,22.543,343.611,22.543z  M376.589,317.566c-42.918,45.106-95.196,83.452-134.089,109.116c-38.893-25.665-91.171-64.01-134.088-109.116 C56.381,262.884,30,211.194,30,163.932c0-61.42,49.969-111.389,111.389-111.389c35.361,0,67.844,16.243,89.118,44.563 l11.993,15.965l11.993-15.965c21.274-28.32,53.757-44.563,89.118-44.563c61.42,0,111.389,49.969,111.389,111.389 C455,211.194,428.618,262.884,376.589,317.566z"}))))}var F=a.forwardRef(I);n.p;function P(e,t){var n=Object(a.useState)((function(){var n=localStorage.getItem(e);if(!n)return t;try{return JSON.parse(n)}catch(a){return t}})),r=Object(s.a)(n,2),c=r[0],i=r[1];return[c,function(t){localStorage.setItem(e,JSON.stringify(t)),i(t)}]}var U=function(){return j.apply(this,arguments)}(),E=function(){return b.apply(this,arguments)}();function H(){var e=Object(a.useContext)(f),t=e.users,n=e.page,r=e.setPage,c=e.setUsers,i=e.setOrganizations,o=e.organizations,_=e.setCard,d=e.favorites,j=e.setFavorites,b=P("favorites",d),p=Object(s.a)(b,2),v=p[0],m=(p[1],P("users",t)),O=Object(s.a)(m,2),g=O[0],N=(O[1],P("organizations",o)),w=Object(s.a)(N,2),k=w[0];w[1];Object(a.useEffect)((function(){c([].concat(Object(C.a)(g.filter((function(e){return!t.some((function(t){return t.login===e.login}))}))),Object(C.a)(t))),i([].concat(Object(C.a)(k.filter((function(e){return!o.some((function(t){return t.login===e.login}))}))),Object(C.a)(o))),j([].concat(Object(C.a)(v.filter((function(e){return!d.some((function(t){return t.login===e.login}))}))),Object(C.a)(d)))}),[]);var z=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(null),r("organizations"),e.next=4,E;case 4:t=e.sent,n=[].concat(Object(C.a)(t.filter((function(e){return!o.some((function(t){return t.login===e.login}))}))),Object(C.a)(o)),i(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(null),r("users"),e.next=4,U;case 4:n=e.sent,a=[].concat(Object(C.a)(n.filter((function(e){return!t.some((function(t){return t.login===e.login}))}))),Object(C.a)(t)),c(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();h.a.bind(y.a);return Object(x.jsx)("aside",{className:y.a.menu,children:Object(x.jsxs)("ul",{className:y.a.content,children:[Object(x.jsx)("li",{className:y.a.list__item,children:Object(x.jsxs)("button",{className:h()(y.a.btn__transparent,"favorites"===n&&y.a.selected),onClick:function(){return _(null),void r("favorites")},children:["\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",Object(x.jsx)(F,{className:y.a.icon})]})}),Object(x.jsx)("li",{className:y.a.list__item,children:Object(x.jsx)("button",{className:h()(y.a.btn__transparent,"users"===n&&y.a.selected),onClick:function(){return S()},children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(x.jsx)("li",{className:y.a.list__item,children:Object(x.jsx)("button",{className:h()(y.a.btn__transparent,"organizations"===n&&y.a.selected),onClick:function(){return z()},children:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"})})]})})}var M=n(8),J=n.n(M),B=n.p+"static/media/filter.e1d29bd3.svg",L=n.p+"static/media/search.28b0ad10.svg",T=n(13),A=n.n(T);function D(e){var t=e.filtered,n=Object(a.useContext)(f).setCard;return(null===t||void 0===t?void 0:t.length)>0&&t.map((function(e){return Object(x.jsxs)("li",{className:A.a.contentItem,onClick:function(){return n(e)},children:[Object(x.jsx)("div",{className:A.a.itemImg,children:Object(x.jsx)("img",{src:e.avatarUrl})}),Object(x.jsxs)("div",{className:A.a.value,children:[Object(x.jsx)("h4",{className:"main-cotent__item-title",children:e.login}),Object(x.jsx)("p",{className:"main-cotent__item-text",children:e.type})]}),Object(x.jsx)("span",{className:A.a.icon,children:e.inFavorites&&Object(x.jsx)(F,{})})]},e.login)}))}function R(){var e,t=Object(a.useContext)(f),n=t.page,r=t.organizations,c=t.users,i=t.favorites,o=(t.setCard,P("favorites",i)),l=Object(s.a)(o,2),u=(l[0],l[1],Object(a.useState)("")),_=Object(s.a)(u,2),d=_[0],j=_[1];e=function(e){switch(e){case"users":return c;case"organizations":return r;case"favorites":return d&&i?i.filter((function(e){var t,n;return(null===e||void 0===e||null===(t=e.login)||void 0===t?void 0:t.includes(d))||(null===e||void 0===e||null===(n=e.description)||void 0===n?void 0:n.includes(d))})):i;default:return}}(n);return n&&Object(x.jsxs)("aside",{className:J.a.menu,children:["favorites"===n&&Object(x.jsxs)("div",{className:J.a.search,children:[Object(x.jsx)("span",{className:J.a.searchIcon,children:Object(x.jsx)("img",{src:L,id:"search",className:J.a.searchIcon})}),Object(x.jsx)("form",{className:J.a.form,action:"#",method:"GET",onSubmit:function(e){return e.preventDefault()},children:Object(x.jsx)("input",{type:"search",id:"search",placeholder:"\u041d\u0430\u0439\u0442\u0438...",value:d,onChange:function(e){return t=e.target.value,void j(t);var t},autoFocus:!0,autoComplete:"off"})}),Object(x.jsx)("span",{className:J.a.filter,children:Object(x.jsx)("img",{src:B,id:"filter",className:J.a.filterIcon})})]}),Object(x.jsx)("nav",{className:J.a.navbar,children:Object(x.jsx)("ul",{className:J.a.content,children:Object(x.jsx)(D,{filtered:e})})})]})}var G=n(11),V=n(5),K=n.n(V);n(28);function Q(){var e=Object(a.useContext)(f),t=e.card,n=e.setCard,r=e.users,c=e.setUsers,i=e.organizations,o=e.setOrganizations,l=(e.page,e.favorites),u=e.setFavorites,_=P("favorites",l),d=Object(s.a)(_,2),j=(d[0],d[1]),b=P("users",r),p=Object(s.a)(b,2),v=(p[0],p[1]),m=P("organizations",i),O=Object(s.a)(m,2),g=(O[0],O[1]),N=function(e){return e.map((function(e){return e.login===t.login?Object(G.a)(Object(G.a)({},e),{},{inFavorites:!e.inFavorites}):e}))},w=function(){var e=Object(G.a)(Object(G.a)({},t),{},{inFavorites:!t.inFavorites});if(n(e),"user"===t.type){var a=N(r)||r;c(a),v(a)}if("organization"===t.type){var s=N(i)||i;o(s),g(s)}var _=l?l.some((function(e){return e.login===t.login}))?l.filter((function(e){return e.login!==t.login})):[].concat(Object(C.a)(l),[t]):[Object(G.a)({},t)];_.map((function(e){return e.inFavorites=!0})),u(_),j(_)},y=h()(K.a.btn__div,(null===t||void 0===t?void 0:t.inFavorites)?K.a.red:K.a.black);return t&&Object(x.jsx)("section",{className:K.a.section,children:Object(x.jsx)("div",{className:K.a.container,children:Object(x.jsxs)("div",{className:K.a.content,children:[Object(x.jsx)("div",{className:K.a.image,children:Object(x.jsx)("img",{src:t.avatarUrl})}),Object(x.jsxs)("div",{className:K.a.content__inner,children:[Object(x.jsx)("h1",{className:K.a.content__title,children:t.login}),Object(x.jsx)("p",{className:K.a.content__description,children:t.description}),t.orgaznizationsUrl&&Object(x.jsx)("p",{className:K.a.content__description,children:"\u0421\u043e\u0441\u0442\u043e\u0438\u0442 \u0432 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f\u0445:"}),t.orgaznizationsUrl&&Object(x.jsx)("p",{className:K.a.content__description,children:t.orgaznizationsUrl})]}),Object(x.jsx)("div",{className:y,children:Object(x.jsx)("button",{children:Object(x.jsx)("div",{className:K.a.icon,onClick:function(){return w()},children:Object(x.jsx)(F,{})})})})]})})})}var W=n(15),X=n.n(W);var q=function(){var e=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(s.a)(c,2),o=i[0],l=i[1],u=Object(a.useState)([]),_=Object(s.a)(u,2),d=_[0],j=_[1],b=Object(a.useState)(null),f=Object(s.a)(b,2),p=f[0],v=f[1],m=Object(a.useState)(null),O=Object(s.a)(m,2);return{page:p,setPage:v,users:n,setUsers:r,organizations:o,setOrganizations:l,favorites:d,setFavorites:j,card:O[0],setCard:O[1]}}();return Object(x.jsxs)(f.Provider,{value:e,children:[Object(x.jsx)("div",{className:X.a.wrapper,children:Object(x.jsx)(g,{})}),Object(x.jsx)("div",{className:X.a.wrapper,children:Object(x.jsxs)("main",{className:X.a.main,children:[Object(x.jsx)(H,{}),Object(x.jsx)(R,{}),Object(x.jsx)(Q,{})]})})]})},Y=document.getElementById("root");n(37);i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(q,{})}),Y)}],[[38,1,2]]]);
//# sourceMappingURL=main.abacc347.chunk.js.map