(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,n){},111:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),i=n.n(r),c=n(27),s=n.n(c),o=(n(109),n(5)),d=n.n(o),l=n(28),j=n(4);n(111);var u=function(e){return Object(a.jsx)("h1",{style:b,children:e.title})},b={margin:"0em 0 1em 0",fontFamily:"'Thasadith', sans-serif",fontSize:"3em",color:"#0065a2"},h=n(13),m=n(3);function f(e){var t=g(e);return C(function(e){var t=S(e,"Delft"),n=S(t,"Dordrecht"),a=S(n,"Leiden"),r=S(a,"Zaandam"),i=S(r,"Haarlem"),c=S(i,"Utrecht"),s=S(c,"Den Haag"),o=S(s,"Rotterdam"),d=S(o,"Amsterdam");return function(e){return e.map((function(e){return void 0===e.description?{description:"P+R "+e.city,city:e.city,capacity:e.capacity}:{description:e.description,city:e.city,capacity:e.capacity}}))}(Object(m.a)(d))}(function(e){var t=v(e,"Delft"),n=v(e,"Dordrecht"),a=v(e,"Leiden"),r=v(e,"Zaandam"),i=v(e,"Haarlem"),c=v(e,"Utrecht"),s=v(e,"Den Haag"),o=v(e,"Rotterdam"),d=v(e,"Amsterdam");return[].concat(Object(m.a)(t),Object(m.a)(n),Object(m.a)(a),Object(m.a)(r),Object(m.a)(i),Object(m.a)(c),Object(m.a)(s),Object(m.a)(o),Object(m.a)(d))}(R(y(e),t,k(e,"description")))))}function p(e,t){var n=g(e);return C(v(R(y(e),n,k(e,"description")),t))}function O(e,t){var n=g(e),a=C(v(R(y(e),n,k(e,"description")),t)).map((function(e){return e.capacity}));if(console.log("this is capacity",a),a.length>1)return a.reduce((function(e,t){return e+t}));return"Kan de stad niet vinden"}function x(e){return g(e).reduce((function(e,t){return e+t}))}function g(e){var t=k(e,"specifications");return k(w(N(t)),"capacity")}function y(e){var t,n=k(e,"accessPoints"),a=k(w(N(n)),"accessPointAddress"),r=k(a,"city"),i=k(e,"operator"),c=k(i,"name");return t=c,r.map((function(e,n){return{cityFirst:e,citySecond:t[n]}}))}function v(e,t){return e.filter((function(e){return e.cityFirst===t||e.citySecond===t}))}function k(e,t){return e.map((function(e){return e[t]}))}function N(e){return e.map((function(e){return e[0]}))}function w(e){var t=e.reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),t)})),n=Object.keys(t).reduce((function(e,t){return e[t]=0,e}),{});return e.map((function(e){return Object(h.a)(Object(h.a)({},n),e)}))}function R(e,t,n){return e.map((function(e,a){return{description:n[a],cityFirst:e.cityFirst,citySecond:e.citySecond,capacity:t[a]}}))}function S(e,t){return e.map((function(e){return e.cityFirst===t||e.citySecond===t?{description:e.description,city:t,capacity:e.capacity}:void 0!==e.city?{description:e.description,city:e.city,capacity:e.capacity}:{description:e.description,cityFirst:e.cityFirst,citySecond:e.citySecond,capacity:e.capacity}}))}function C(e){return e.filter((function(t,n){var a=JSON.stringify(t);return n===e.findIndex((function(e){return JSON.stringify(e)===a}))}))}var D=n(29),A=n(30),P=n(32),I=n(31),z=n.p+"static/media/parking.06c52f0d.jpg",B=function(e){Object(P.a)(n,e);var t=Object(I.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object(a.jsx)("img",{src:z,alt:"parking Amsterdam vs PR",className:"imageHeader"})}}]),n}(i.a.Component);function F(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{style:E,children:e.header}),Object(a.jsx)("p",{style:H,children:e.content})]})}var E={marginTop:"1em",color:"white"},H={padding:"1em 2em 2em 2em",color:"white"};function L(){return Object(a.jsxs)("div",{className:"highlight",children:[Object(a.jsx)(B,{}),Object(a.jsx)(F,{header:"De oplossing:",content:T})]})}var T="De oplossing hiervoor zijn Park & Ride parkeerplaatsen. Dit zijn parkeer faciliteiten die speciaal ontworpen zijn om de auto uit de stad te weren. Vaak als je hier parkeert zijn er speciale tarieven als je vervolgens met het OV naar de stad reist. ";function _(e){return Object(a.jsx)("p",{className:"intro",style:M,children:e.content})}var M={margin:"2em 2em 2em 2em",lineHeight:"1.45em"},V=n(2);function J(e,t){var n,a=Object(V.f)(t.current),r=t.current.clientHeight,i=t.current.clientWidth,c=function(e){return e.description},s=function(e){return e.capacity},o=10,d=80,l=i-d-120,j=r-o-150,u=Object(V.e)(),b=Object(V.d)(),h=a.append("g").attr("transform","translate(".concat(d,", ").concat(o,")"));n=e,u.domain([Object(V.c)(n,s),0]).range([0,j]).nice(),b.domain(n.map(c)).range([0,l]).padding(.2),function(){var e=Object(V.b)(u).tickSize(-l),t=Object(V.a)(b),n=h.append("g").call(e);n.selectAll(".domain").remove(),n.append("text").attr("class","axis-label").attr("y",-50).attr("x",-j/2).attr("fill","black").attr("transform","rotate(-90)").attr("text-anchor","middle").text("Capacity"),n.attr("class","axis-y");var a=h.append("g").call(t);a.attr("transform","translate(0, ".concat(j,")")).attr("class","axis-x").selectAll("text").attr("transform","rotate(50)").attr("text-anchor","start").attr("x",10).attr("y",5).selectAll(".domain, .tick line").remove(),a.append("text").attr("class","axis-label").attr("x",l/2).attr("y",60).attr("fill","black").text("")}(),function(e){h.selectAll(".bar").data(e).enter().append("rect").attr("class","bar").attr("x",(function(e){return b(c(e))})).attr("y",(function(e){return u(s(e))})).attr("width",b.bandwidth()).attr("y",(function(e){return u(0)})).attr("height",0).transition().duration(1e3).attr("y",(function(e){return u(s(e))})).attr("height",(function(e){return j-u(s(e))}))}(e),function(e){Object(V.f)("#xd").on("click",(function(){return function(e){var t=Object(V.f)("#xd").property("checked")?function(e){var t=[];return e.forEach((function(e){this[e.city]||(this[e.city]={description:e.city,city:e.city,capacity:0},t.push(this[e.city])),this[e.city].capacity+=e.capacity}),Object.create(null)),t}(e):e;console.log("new data",t),u.domain([Object(V.c)(t,s),0]).nice(),b.domain(t.map(c));var n=h.selectAll(".bar").data(t);n.attr("y",(function(e){return u(s(e))})).attr("x",(function(e){return b(c(e))})).attr("width",b.bandwidth()).attr("y",(function(e){return u(0)})).attr("height",0).transition().duration(1e3).attr("y",(function(e){return u(s(e))})).attr("height",(function(e){return j-u(s(e))})),n.enter().append("rect").attr("class","bar").attr("x",(function(e){return b(c(e))})).attr("y",(function(e){return u(s(e))})).attr("width",b.bandwidth()).attr("y",(function(e){return u(0)})).attr("height",0).transition().duration(1e3).attr("y",(function(e){return u(s(e))})).attr("height",(function(e){return j-u(s(e))})),n.exit().remove(),a.select(".axis-x").call(Object(V.a)(b)).attr("transform","translate(0, ".concat(j,")")).selectAll("text").attr("transform","rotate(50)").attr("text-anchor","start").attr("x",10).attr("y",5),a.select(".axis-y").call(Object(V.b)(u).tickSize(-l)).selectAll(".domain").remove()}(e)}))}(e)}var U={height:"60vh",width:"50vw"};var W=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){J(e.data,t)})),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("input",{type:"checkbox",id:"xd"}),Object(a.jsx)("label",{htmlFor:"xd",children:"Click here to compare total P+R parking spaces for each Randstad city"})]})}),Object(a.jsx)("div",{className:"mainContainer",children:Object(a.jsx)("svg",{ref:t,style:U})})]})},Z=n.p+"static/media/background.429773e0.svg";var G=function(e){return Object(a.jsx)("h2",{style:K,children:e.title})},K={margin:"1em 2em 0 2em"},q=n(16),Q=n.n(q);function X(e){var t=e.count;return Object(a.jsxs)("div",{className:"countContainer",children:[Object(a.jsx)("div",{className:"counter",style:Y,children:Object(a.jsx)(Q.a,{end:t,duration:5})}),Object(a.jsx)("h3",{children:e.title})]})}var Y={height:"10vw",width:"10vw",backgroundColor:"#00bfbf",borderRadius:"50%",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2em",fontFamily:"'Thasadith', sans-serif",fontWeight:"700",color:"white",marginBottom:".5em"},$=n.p+"static/media/park-ride-amsterdamnoord.ebfcfecd.jpg";var ee=function(){return Object(a.jsx)("img",{src:$,alt:"parking Amsterdam vs PR",className:"imageHeader"})};function te(e){var t,n=Object(r.useState)(0),i=Object(j.a)(n,2),c=i[0],s=i[1],o=Object(r.useState)(p(e.allData,localStorage.getItem("city"))),d=Object(j.a)(o,2),l=d[0],u=d[1],b=Object(r.useState)(localStorage.getItem("city")),h=Object(j.a)(b,2),m=h[0],f=h[1],g=Object(r.useState)(O(e.allData,"Amsterdam")),y=Object(j.a)(g,2),v=y[0],k=y[1],N=window.localStorage;return Object(r.useEffect)((function(){var e=localStorage.getItem("city");s(e),document.getElementById("cityInput").value=c}),[c]),Object(r.useEffect)((function(){var t=localStorage.getItem("city");k(O(e.allData,null===t?"Amsterdam":localStorage.getItem("city")))}),[e.allData]),Object(a.jsxs)("div",{children:[Object(a.jsx)(G,{title:"De statistieken over de Park & Ride faciliteiten"}),Object(a.jsxs)("article",{className:"PRStatistics",children:[Object(a.jsx)(X,{count:(t=e.allData,t.length),title:"Alle faciliteiten"}),Object(a.jsx)(X,{count:x(e.allData),title:"Alle parkeerplaatsen"}),Object(a.jsxs)("div",{className:"countContainer",children:[Object(a.jsx)("div",{className:"counter",style:ne,children:Object(a.jsx)(Q.a,{end:l.length,duration:5})}),Object(a.jsxs)("div",{className:"cityInputContainer",children:[Object(a.jsx)("input",{id:"cityInput",placeholder:"Search for a city"}),Object(a.jsx)("button",{id:"submitBtn",type:"button",onClick:function(){var t=document.getElementById("cityInput").value,n=t.charAt(0).toUpperCase()+t.slice(1);N.setItem("city",n),console.log("cityNameClean",n),f(n),u(p(e.allData,n)),k(O(e.allData,n))},children:"enter city"})]})]})]}),m&&Object(a.jsx)("article",{children:Object(a.jsxs)("div",{className:"infoBlock",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:[" ",m]}),v&&Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:m})," heeft ",Object(a.jsx)("span",{children:l.length})," Park en Ride faciliteiten dat een totaal heeft van ",Object(a.jsx)("span",{children:v})," parkeerplaatsen."]})]}),Object(a.jsx)(ee,{})]})})]})}var ne={height:"10vw",width:"10vw",backgroundColor:"#00bfbf",borderRadius:"50%",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2em",fontFamily:"'Thasadith', sans-serif",fontWeight:"700",color:"white",marginBottom:".5em"};var ae=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:e.target,className:"ctaStyle",children:e.content})})},re=n.p+"static/media/city-roundel.423065e2.svg";function ie(e){return Object(a.jsxs)("div",{className:"ConclusionBlob",children:[Object(a.jsxs)("div",{className:"RoundelBlob",children:[Object(a.jsxs)("p",{className:"RoundelCityName",children:[" ",e.cityName," "]}),Object(a.jsx)("img",{src:re,alt:"city icon visual",className:"RoundelCityImage"})]}),Object(a.jsxs)("div",{className:"infoBlob",children:[Object(a.jsx)("h3",{children:e.title}),Object(a.jsxs)("p",{children:[e.conclusion,e.bron&&Object(a.jsx)("a",{href:e.bron,target:"blank",children:"NBC."})]})]})]})}var ce=function(e){return Object(a.jsxs)("div",{className:"footerContainer",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Resources:"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://npropendata.rdw.nl/parkingdata/v2/",children:"NPR open dataset"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.nbcLink,children:"NBC toeristen informatie"})})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Gemaakt door:"}),Object(a.jsx)("p",{children:"Nathan Neelis"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Front End Applications"}),Object(a.jsx)("p",{children:"In opdracht van de Volkskrant"})]})]})};function se(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://gist.githubusercontent.com/NathanNeelis/b28e16c0433b12da6bc716b276901ae9/raw/402754fa45924af802d06c5672043153bb990d5b/NPR_park_and_ride",e.next=3,fetch("https://gist.githubusercontent.com/NathanNeelis/b28e16c0433b12da6bc716b276901ae9/raw/402754fa45924af802d06c5672043153bb990d5b/NPR_park_and_ride");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,i(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.jsx)("div",{className:"App",style:be,children:Object(a.jsxs)("div",{className:"Content",children:[Object(a.jsxs)("section",{children:[Object(a.jsx)(u,{title:"Laat je auto buiten de stad!"}),Object(a.jsx)(_,{content:oe}),Object(a.jsx)(L,{}),Object(a.jsx)(G,{title:"Maar zijn er genoeg P+R faciliteiten?"}),Object(a.jsx)(ae,{target:"#statistics",content:"Bekijk jouw stad!"})]}),n&&Object(a.jsxs)("section",{id:"statistics",children:[Object(a.jsx)(te,{allData:n}),Object(a.jsx)(ae,{target:"#d3BarChart",content:"P+R in de Randstad"})]}),n&&Object(a.jsxs)("section",{id:"d3BarChart",children:[Object(a.jsx)(G,{title:"Hoe goed facaliteren de randstad steden de Park & Rides mogelijkheden?"}),Object(a.jsx)(_,{content:de}),Object(a.jsx)(W,{data:f(n)}),Object(a.jsx)(ae,{target:"#endConclusion",content:"Lees de conclusie"})]}),Object(a.jsxs)("section",{id:"endConclusion",children:[Object(a.jsx)(G,{title:"Welke randstad is goed te bereiken met Park & Ride faciliteiten?"}),Object(a.jsx)(ie,{cityName:"Rotterdam",title:"maakt veel gebruik van Park & Ride faciliteiten",bron:ue,conclusion:le}),Object(a.jsx)(ie,{cityName:"Delft",title:"maakt minder gebruik van Park & Ride faciliteiten",conclusion:je})]}),Object(a.jsx)("section",{className:"footer",children:Object(a.jsx)(ce,{nbcLink:ue})})]})})}var oe="De steden worden jaarlijks steeds drukker en drukker. In het centrum is dan ook bijna geen ruimte meer om je auto kwijt te kunnen. Dit is dan ook de reden waarom steden goed te bereiken zijn het het openbaar vervoer. Maar aan het OV hangt ook wel een prijskaartje, zeker als je met meerdere mensen reist. Maar je auto bij een stad parkeren is ook niet goedkoop. Er zijn ook mensen die met de auto naar het station rijden om vanaf daar verder te gaan met het OV. Maar lang niet bij alle stations kan je goed parkeren. Neem Bijvoorbeeld Amsterdam Centraal, als je er al kan parkeren betaal je waarschijnlijk ook nog eens de hoofdprijs. Gelukkig is er een oplossing...",de="In de staafdiagram hieronder is af te lezen hoeveel P+R faciliteiten er zijn in de Randstad en hoeveel parkeerplaatsen deze hebben. Door de checkbox aan te vinken is te lezen hoeveel parkeerplaats elke stad in de randstad totaal heeft.",le="Uit de data komt Rotterdam het best naar voren. Rotterdam is met maar liefst 17 P+R's te bereiken en heeft het hoogst aantal P+R parkeerplaatsen. Zelfs meer dan Amsterdam, terwijl in Amsterdam meer toeristen komen volgens het ",je="Delft komt minder goed uit de data, maar misschien heeft Delft niet zoveel P+R faciliteiten nodig. Delft zal minder toerisme hebben dan een stad als Amsterdam of Rotterdam, en mogelijk ook wel een minder groot parkeerprobleem rondom/in de binnenstad waardoor het niet dringend nodig is om auto's te weren.",ue="https://dashboard.nbtc.nl/dashboard/staat-van-bestemming-nl/bezoekers-2/",be={height:"100%",backgroundImage:"url(".concat(Z,")"),backgroundPosition:"center",backgroundAttachment:"fixed",backgroundSize:"cover"},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(se,{})}),document.getElementById("root")),he()}},[[117,1,2]]]);
//# sourceMappingURL=main.62a595b5.chunk.js.map