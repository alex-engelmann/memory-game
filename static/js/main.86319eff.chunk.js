(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Het Steen and Port",image:"https://cdn.loc.gov/service/pnp/ppmsca/52200/52287v.jpg",chosen:!1,location:"Antwerp, Belgium"},{id:2,name:"Brandenburg Gate",image:"https://cdn.loc.gov/service/pnp/ppmsca/52500/52524v.jpg",chosen:!1,location:"Berlin, Germany"},{id:3,name:"Grand Pyramid",image:"https://cdn.loc.gov/service/pnp/ppmsca/03000/03030v.jpg",chosen:!1,location:"Cairo, Egypt"},{id:4,name:"The Tower of Iwan Weliky and the Czar of Cannons",image:"https://cdn.loc.gov/service/pnp/ppmsca/52700/52737v.jpg",chosen:!1,location:"Moscow, Russia"},{id:5,name:"Taj Mahal",image:"https://cdn.loc.gov/service/pnp/ppmsca/52600/52646v.jpg",chosen:!1,location:"Agra, India"},{id:6,name:"Houses of Parliament",image:"https://cdn.loc.gov/service/pnp/ppmsca/52400/52404v.jpg",chosen:!1,location:"London, England"},{id:7,name:"St. Honorat Monastery",image:"https://cdn.loc.gov/service/pnp/ppmsca/52400/52468v.jpg",chosen:!1,location:"Cannes, France"},{id:8,name:"Trans-Mississippi Exposition",image:"https://cdn.loc.gov/service/pnp/ppmsca/52900/52914v.jpg",chosen:!1,location:"Omaha, Nebraska, USA"},{id:9,name:"Basilica of St. Nicholas",image:"https://cdn.loc.gov/service/pnp/ppmsc/05700/05766v.jpg",chosen:!1,location:"Amsterdam, Netherlands"},{id:10,name:"Royal Palace",image:"https://cdn.loc.gov/service/pnp/ppmsca/52800/52814v.jpg",chosen:!1,location:"Madrid, Spain"},{id:11,name:"Scott Monument",image:"https://cdn.loc.gov/service/pnp/ppmsc/07500/07587v.jpg",chosen:!1,location:"Edinburgh, Scotland"},{id:12,name:"Am Hof Square",image:"https://cdn.loc.gov/service/pnp/ppmsca/52200/52282v.jpg",chosen:!1,location:"Vienna, Austria"}]},,,function(e,a,n){e.exports=n(20)},,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),o=n(2),r=n.n(o),i=n(3),l=n(4),s=n(7),m=n(5),p=n(8);n(15);var v=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})),c.a.createElement("div",{className:"content"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("strong",null,"Name:")," ",e.name),c.a.createElement("li",null,c.a.createElement("strong",null,"Location:")," ",e.location))),c.a.createElement("span",{onClick:function(){return e.removeTravel(e.id)},className:"remove"},c.a.createElement("i",{className:"fas fa-suitcase"})))};n(16);var d=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};n(17);var u=function(e){return c.a.createElement("h1",{className:"title"},e.children)};n(18);function h(e){return c.a.createElement("div",{className:"description"},e.children)}var g=n(6),f=function(e){function a(){var e,n;Object(i.a)(this,a);for(var t=arguments.length,c=new Array(t),o=0;o<t;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={currentScore:0,travel:g},n.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),t=e[a];e[a]=e[n],e[n]=t}return e},n.removeTravel=function(e){n.setState({TravelCard:n.state.travel.map(function(a){return a.id===e&&(!0===a.chosen?(alert("Play again!"),window.location.reload()):(a.chosen=!0,n.setState({currentScore:n.state.currentScore+1}),12===n.state.currentScore&&(alert("You won!"),window.location.reload()))),a})}),n.shuffleArray(n.state.travel)},n}return Object(p.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(d,null,c.a.createElement(u,null,"Travel Destinations"),c.a.createElement(h,null,"Below are 12 images made by a Swiss travel agency in the late 19th century. Learn more ",c.a.createElement("a",{href:"https://www.loc.gov/collections/photochrom-prints/about-this-collection/"},"here"),".  Travel to each destination only once, using the suitcase icon, and try to get a perfect score. ",c.a.createElement("br",null),"Current Score: ",this.state.currentScore,"/12"),c.a.createElement("div",{className:"container"},this.state.travel.map(function(a){return c.a.createElement(v,{removeTravel:e.removeTravel,id:a.id,key:a.id,name:a.name,image:a.image,chosen:a.chosen,location:a.location})})))}}]),a}(t.Component);n(19);r.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.86319eff.chunk.js.map