(this["webpackJsonpblindtest-spotify"]=this["webpackJsonpblindtest-spotify"]||[]).push([[0],{14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),s=n.n(c),o=(n(14),n(3)),i=n(2),l=n.n(i),u=n(5),p=n.n(u),j=n.p+"static/media/logo.53a8fc10.svg",d=n(0),b=function(e){var t=e.track.album.images[0].url;return Object(d.jsx)("img",{src:t,style:{width:200,height:200},alt:"cover"})},h=n(9),g=n.n(h),O=function(e){return Object(d.jsx)("button",{className:g.a.button,onClick:e.onClick,children:e.children})},m=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(O,{onClick:e.onClick,children:[Object(d.jsx)(b,{track:e.track}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:e.track.name}),Object(d.jsx)("p",{children:e.track.artists[0].name})]})]})})};function f(e){return Math.floor(Math.random()*e)}var k=function(e){var t=Object(a.useState)(e.tracks),n=Object(o.a)(t,1)[0],r=Object(a.useState)(e.currentTrack),c=Object(o.a)(r,1)[0],s=function(e){for(var t=e.length;t>0;){var n=f(t),a=e[--t];e[t]=e[n],e[n]=a}return e}([n[f(n.length)].track,n[f(n.length)].track,c]),i=function(){e.setCurrentTrack(n[f(n.length)].track),console.log(c.name),console.log("next song")};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:j,className:l.a.appLogo,alt:"logo"}),Object(d.jsx)("div",{className:l.a.audioContainer,children:Object(d.jsx)("audio",{controls:!0,autoPlay:!0,src:c.preview_url})}),Object(d.jsx)("div",{className:l.a.coverContainer,children:s.map((function(e){return Object(d.jsx)(m,{track:e,onClick:function(){return t=e.id,void(c.id===t?p()("Bravo !","Vous avez trouvez la bonne musique","success").then(i):p()("D\xe9sol\xe9","Ce n'\xe9tais pas la bonne musique, r\xe9essaye","error"));var t}})}))})]})},x=n.p+"static/media/loading.6e6379f4.svg",v=function(e){return Object(a.useEffect)((function(){fetch("https://api.spotify.com/v1/playlists/0MF1XGKzqqeL0ZHeqMrq7R/tracks",{method:"GET",headers:{Authorization:"Bearer BQD9n2LOk_NYyJc7M8VmNQty1K9OjDwU528PqdehjUpXVZRaXxe2WVD02msvGWL9t9y5txh47zlea4FjgtcKI4h8o1JfU22cl5ENz-IWn0RjOv0Q2vfsiIra0YZYeUKuOmMJg8jxplWxVm0cYMpQPiipU_O3-f1ggLasC-1JKpdI"}}).then((function(e){return e.json()})).then((function(t){console.log("R\xe9ponse re\xe7ue ! Voil\xe0 ce que j'ai re\xe7u : ",t);var n=t.items.filter((function(e){return null!==e.track.preview_url}));console.log("Voila les r\xe9sultats filtr\xe9s",n),e.setTracks(n),e.setCurrentTrack(n[f(n.length)].track),e.setSongLoaded(!0)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:x,className:l.a.appLogo,alt:"loading"}),Object(d.jsx)("h1",{className:l.a.appTitle,children:"Bienvenue sur le Blindtest"}),Object(d.jsx)("h2",{className:l.a.appTitle,children:"Loading data"})]})},_=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(o.a)(c,2),i=s[0],u=s[1],p=Object(a.useState)(null),j=Object(o.a)(p,2),b=j[0],h=j[1];return Object(d.jsx)("div",{className:l.a.app,children:Object(d.jsx)("header",{className:l.a.appHeader,children:i?Object(d.jsx)(k,{tracks:n,currentTrack:b,setCurrentTrack:h}):Object(d.jsx)(v,{setTracks:r,setCurrentTrack:h,setSongLoaded:u})})})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={app:"App_app__1kX79",appLogo:"App_appLogo__1qg7-",appLogoSpin:"App_appLogoSpin__P7gwA",appHeader:"App_appHeader__28RXF",appLink:"App_appLink__2pA8F",coverContainer:"App_coverContainer__1S7j2",audioContainer:"App_audioContainer__36hu8"}},9:function(e,t,n){e.exports={button:"Button_button__2Ce79"}}},[[18,1,2]]]);
//# sourceMappingURL=main.ff1ca0be.chunk.js.map