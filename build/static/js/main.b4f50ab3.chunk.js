(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(18),r=n.n(a),s=(n(25),n(2)),c=n(5),d=n(11),l=n(3),u=(n(26),n(1));var b=function(){var e={header:{backgroundColor:"#7467ad",border:"solid #dadada",borderWidth:"5px 5px 5px 5px",borderRadius:"42px",height:"10vw",marginTop:"2.5%",marginBottom:"2.5%",marginLeft:"2.5%",marginRight:"2.5%",textAlign:"center",fontFamily:"'Nosifer', cursive",minWidth:"250px",minHeight:"100px"},title:{margin:0,color:"#77dfff",fontSize:"4.5vmax",WebkitTextStroke:"1px rgb(7, 0, 55)",fontWeight:"bold",textAlign:"center"},blurb:{marginTop:"-1vw",color:"rgb(255, 0, 42)",WebkitTextStroke:".5px rgb(142, 0, 0)",fontSize:"1.6vmax",fontWeight:"bold",textAlign:"center"}};return Object(u.jsxs)("header",{style:e.header,children:[Object(u.jsx)("h1",{style:e.title,children:"Nomster"}),Object(u.jsx)("h4",{style:e.blurb,children:"Off the eaten path"})]})},f=(n(28),n.p+"static/media/monster-1.0c1d752a.png");var h=function(){return Object(u.jsx)("img",{src:f,alt:"Purple Monster"})};var p=function(e){var t=e.setInput,n=Object(o.useState)(!1),i=Object(c.a)(n,2),a=i[0],r=i[1],d=Object(o.useState)(!1),b=Object(c.a)(d,2),f=b[0],h=b[1],p=Object(o.useRef)(""),j={searchButton:{borderRadius:"42px",borderColor:"#c17ecb",marginTop:"10px",marginLeft:"2%",padding:"10px",backgroundColor:"rgb(7, 0, 55)",color:"#77dfff",fontSize:"20px",fontWeight:"bold",textAlign:"center"},searchButtonHover:{color:"rgb(7, 0, 55)",backgroundColor:"#77dfff"},location:{borderColor:"#77dfff",marginTop:"10px",padding:"12px"}};return f?Object(u.jsx)(l.a,{to:"/results"}):Object(u.jsxs)("form",{className:"yelp",onSubmit:function(e){e.preventDefault(),t(p.current.value),h(!0)},children:[Object(u.jsx)("input",{placeholder:"location",style:j.location,type:"text",ref:p}),Object(u.jsx)("input",{style:a?Object(s.a)(Object(s.a)({},j.searchButton),j.searchButtonHover):j.searchButton,onMouseEnter:function(e){r(!0)},onMouseLeave:function(e){r(!1)},type:"submit"})]})};n(34);var j=function(e){var t=Object(o.useState)(5),n=Object(c.a)(t,2),i=n[0],a=n[1],r=Object(o.useState)(!1),d=Object(c.a)(r,2),l=d[0],b=d[1],f={root:{color:"#77dfff",fontSize:"17px",fontWeight:"bold",textAlign:"center",width:"100%"},text:{margin:"0",marginTop:"25px",marginBottom:"5px",padding:"0"},slider:function(){var e={WebkitAppearance:"none",width:"75%",height:"10px",margin:"0",backgroundColor:"#c17ecb",borderRadius:"20px",outline:"none",opacity:"0.7",WebkitTransition:".2s",transition:"opacity .2s"};return l?Object(s.a)(Object(s.a)({},e),{opacity:"1"}):e},sliderHover:{opacity:"1"}};return Object(u.jsxs)("div",{style:f.root,children:[Object(u.jsxs)("p",{style:f.text,children:["Range of Search:",Object(u.jsx)("output",{name:"slider-output",id:"myOutput",value:i,children:i})," Miles"]}),Object(u.jsx)("input",{type:"range",min:"1",max:"25",value:i,id:"myRange",style:f.slider(),onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},onInput:function(e){return a(e.target.value)}})]})};var g=function(e){var t=e.query,n=e.setQuery;return Object(u.jsxs)("div",{id:"page-1",className:"container",children:[Object(u.jsx)(b,{}),Object(u.jsxs)("div",{className:"search-container",children:[Object(u.jsx)(h,{}),Object(u.jsx)(p,{setInput:function(e){return n(Object(s.a)(Object(s.a)({},t),{},{location:e}))}}),Object(u.jsx)(j,{query:t.range,setQuery:function(e){return n(Object(s.a)(Object(s.a)({},t),{},{range:e}))}})]})]})},m=n(20);n(35);var x=function(e){console.log(JSON.stringify(e,null,1));var t=Object(o.useState)(!1),n=Object(c.a)(t,2),i=n[0],a=n[1],r=Object(o.useRef)(),b=Object(o.useRef)(),h=Object(o.useRef)(),p=Object(o.useRef)({map:void 0,infobox:void 0}),j={bubble1:{position:"absolute",marginTop:"285px",marginLeft:"197px",float:"left",width:"30px",height:"30px",backgroundColor:"rgb(7, 0, 55)",border:"solid #dadada",borderWidth:"2px",borderRadius:"42px",zIndex:"1",opacity:"0",animationName:"fadein",animationDuration:"1s",animationFillMode:"forwards",animationDelay:"4.5s"},bubble2:{position:"absolute",marginTop:"253px",marginLeft:"11.2vw",float:"left",width:"50px",height:"50px",backgroundColor:"rgb(7, 0, 55)",border:"solid #dadada",borderWidth:"2px",borderRadius:"42px",zIndex:"2",opacity:0,animationName:"fadein",animationDuration:"1s",animationFillMode:"forwards",animationDelay:"5s"},bubble3:{position:"absolute",marginTop:"159px",marginLeft:"4.8vw",float:"left",width:"137px",height:"137px",backgroundColor:"rgb(7, 0, 55)",border:"solid #dadada",borderWidth:"2px",borderRadius:"70px",zIndex:"3",opacity:0,animationName:"fadein",animationDuration:"1.5s",animationFillMode:"forwards",animationDelay:"5s"},nomsterText:{marginTop:"3vw",color:"#77dfff",fontSize:"1.6vw",fontWeight:"bold",textAlign:"center"},imageDisplay:function(e){var t={position:"absolute",borderRadius:"42px",width:"25vw",height:"25vw",marginTop:"225px",marginLeft:"-32.5vw",transform:"rotate(-90deg)",zIndex:"-1",animationName:"slides",animationDuration:"1s",animationFillMode:"forwards",animationDelay:"3s"};return e?Object(s.a)(Object(s.a)({},t),{animationFillMode:"none",marginLeft:"-50vw"}):t}};return Object(o.useEffect)((function(){var e=window.Microsoft;void 0!==e&&(p.current.map||(p.current.map=new e.Maps.Map("#myMap",{credentials:"ArfOhekfSK9rly4qjcdt20SypfRiLnIYtUbxAzrv6-PDjseOmmMguOsqBYcrD-sW"}),p.current.infobox=new e.Maps.Infobox(p.current.map.getCenter(),{visible:!1}),p.current.infobox.setMap(p.current.map)))})),Object(o.useEffect)((function(){var t=window.Microsoft;if(void 0!==t){var n,o=Object(m.a)(e.results.businesses);try{for(o.s();!(n=o.n()).done;){var i=n.value,a=i.coordinates.latitude,r=i.coordinates.longitude,s=new t.Maps.Location(a,r),c=new t.Maps.Pushpin(s);c.metadata={title:i.name,description:i.location.display_address.join("\n")},t.Maps.Events.addHandler(c,"click",(function(e){e.target.metadata&&p.current.infobox.setOptions({location:e.target.getLocation(),title:e.target.metadata.title,description:e.target.metadata.description,visible:!0,showCloseButton:!1})})),p.current.map.entities.push(c)}}catch(l){o.e(l)}finally{o.f()}var d=new t.Maps.Location(e.results.region.center.latitude,e.results.region.center.longitude);p.current.map.setView({center:d,zoom:15})}}),[e.results.businesses,e.results.region.center.latitude,e.results.region.center.longitude]),Object(u.jsx)(u.Fragment,{children:e.results.businesses?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{id:"page-2",className:"container",children:[Object(u.jsxs)("div",{className:"search-results",children:[Object(u.jsx)("h3",{id:"noms",children:"Nom Noms"}),Object(u.jsx)("div",{id:"nom-list",children:e.results.businesses.map((function(e,t){return Object(u.jsxs)("div",{className:"business","data-lat":e.coordinates.latitude,"data-lon":e.coordinates.longitude,children:[Object(u.jsx)("a",{className:"name",href:e.url,children:e.name}),Object(u.jsx)("p",{children:"".concat(e.location.display_address[0]," ").concat(e.location.display_address[1])}),Object(u.jsx)("a",{href:"tel:".concat(e.phone),children:e.phone})]},t)}))})]}),Object(u.jsxs)("div",{className:"results-map",children:[Object(u.jsx)("h3",{id:"path",children:"Path to Nom Noms"}),Object(u.jsx)("div",{id:"myMap"})]})]}),Object(u.jsx)("img",{src:f,style:j.imageDisplay(i),onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},alt:"monster"}),Object(u.jsx)("div",{ref:r,style:j.bubble1}),Object(u.jsx)("div",{ref:b,style:j.bubble2}),Object(u.jsx)("div",{ref:h,style:j.bubble3,children:Object(u.jsx)(d.b,{to:"/",children:Object(u.jsx)("p",{style:j.nomsterText,children:"Click Me to go back"})})})]}):Object(u.jsx)(l.a,{to:"/"})})};var O=function(e){var t=Object(o.useState)(!1),n=Object(c.a)(t,2),i=n[0],a=n[1],r=Object(o.useState)(!1),d=Object(c.a)(r,2),l=d[0],b=d[1],f=Object(o.useState)(!1),h=Object(c.a)(f,2),p=h[0],j=h[1],g=Object(o.useState)(!1),m=Object(c.a)(g,2),x=m[0],O=m[1],y=Object(o.useState)(!1),v=Object(c.a)(y,2),w=v[0],k=v[1],M={footer:{position:"fixed",bottom:"0",minWidth:"100%",paddingTop:"10px",paddingBottom:"10px",background:"#070037",zIndex:"5"},reset:{},button:function(e){var t={borderRadius:"42px",borderColor:"#c17ecb",marginRight:"1.5%",padding:"10px",backgroundColor:"rgb(7, 0, 55)",color:"#77dfff",fontSize:"20px",fontWeight:"bold",textAlign:"center"};return e?Object(s.a)(Object(s.a)({},t),{backgroundColor:"#77dfff",color:"rgb(7, 0, 55)"}):t},about:function(e){var t={position:"absolute",marginTop:"15%",marginLeft:"21%",padding:"30px",width:"50%",height:"50%",backgroundColor:"rgb(7, 0, 55)",color:"#77dfff",fontSize:"1.15vmax",border:"solid #dadada",borderWidth:"2px",borderRadius:"70px",zIndex:"1",visibility:"hidden"};return e?Object(s.a)(Object(s.a)({},t),{},{visibility:"visible"}):t},contact:function(e){var t={position:"absolute",marginTop:"29%",marginLeft:"40%",padding:"30px",width:"13%",height:"5%",backgroundColor:"rgb(7, 0, 55)",color:"#77dfff",fontSize:"1.15vmax",border:"solid #dadada",borderWidth:"2px",borderRadius:"70px",zIndex:"1",visibility:"hidden"};return e?Object(s.a)(Object(s.a)({},t),{},{visibility:"visible"}):t}};return Object(u.jsxs)("footer",{children:[Object(u.jsxs)("div",{style:M.footer,children:[Object(u.jsx)("button",{className:"reset",id:"home-tab",onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},style:M.button(i),children:"Home"}),Object(u.jsx)("button",{className:"button",id:"about-tab",onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},style:M.button(l),onClick:function(){return O(!x)},children:"About Us"}),Object(u.jsx)("button",{className:"button",id:"contact-tab",onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},style:M.button(p),onClick:function(){return k(!w)},children:"Contact Us"})]}),Object(u.jsx)("div",{className:"container-about-us",id:"about-us",style:M.about(x),children:"As students of Berkeley Extension coding bootcamp, we found ourselves with the given task of creating an application within randomly assigned groups. This project could be any design of our choosing so naturally, given that our lives now consisted of class, studying, homework, eating and occasional sleep, our only true friend, joy and source of entertainment stemmed from food\u2026 I might be projecting a little. Regardless, if one is exceptionally busy in life or attempting to be social by meeting up with friends, the same problem arises\u2026what to eat? Now, I enjoy consistency as much as the next. I at least enjoy it as much as my cats seem to (which is saying a lot because cats live by the ways of consistency and habit). However, there are only so many times I can order food from the same restaurant or visit the same caf\xe9 over and over again before what remains of my sanity starts to slip away. It just gets boring! At the same time, it can require a great deal of effort to try new things and, speaking personally, I don\u2019t have a lot of time to spend searching the vast selections of yelp, Grubhub or Doordash to find something unique and different in my area, especially when only the popular or well-advertised options appear first. Then you have to sort through them, scrolling and scrolling. It\u2019s like trying to run while knee deep in mud or sewer water. Yeah! Not a pretty image to picture when you are hungry and looking for food. This is where Nomster shines like the true star that it is!... Metaphorically speaking to the appearance of a star of course. Not an actual star to which 90% of the ones we see are actually dead by now and we are simply witnessing what remains of their light travelling over billions of miles. Little sun corpses in the sky. Nomster provides the list of unique and uncommon food choices within your area for you in 7 seconds or less!... Unless you type slow. May take longer in that instance, but what a difference! Now the next time you are off adventuring with friends or enjoying a Sunday funday (I don\u2019t really know what people do these days for fun), whip out Nomster and you\u2019ll be the cool, hip and interesting person with access to all the most exotic and unique food choices wherever you go."}),Object(u.jsx)("div",{className:"container-contact-us",id:"contact-us",style:M.contact(w),children:"No no no, we'll contact you."})]})};var y=function(){var e=Object(o.useState)({}),t=Object(c.a)(e,2),n=t[0],i=t[1],a=Object(o.useState)({businesses:[],region:{center:{latitude:0,longitude:0}},total:0}),r=Object(c.a)(a,2),b=r[0],f=r[1];return Object(o.useEffect)((function(){var e=new URLSearchParams(n);fetch("/api/listing?".concat(e.toString())).then((function(e){return e.json()})).then((function(e){f(e=e||{})})).catch((function(e){console.log(e)}))}),[n]),Object(u.jsx)(d.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/",render:function(e){return Object(u.jsx)(g,Object(s.a)(Object(s.a)({},e),{},{query:n,setQuery:i}))}}),Object(u.jsx)(l.b,{path:"/results",render:function(e){return Object(u.jsx)(x,Object(s.a)(Object(s.a)({},e),{},{results:b}))}})]}),Object(u.jsx)(O,{})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),v()}},[[36,1,2]]]);
//# sourceMappingURL=main.b4f50ab3.chunk.js.map