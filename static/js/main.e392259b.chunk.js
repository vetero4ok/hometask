(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={someClass:"Affairs_someClass__3MjAE",buttonFilter:"Affairs_buttonFilter__1AHFc",buttonClose:"Affairs_buttonClose__2AmJe",item:"Affairs_item__BVcl8",high:"Affairs_high__rLweM",middle:"Affairs_middle__2uBxK",low:"Affairs_low__7e8wd"}},,function(e,a,t){e.exports={link:"Header_link__3Ypub",active:"Header_active__2Mo-j",block:"Header_block__yrZcl",header:"Header_header__3L5T0"}},,function(e,a,t){e.exports={message:"Message_message__2NXy_",text_area:"Message_text_area__2Xmlv",angle:"Message_angle__2nu3C",text_message:"Message_text_message__LB7xj",name_user:"Message_name_user__25S8G",time:"Message_time__1EvaN"}},,,,function(e,a,t){e.exports={someClass:"Greeting_someClass__17ZAN",error:"Greeting_error__Kzur9",buttonAdd:"Greeting_buttonAdd__1Uy4h"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3FUHx",errorInput:"SuperInputText_errorInput__XCJBM",error:"SuperInputText_error__HMUdk",inputBar:"SuperInputText_inputBar__qaJMQ"}},,function(e,a,t){e.exports={blue:"HW4_blue__3MCFx",column:"HW4_column__1E10T",testSpanError:"HW4_testSpanError__VkR3i"}},function(e,a,t){e.exports={default:"SuperButton_default__h9KYy",red:"SuperButton_red__2zGVs"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3klYi",spanClassName:"SuperCheckbox_spanClassName__kYHOa"}},,,,,,,function(e,a,t){e.exports={App:"App_App__YsLhb"}},function(e,a,t){e.exports={span:"SuperEditableSpan_span__83bCM"}},,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(34),t(25)),s=t.n(o),u=t(8),i=t(1),m=t(9),d=t.n(m);var E=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",{className:d.a.angle}),r.a.createElement("div",{className:d.a.text_area},r.a.createElement("div",{className:d.a.name_user},e.name," "),r.a.createElement("div",{className:d.a.text_message}," ",e.message),r.a.createElement("div",{className:d.a.time},e.time)))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",p="some text",h="22:00";var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:_,name:f,message:p,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(2),g=t(5),C=t.n(g);var k=function(e){var a=C.a.item+" "+C.a[e.affair.priority];return r.a.createElement("div",{className:C.a.affair},r.a.createElement("span",{className:C.a.item},e.affair.name),r.a.createElement("span",{className:a},"[",e.affair.priority,"]"),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:C.a.buttonClose},"X"))};var N=function(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t=function(a){return C.a.buttonFilter+(e.filter===a?" "+C.a.buttonFilter:"")};return r.a.createElement("div",{className:C.a.someClass},r.a.createElement("div",null," ",a),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:t("all")},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:t("high")},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:t("middle")},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:t("low")},"Low")))},x=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"},{_id:6,name:"porn",priority:"low"}];var j=function(){var e=Object(n.useState)(x),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(b.a)(c,2),s=o[0],u=o[1],i=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return x.filter((function(e){return e._id!==a}))}(0,e))},filter:s}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=t(28),S=t(13),y=t.n(S),w=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.onEnter,o=e.totalUsers,s=l?y.a.error:"";return r.a.createElement("div",{className:y.a.someClass},r.a.createElement("input",{value:a,onChange:t,className:s,onKeyDown:c,onBlur:t}),r.a.createElement("button",{onClick:n,className:y.a.buttonAdd},"add"),r.a.createElement("span",null,o),r.a.createElement("div",null,l&&"Error!"))},A=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(b.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(!1),i=Object(b.a)(u,2),m=i[0],d=i[1],E=function(){var e=o.trim();e?(t(e),alert("Hello ".concat(e," !"))):d(!0),s("")};var _=a.length;return r.a.createElement(w,{name:o,setNameCallback:function(e){d(!1),s(e.currentTarget.value),""===e.currentTarget.value&&d(!0)},addUser:E,error:m,totalUsers:_,onEnter:function(e){"Enter"===e.key&&E()}})},F=t(42);var B=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(A,{users:t,addUserCallback:function(e){var a={_id:Object(F.a)(),name:e};l([a].concat(Object(O.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},M=t(6),T=t(14),H=t.n(T),I=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),s=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(H.a.error," ").concat(o||""),i="".concat(c?H.a.errorInput:H.a.inputBar);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:i,placeholder:"Enter some text"},s)),c&&r.a.createElement("span",{className:u},c),r.a.createElement("br",null))},J=t(16),P=t.n(J),U=t(17),K=t.n(U),W=function(e){var a=e.red,t=e.className,n=Object(M.a)(e,["red","className"]),l="".concat(a?K.a.red:K.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},G=t(18),Y=t.n(G),L=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Y.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:Y.a.spanClassName},l))};var X=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(b.a)(s,2),i=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:P.a.column},r.a.createElement(I,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(I,{className:P.a.blue}),r.a.createElement(W,null,"default"),r.a.createElement(W,{red:!0,onClick:o},"delete "),r.a.createElement(W,{disabled:!0},"disabled"),r.a.createElement(L,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(L,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},D=t(26),V=t.n(D),Z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(M.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(b.a)(o,2),u=s[0],i=s[1],m=l||{},d=m.children,E=m.onDoubleClick,_=m.className,f=Object(M.a)(m,["children","onDoubleClick","className"]),p="".concat(V.a.span," ").concat(_);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(I,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),a&&a(e)},onEnter:function(){i(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),E&&E(e)},className:p},f),d||c.value," \ud83d\udd89"))};function q(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function z(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}q("test",{x:"A",y:1});z("test",{x:"",y:0});var R=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(Z,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(W,{onClick:function(){q("editable-span-value",t)}},"save"),r.a.createElement(W,{onClick:function(){l(z("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Q=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(j,null),r.a.createElement(B,null),r.a.createElement(X,null),r.a.createElement(R,null))};var $=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var ee=function(){return r.a.createElement("div",null,"6-10")};var ae=function(){return r.a.createElement("div",null,"11-...")},te="/pre-junior",ne="/junior",re="/junior+";var le=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,render:function(){return r.a.createElement(i.a,{to:te})}}),r.a.createElement(i.b,{path:te,render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(i.b,{path:ne,render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(i.b,{path:re,render:function(){return r.a.createElement(ae,null)}}),"// add routes",r.a.createElement(i.b,{render:function(){return r.a.createElement($,null)}})))},ce=t(7),oe=t.n(ce);var se=function(){return r.a.createElement("div",{className:oe.a.header},r.a.createElement(u.b,{to:te,className:oe.a.link,activeClassName:oe.a.active},"PreJunior"),r.a.createElement(u.b,{to:ne,className:oe.a.link,activeClassName:oe.a.active},"Junior"),r.a.createElement(u.b,{to:re,className:oe.a.link,activeClassName:oe.a.active},"Junior+"),r.a.createElement("div",{className:oe.a.block}))};var ue=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(se,null),r.a.createElement(le,null)))};var ie=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.e392259b.chunk.js.map