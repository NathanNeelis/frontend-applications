(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(t,e,n){},111:function(t,e,n){},117:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),i=n.n(r),c=n(27),s=n.n(c),o=(n(109),n(5)),d=n.n(o),l=n(28),j=n(4);n(111);var u=function(t){return Object(a.jsx)("h1",{style:b,children:t.title})},b={margin:"0em 0 1em 0",fontFamily:"'Thasadith', sans-serif",fontSize:"3em",color:"#0065a2"},h=n(13),m=n(3);function f(t){var e=g(t);return C(function(t){var e=S(t,"Delft"),n=S(e,"Dordrecht"),a=S(n,"Leiden"),r=S(a,"Zaandam"),i=S(r,"Haarlem"),c=S(i,"Utrecht"),s=S(c,"Den Haag"),o=S(s,"Rotterdam"),d=S(o,"Amsterdam");return function(t){return t.map((function(t){return void 0===t.description?{description:"P+R "+t.city,city:t.city,capacity:t.capacity}:{description:t.description,city:t.city,capacity:t.capacity}}))}(Object(m.a)(d))}(function(t){var e=v(t,"Delft"),n=v(t,"Dordrecht"),a=v(t,"Leiden"),r=v(t,"Zaandam"),i=v(t,"Haarlem"),c=v(t,"Utrecht"),s=v(t,"Den Haag"),o=v(t,"Rotterdam"),d=v(t,"Amsterdam");return[].concat(Object(m.a)(e),Object(m.a)(n),Object(m.a)(a),Object(m.a)(r),Object(m.a)(i),Object(m.a)(c),Object(m.a)(s),Object(m.a)(o),Object(m.a)(d))}(R(y(t),e,k(t,"description")))))}function p(t,e){var n=g(t);return C(v(R(y(t),n,k(t,"description")),e))}function O(t,e){var n=g(t),a=C(v(R(y(t),n,k(t,"description")),e)).map((function(t){return t.capacity}));if(console.log("this is capacity",a),a.length>1)return a.reduce((function(t,e){return t+e}));return"Kan de stad niet vinden"}function x(t){return g(t).reduce((function(t,e){return t+e}))}function g(t){var e=k(t,"specifications");return k(w(N(e)),"capacity")}function y(t){var e,n=k(t,"accessPoints"),a=k(w(N(n)),"accessPointAddress"),r=k(a,"city"),i=k(t,"operator"),c=k(i,"name");return e=c,r.map((function(t,n){return{cityFirst:t,citySecond:e[n]}}))}function v(t,e){return t.filter((function(t){return t.cityFirst===e||t.citySecond===e}))}function k(t,e){return t.map((function(t){return t[e]}))}function N(t){return t.map((function(t){return t[0]}))}function w(t){var e=t.reduce((function(t,e){return Object(h.a)(Object(h.a)({},t),e)})),n=Object.keys(e).reduce((function(t,e){return t[e]=0,t}),{});return t.map((function(t){return Object(h.a)(Object(h.a)({},n),t)}))}function R(t,e,n){return t.map((function(t,a){return{description:n[a],cityFirst:t.cityFirst,citySecond:t.citySecond,capacity:e[a]}}))}function S(t,e){return t.map((function(t){return t.cityFirst===e||t.citySecond===e?{description:t.description,city:e,capacity:t.capacity}:void 0!==t.city?{description:t.description,city:t.city,capacity:t.capacity}:{description:t.description,cityFirst:t.cityFirst,citySecond:t.citySecond,capacity:t.capacity}}))}function C(t){return t.filter((function(e,n){var a=JSON.stringify(e);return n===t.findIndex((function(t){return JSON.stringify(t)===a}))}))}var D=n(29),P=n(30),A=n(32),I=n(31),z=n.p+"static/media/parking.06c52f0d.jpg",B=function(t){Object(A.a)(n,t);var e=Object(I.a)(n);function n(){return Object(D.a)(this,n),e.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){return Object(a.jsx)("img",{src:z,alt:"parking Amsterdam vs PR",className:"imageHeader"})}}]),n}(i.a.Component);function F(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{style:E,children:t.header}),Object(a.jsx)("p",{style:H,children:t.content})]})}var E={marginTop:"1em",color:"white"},H={padding:"1em 2em 2em 2em",color:"white"};function L(){return Object(a.jsxs)("div",{className:"highlight",children:[Object(a.jsx)(B,{}),Object(a.jsx)(F,{header:"De oplossing:",content:T})]})}var T="De oplossing hiervoor zijn Park & Ride parkeerplaatsen. Dit zijn parkeer faciliteiten die speciaal ontworpen zijn om de auto uit de stad te weren. Vaak als je hier parkeert zijn er speciale tarieven als je vervolgens met het OV naar de stad reist. ";function _(t){return Object(a.jsx)("p",{className:"intro",style:M,children:t.content})}var M={margin:"2em 2em 2em 2em",lineHeight:"1.45em"},V=n(2);function J(t,e){var n,a=Object(V.f)(e.current),r=e.current.clientHeight,i=e.current.clientWidth,c=function(t){return t.description},s=function(t){return t.capacity},o=10,d=80,l=i-d-120,j=r-o-150,u=Object(V.e)(),b=Object(V.d)(),h=a.append("g").attr("transform","translate(".concat(d,", ").concat(o,")"));n=t,u.domain([Object(V.c)(n,s),0]).range([0,j]).nice(),b.domain(n.map(c)).range([0,l]).padding(.2),function(){var t=Object(V.b)(u).tickSize(-l),e=Object(V.a)(b),n=h.append("g").call(t);n.selectAll(".domain").remove(),n.append("text").attr("class","axis-label").attr("y",-50).attr("x",-j/2).attr("fill","black").attr("transform","rotate(-90)").attr("text-anchor","middle").text("Capacity"),n.attr("class","axis-y");var a=h.append("g").call(e);a.attr("transform","translate(0, ".concat(j,")")).attr("class","axis-x").selectAll("text").attr("transform","rotate(50)").attr("text-anchor","start").attr("x",10).attr("y",5).selectAll(".domain, .tick line").remove(),a.append("text").attr("class","axis-label").attr("x",l/2).attr("y",60).attr("fill","black").text("")}(),function(t){h.selectAll(".bar").data(t).enter().append("rect").attr("class","bar").attr("x",(function(t){return b(c(t))})).attr("y",(function(t){return u(s(t))})).attr("width",b.bandwidth()).attr("y",(function(t){return u(0)})).attr("height",0).transition().duration(1e3).attr("y",(function(t){return u(s(t))})).attr("height",(function(t){return j-u(s(t))}))}(t),function(t){Object(V.f)("#xd").on("click",(function(){return function(t){var e=Object(V.f)("#xd").property("checked")?function(t){var e=[];return t.forEach((function(t){this[t.city]||(this[t.city]={description:t.city,city:t.city,capacity:0},e.push(this[t.city])),this[t.city].capacity+=t.capacity}),Object.create(null)),e}(t):t;console.log("new data",e),u.domain([Object(V.c)(e,s),0]).nice(),b.domain(e.map(c));var n=h.selectAll(".bar").data(e);n.attr("y",(function(t){return u(s(t))})).attr("x",(function(t){return b(c(t))})).attr("width",b.bandwidth()).attr("y",(function(t){return u(0)})).attr("height",0).transition().duration(1e3).attr("y",(function(t){return u(s(t))})).attr("height",(function(t){return j-u(s(t))})),n.enter().append("rect").attr("class","bar").attr("x",(function(t){return b(c(t))})).attr("y",(function(t){return u(s(t))})).attr("width",b.bandwidth()).attr("y",(function(t){return u(0)})).attr("height",0).transition().duration(1e3).attr("y",(function(t){return u(s(t))})).attr("height",(function(t){return j-u(s(t))})),n.exit().remove(),a.select(".axis-x").call(Object(V.a)(b)).attr("transform","translate(0, ".concat(j,")")).selectAll("text").attr("transform","rotate(50)").attr("text-anchor","start").attr("x",10).attr("y",5),a.select(".axis-y").call(Object(V.b)(u).tickSize(-l)).selectAll(".domain").remove()}(t)}))}(t)}var W={height:"60vh",width:"50vw"};var U=function(t){var e=Object(r.useRef)();return Object(r.useEffect)((function(){J(t.data,e)})),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("input",{type:"checkbox",id:"xd"}),Object(a.jsx)("label",{htmlFor:"xd",children:"Click here to compare total P+R parking spaces for each Randstad city"})]})}),Object(a.jsx)("div",{className:"mainContainer",children:Object(a.jsx)("svg",{ref:e,style:W})})]})},Z=n.p+"static/media/background.429773e0.svg";var G=function(t){return Object(a.jsx)("h2",{style:K,children:t.title})},K={margin:"1em 2em 0 2em"},q=n(16),Q=n.n(q);function X(t){var e=t.count;return Object(a.jsxs)("div",{className:"countContainer",children:[Object(a.jsx)("div",{className:"counter",style:Y,children:Object(a.jsx)(Q.a,{end:e,duration:5})}),Object(a.jsx)("h3",{children:t.title})]})}var Y={height:"10vw",width:"10vw",backgroundColor:"#00bfbf",borderRadius:"50%",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2em",fontFamily:"'Thasadith', sans-serif",fontWeight:"700",color:"white",marginBottom:".5em"},$=n.p+"static/media/park-ride-amsterdamnoord.ebfcfecd.jpg";var tt=function(){return Object(a.jsx)("img",{src:$,alt:"parking Amsterdam vs PR",className:"imageHeader"})};function et(t){var e,n=Object(r.useState)(0),i=Object(j.a)(n,2),c=i[0],s=i[1],o=Object(r.useState)(p(t.allData,localStorage.getItem("city"))),d=Object(j.a)(o,2),l=d[0],u=d[1],b=Object(r.useState)(localStorage.getItem("city")),h=Object(j.a)(b,2),m=h[0],f=h[1],g=Object(r.useState)(O(t.allData,"Amsterdam")),y=Object(j.a)(g,2),v=y[0],k=y[1],N=window.localStorage;return Object(r.useEffect)((function(){var t=localStorage.getItem("city");s(t),document.getElementById("cityInput").value=c}),[c]),Object(r.useEffect)((function(){var e=localStorage.getItem("city");k(O(t.allData,null===e?"Amsterdam":localStorage.getItem("city")))}),[t.allData]),Object(a.jsxs)("div",{children:[Object(a.jsx)(G,{title:"De statistieken over de Park & Ride faciliteiten"}),Object(a.jsxs)("article",{className:"PRStatistics",children:[Object(a.jsx)(X,{count:(e=t.allData,e.length),title:"Alle faciliteiten"}),Object(a.jsx)(X,{count:x(t.allData),title:"Alle parkeerplaatsen"}),Object(a.jsxs)("div",{className:"countContainer",children:[Object(a.jsx)("div",{className:"counter",style:nt,children:Object(a.jsx)(Q.a,{end:l.length,duration:5})}),Object(a.jsxs)("div",{className:"cityInputContainer",children:[Object(a.jsx)("input",{id:"cityInput",placeholder:"Search for a city"}),Object(a.jsx)("button",{id:"submitBtn",type:"button",onClick:function(){var e=document.getElementById("cityInput").value;N.setItem("city",e),f(e),u(p(t.allData,e)),k(O(t.allData,e))},children:"enter city"})]})]})]}),m&&Object(a.jsx)("article",{children:Object(a.jsxs)("div",{className:"infoBlock",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:[" ",m]}),v&&Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:m})," heeft ",Object(a.jsx)("span",{children:l.length})," Park en Ride faciliteiten dat een totaal heeft van ",Object(a.jsx)("span",{children:v})," parkeerplaatsen."]})]}),Object(a.jsx)(tt,{})]})})]})}var nt={height:"10vw",width:"10vw",backgroundColor:"#00bfbf",borderRadius:"50%",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2em",fontFamily:"'Thasadith', sans-serif",fontWeight:"700",color:"white",marginBottom:".5em"};var at=function(t){return Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:t.target,className:"ctaStyle",children:t.content})})},rt=n.p+"static/media/city-roundel.423065e2.svg";function it(t){return Object(a.jsxs)("div",{className:"ConclusionBlob",children:[Object(a.jsxs)("div",{className:"RoundelBlob",children:[Object(a.jsxs)("p",{className:"RoundelCityName",children:[" ",t.cityName," "]}),Object(a.jsx)("img",{src:rt,alt:"city icon visual",className:"RoundelCityImage"})]}),Object(a.jsxs)("div",{className:"infoBlob",children:[Object(a.jsx)("h3",{children:t.title}),Object(a.jsxs)("p",{children:[t.conclusion,t.bron&&Object(a.jsx)("a",{href:t.bron,target:"blank",children:"NBC."})]})]})]})}var ct=function(t){return Object(a.jsxs)("div",{className:"footerContainer",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Resources:"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://npropendata.rdw.nl/parkingdata/v2/",children:"NPR open dataset"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:t.nbcLink,children:"NBC toeristen informatie"})})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Gemaakt door:"}),Object(a.jsx)("p",{children:"Nathan Neelis"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Front End Applications"}),Object(a.jsx)("p",{children:"In opdracht van de Volkskrant"})]})]})};function st(){var t=Object(r.useState)(null),e=Object(j.a)(t,2),n=e[0],i=e[1];return Object(r.useEffect)((function(){function t(){return(t=Object(l.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://gist.githubusercontent.com/NathanNeelis/b28e16c0433b12da6bc716b276901ae9/raw/402754fa45924af802d06c5672043153bb990d5b/NPR_park_and_ride",t.next=3,fetch("https://gist.githubusercontent.com/NathanNeelis/b28e16c0433b12da6bc716b276901ae9/raw/402754fa45924af802d06c5672043153bb990d5b/NPR_park_and_ride");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,i(n);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(a.jsx)("div",{className:"App",style:bt,children:Object(a.jsxs)("div",{className:"Content",children:[Object(a.jsxs)("section",{children:[Object(a.jsx)(u,{title:"Laat je auto buiten de stad!"}),Object(a.jsx)(_,{content:ot}),Object(a.jsx)(L,{}),Object(a.jsx)(G,{title:"Maar zijn er genoeg P+R faciliteiten?"}),Object(a.jsx)(at,{target:"#statistics",content:"Bekijk jouw stad!"})]}),n&&Object(a.jsxs)("section",{id:"statistics",children:[Object(a.jsx)(et,{allData:n}),Object(a.jsx)(at,{target:"#d3BarChart",content:"P+R in de Randstad"})]}),n&&Object(a.jsxs)("section",{id:"d3BarChart",children:[Object(a.jsx)(G,{title:"Hoe goed facaliteren de randstad steden de Park & Rides mogelijkheden?"}),Object(a.jsx)(_,{content:dt}),Object(a.jsx)(U,{data:f(n)}),Object(a.jsx)(at,{target:"#endConclusion",content:"Lees de conclusie"})]}),Object(a.jsxs)("section",{id:"endConclusion",children:[Object(a.jsx)(G,{title:"Welke randstad is goed te bereiken met Park & Ride faciliteiten?"}),Object(a.jsx)(it,{cityName:"Rotterdam",title:"maakt veel gebruik van Park & Ride faciliteiten",bron:ut,conclusion:lt}),Object(a.jsx)(it,{cityName:"Delft",title:"maakt minder gebruik van Park & Ride faciliteiten",conclusion:jt})]}),Object(a.jsx)("section",{className:"footer",children:Object(a.jsx)(ct,{nbcLink:ut})})]})})}var ot="De steden worden jaarlijks steeds drukker en drukker. In het centrum is dan ook bijna geen ruimte meer om je auto kwijt te kunnen. Dit is dan ook de reden waarom steden goed te bereiken zijn het het openbaar vervoer. Maar aan het OV hangt ook wel een prijskaartje, zeker als je met meerdere mensen reist. Maar je auto bij een stad parkeren is ook niet goedkoop. Er zijn ook mensen die met de auto naar het station rijden om vanaf daar verder te gaan met het OV. Maar lang niet bij alle stations kan je goed parkeren. Neem Bijvoorbeeld Amsterdam Centraal, als je er al kan parkeren betaal je waarschijnlijk ook nog eens de hoofdprijs. Gelukkig is er een oplossing...",dt="In de staafdiagram hieronder is af te lezen hoeveel P+R faciliteiten er zijn in de Randstad en hoeveel parkeerplaatsen deze hebben. Door de checkbox aan te vinken is te lezen hoeveel parkeerplaats elke stad in de randstad totaal heeft.",lt="Uit de data komt Rotterdam het best naar voren. Rotterdam is met maar liefst 17 P+R's te bereiken en heeft het hoogst aantal P+R parkeerplaatsen. Zelfs meer dan Amsterdam, terwijl in Amsterdam meer toeristen komen volgens het ",jt="Delft komt minder goed uit de data, maar misschien heeft Delft niet zoveel P+R faciliteiten nodig. Delft zal minder toerisme hebben dan een stad als Amsterdam of Rotterdam, en mogelijk ook wel een minder groot parkeerprobleem rondom/in de binnenstad waardoor het niet dringend nodig is om auto's te weren.",ut="https://dashboard.nbtc.nl/dashboard/staat-van-bestemming-nl/bezoekers-2/",bt={height:"100%",backgroundImage:"url(".concat(Z,")"),backgroundPosition:"center",backgroundAttachment:"fixed",backgroundSize:"cover"},ht=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),i(t),c(t)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(st,{})}),document.getElementById("root")),ht()}},[[117,1,2]]]);
//# sourceMappingURL=main.bd259c13.chunk.js.map