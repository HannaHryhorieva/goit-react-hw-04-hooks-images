(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(4),r=n.n(o),i=(n(15),n(9)),s=n(3),u=n(6),l=(n(16),n(17),n(18),n(1));function j(e){var t=e.id,n=e.urlImage,c=e.tagImage,a=e.onClick;return Object(l.jsx)("li",{className:"ImageGalleryItem",onClick:a,children:Object(l.jsx)("img",{id:t,src:n,alt:c,className:"ImageGalleryItem-image"})})}function b(e){var t=e.images,n=e.onClick;return Object(l.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(l.jsx)(j,{id:e.id,urlImage:e.webformatURL,tagImage:e.tags,onClick:n},e.id)}))})}function m(e){var t=e.onClick;return Object(l.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more"})}function d(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),o=a[0],r=a[1];return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{className:"SearchForm",onSubmit:function(e){if(e.preventDefault(),""===o.trim())return u.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441!");t(o.toLowerCase()),r("")},children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{className:"SearchForm-input",value:o,onChange:function(e){r(e.target.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var f=n(10),h=n.n(f),g=document.querySelector("#modal-root");function O(e){var t=e.imageUrl,n=e.tags,a=e.onClose;Object(c.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&a()};return Object(o.createPortal)(Object(l.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&a()},children:Object(l.jsx)("div",{className:"Modal",children:Object(l.jsx)("img",{src:t,alt:n,width:"1280",height:"auto"})})}),g)}function p(){var e=Object(c.useState)(1),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),r=Object(s.a)(o,2),j=r[0],f=r[1],g=Object(c.useState)([]),p=Object(s.a)(g,2),v=p[0],x=p[1],S=Object(c.useState)(!1),C=Object(s.a)(S,2),k=C[0],w=C[1],y=Object(c.useState)(!1),N=Object(s.a)(y,2),I=N[0],F=N[1],L=Object(c.useState)(""),E=Object(s.a)(L,2),T=E[0],G=E[1],P=Object(c.useState)("false"),U=Object(s.a)(P,2),B=U[0],q=U[1];Object(c.useEffect)((function(){""!==j&&(w(!0),setTimeout((function(){(function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=22463604-709d4d80ecefd06266ae1aa7f&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Image not found"))}))})(j,n).then((function(e){return x((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))}))})).catch((function(e){return u.b.error("".concat(e))})).finally(w(!1))}),1e3),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))}),[n,j]);var D=function(){F((function(e){return!e}))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{onSubmit:function(e){a(1),f(e)}}),Object(l.jsx)(h.a,{className:"Loader",visible:k,type:"Grid",color:"#3f51b5",height:200,width:200}),Object(l.jsx)(b,{images:v,onClick:function(e){D();var t=Number(e.target.id),n=v.find((function(e){return e.id===t}));G(n.largeImageURL),q(n.tags)}}),v.length>0&&Object(l.jsx)("div",{children:Object(l.jsx)(m,{onClick:function(){a((function(e){return e+1}))}})}),I&&Object(l.jsx)(O,{imageUrl:T,tags:B,onClose:D}),Object(l.jsx)(u.a,{autoClose:2e3})]})}var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),v()}},[[40,1,2]]]);
//# sourceMappingURL=main.60d75d1f.chunk.js.map