(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={someClass:"Affairs_someClass__3MjAE",buttonFilter:"Affairs_buttonFilter__1AHFc",buttonClose:"Affairs_buttonClose__2AmJe",item:"Affairs_item__BVcl8",high:"Affairs_high__rLweM",middle:"Affairs_middle__2uBxK",low:"Affairs_low__7e8wd"}},function(e,a,t){e.exports={link:"Header_link__3Ypub",active:"Header_active__2Mo-j",block:"Header_block__yrZcl",header:"Header_header__3L5T0"}},,function(e,a,t){e.exports={message:"Message_message__2NXy_",text_area:"Message_text_area__2Xmlv",angle:"Message_angle__2nu3C",text_message:"Message_text_message__LB7xj",name_user:"Message_name_user__25S8G",time:"Message_time__1EvaN"}},,,,,function(e,a,t){e.exports={someClass:"Greeting_someClass__17ZAN",error:"Greeting_error__Kzur9",buttonAdd:"Greeting_buttonAdd__1Uy4h"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3FUHx",errorInput:"SuperInputText_errorInput__XCJBM",error:"SuperInputText_error__HMUdk",inputBar:"SuperInputText_inputBar__qaJMQ"}},,function(e,a,t){e.exports={blue:"HW4_blue__3MCFx",column:"HW4_column__1E10T",testSpanError:"HW4_testSpanError__VkR3i"}},function(e,a,t){e.exports={default:"SuperButton_default__h9KYy",red:"SuperButton_red__2zGVs"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3klYi",spanClassName:"SuperCheckbox_spanClassName__kYHOa"}},function(e,a,t){e.exports={select:"SuperSelect_select__3mEoC",option:"SuperSelect_option__3R4lo"}},function(e,a,t){e.exports={radio:"SuperRadio_radio__1n_wA",label:"SuperRadio_label__2Semg"}},,,,,,,function(e,a,t){e.exports={App:"App_App__YsLhb"}},function(e,a,t){e.exports={span:"SuperEditableSpan_span__83bCM"}},function(e,a,t){e.exports={item:"HW8_item__VnG-B"}},,function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),o=(t(37),t(28)),u=t.n(o),s=t(8),i=t(1),m=t(9),d=t.n(m);var E=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",{className:d.a.angle}),r.a.createElement("div",{className:d.a.text_area},r.a.createElement("div",{className:d.a.name_user},e.name," "),r.a.createElement("div",{className:d.a.text_message}," ",e.message),r.a.createElement("div",{className:d.a.time},e.time)))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",f="some text",h="22:00";var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:p,name:_,message:f,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(2),g=t(6),C=t.n(g);var k=function(e){var a=C.a.item+" "+C.a[e.affair.priority];return r.a.createElement("div",{className:C.a.affair},r.a.createElement("span",{className:C.a.item},e.affair.name),r.a.createElement("span",{className:a},"[",e.affair.priority,"]"),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:C.a.buttonClose},"X"))};var N=function(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t=function(a){return C.a.buttonFilter+(e.filter===a?" "+C.a.buttonFilter:"")};return r.a.createElement("div",{className:C.a.someClass},r.a.createElement("div",null," ",a),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:t("all")},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:t("high")},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:t("middle")},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:t("low")},"Low")))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"},{_id:6,name:"porn",priority:"low"}];var x=function(){var e=Object(n.useState)(O),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(b.a)(c,2),u=o[0],s=o[1],i=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return O.filter((function(e){return e._id!==a}))}(0,e))},filter:u}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=t(13),j=t(14),S=t.n(j),w=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.onEnter,o=e.totalUsers,u=l?S.a.error:"";return r.a.createElement("div",{className:S.a.someClass},r.a.createElement("input",{value:a,onChange:t,className:u,onKeyDown:c,onBlur:t}),r.a.createElement("button",{onClick:n,className:S.a.buttonAdd},"add"),r.a.createElement("span",null,o),r.a.createElement("div",null,l&&"Error!"))},A=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(b.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(!1),i=Object(b.a)(s,2),m=i[0],d=i[1],E=function(){var e=o.trim();e?(t(e),alert("Hello ".concat(e," !"))):d(!0),u("")};var p=a.length;return r.a.createElement(w,{name:o,setNameCallback:function(e){d(!1),u(e.currentTarget.value),""===e.currentTarget.value&&d(!0)},addUser:E,error:m,totalUsers:p,onEnter:function(e){"Enter"===e.key&&E()}})},F=t(45);var T=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(A,{users:t,addUserCallback:function(e){var a={_id:Object(F.a)(),name:e};l([a].concat(Object(y.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},B=t(3),M=t(15),H=t.n(M),I=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),u=Object(B.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(H.a.error," ").concat(o||""),i="".concat(c?H.a.errorInput:H.a.inputBar);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:i,placeholder:"Enter some text"},u)),c&&r.a.createElement("span",{className:s},c),r.a.createElement("br",null))},J=t(17),P=t.n(J),U=t(18),W=t.n(U),G=function(e){var a=e.red,t=e.className,n=Object(B.a)(e,["red","className"]),l="".concat(a?W.a.red:W.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},K=t(19),Y=t.n(K),L=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(B.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Y.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:Y.a.spanClassName},l))};var R=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),s=Object(b.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:P.a.column},r.a.createElement(I,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(I,{className:P.a.blue}),r.a.createElement(G,null,"default"),r.a.createElement(G,{red:!0,onClick:o},"delete "),r.a.createElement(G,{disabled:!0},"disabled"),r.a.createElement(L,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(L,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},X=t(29),D=t.n(X),V=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(B.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(b.a)(o,2),s=u[0],i=u[1],m=l||{},d=m.children,E=m.onDoubleClick,p=m.className,_=Object(B.a)(m,["children","onDoubleClick","className"]),f="".concat(D.a.span," ").concat(p);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(I,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),a&&a(e)},onEnter:function(){i(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),E&&E(e)},className:f},_),d||c.value," \ud83d\udd89"))};function z(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function Z(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}z("test",{x:"A",y:1});Z("test",{x:"",y:0});var q=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(V,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(G,{onClick:function(){z("editable-span-value",t)}},"save"),r.a.createElement(G,{onClick:function(){l(Z("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Q=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(x,null),r.a.createElement(T,null),r.a.createElement(R,null),r.a.createElement(q,null))};var $=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},ee=t(20),ae=t.n(ee),te=function(e){var a=e.options,t=e.className,n=e.onChange,l=e.onChangeOption,c=Object(B.a)(e,["options","className","onChange","onChangeOption"]),o=a?a.map((function(e,a){return r.a.createElement("option",{className:ae.a.option,key:e+"-"+a,value:e},e)})):[],u=ae.a.select+(t?""+t:"");return r.a.createElement("select",Object.assign({className:u,onChange:function(e){n&&n(e),l&&l(e.currentTarget.value)}},c),o)},ne=t(21),re=t.n(ne),le=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=Object(B.a)(e,["type","name","options","value","onChange","onChangeOption"]),u=function(e){l&&l(e),c&&c(e.currentTarget.value)},s=re.a.radio,i=t?t.map((function(e,t){return r.a.createElement("label",{className:re.a.label,key:a+"-"+t},r.a.createElement("input",Object.assign({className:s,type:"radio",name:a,checked:e===n,value:e,onChange:u},o)),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},ce=["x","y","z"];var oe=function(){var e=Object(n.useState)(ce[1]),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(te,{options:ce,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(le,{name:"radio",options:ce,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ue=t(30),se=t.n(ue),ie=function(e,a){switch(a.type){case"sort":var t=Object(y.a)(e);return t.sort((function(e,a){return e.name>a.name?-1:e.name<a.name?1:0})),"up"===a.payload?t:t.reverse();case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},me=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var de=function(){var e=Object(n.useState)(me),a=Object(b.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id,className:se.a.item},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("span",null,r.a.createElement(G,{onClick:function(){return l(ie(me,{type:"sort",payload:"up"}))}},"up")),r.a.createElement("span",null,r.a.createElement(G,{onClick:function(){return l(ie(me,{type:"sort",payload:"down"}))}},"down")),r.a.createElement("span",null,r.a.createElement(G,{onClick:function(){return l(ie(me,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement(oe,null),r.a.createElement(de,null))};var pe=function(){return r.a.createElement("div",null,"11-...")},_e="/pre-junior",fe="/junior",he="/junior+";var ve=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,render:function(){return r.a.createElement(i.a,{to:_e})}}),r.a.createElement(i.b,{path:_e,render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(i.b,{path:fe,render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(i.b,{path:he,render:function(){return r.a.createElement(pe,null)}}),"// add routes",r.a.createElement(i.b,{render:function(){return r.a.createElement($,null)}})))},be=t(7),ge=t.n(be);var Ce=function(){return r.a.createElement("div",{className:ge.a.header},r.a.createElement(s.b,{to:_e,className:ge.a.link,activeClassName:ge.a.active},"PreJunior"),r.a.createElement(s.b,{to:fe,className:ge.a.link,activeClassName:ge.a.active},"Junior"),r.a.createElement(s.b,{to:he,className:ge.a.link,activeClassName:ge.a.active},"Junior+"),r.a.createElement("div",{className:ge.a.block}))};var ke=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(Ce,null),r.a.createElement(ve,null)))};var Ne=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.438b7710.chunk.js.map