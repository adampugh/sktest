(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.22dea327.png"},33:function(e,t,a){e.exports=a(87)},38:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(28),l=a.n(r),s=(a(38),a(7)),i=a(8),o=a(10),m=a(9),u=a(11),v=a(6),d=a(13),_=a(29),h=a.n(_).a.create({baseURL:"https://www.skiddle.com/api/v1"}),E=a(16),p=a.n(E),g=a(12),f=function(e){var t=e.name,a=e.date,n=e.desc,r=e.img,l=e.venue,s=e.id;return c.a.createElement("div",{className:"searchEvent"},c.a.createElement("img",{src:r,alt:t}),c.a.createElement("div",{className:"searchEvent__text"},c.a.createElement("h2",{className:"title"},t),c.a.createElement("p",{className:"searchEvent__text__desc"},n),c.a.createElement("div",{className:"searchEvent__text__date"},c.a.createElement(g.a,null),c.a.createElement("p",null,a)),c.a.createElement("div",{className:"searchEvent__text__venue"},c.a.createElement(g.c,null),c.a.createElement("p",null,l)),c.a.createElement(v.b,{to:"/event/".concat(s)},c.a.createElement("button",{className:"btn"},"view details"))))},b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={keyword:"",events:[]},a.handleInput=function(e){a.setState({keyword:e.target.value})},a.handleEnter=function(e){"Enter"===e.key&&a.onSubmit()},a.onSubmit=function(){var e=a.state.keyword;h.get("/events/search/?api_key=".concat("008f1e6099ecc48e990e3776784d447b","&keyword=").concat(e)).then(function(e){a.setState({events:e.data.results})}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.keyword,a=e.events;return c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"search__hero"},c.a.createElement("div",{className:"container"},c.a.createElement("img",{className:"search__hero__logo",src:p.a,alt:"logo"}),c.a.createElement("input",{className:"search__hero__input",placeholder:"Search for events",value:t,onChange:this.handleInput,onKeyPress:this.handleEnter}))),c.a.createElement("div",{className:"search__events"},c.a.createElement("div",{className:"search__events__grid container"},a.map(function(e){var t=e.id,a=e.eventname,n=e.date,r=e.description,l=e.largeimageurl,s=e.venue;return c.a.createElement(f,{key:t,id:t,name:a,date:n,desc:r,img:l,venue:s.name})}))))}}]),t}(n.Component),N=function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement(v.b,{to:"/"},c.a.createElement("img",{src:p.a,alt:"logo"})))},w=a(32),y=a.n(w),k=function(){return c.a.createElement("div",{className:"spinner"},c.a.createElement(y.a,{type:"Audio",color:"#00BFFF",height:"100",width:"100"}))},j=function(e){var t=e.name,a=e.img,n=e.id;return c.a.createElement("div",{className:"eventArtist"},c.a.createElement("img",{className:"eventArtist__img",src:a,alt:t}),c.a.createElement("div",{className:"eventArtist__text"},c.a.createElement("h1",{className:"title"},t),c.a.createElement(v.b,{to:"/artist/".concat(n)},c.a.createElement("button",{className:"btn"},"view artist"))))},O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={event:{},loading:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;h.get("/events/".concat(t,"/?api_key=").concat("008f1e6099ecc48e990e3776784d447b")).then(function(t){e.setState({event:t.data.results,loading:!1})}).catch(function(e){})}},{key:"render",value:function(){var e=this.state.event,t=e.artists,a=e.venue,n=e.eventname,r=e.date,l=e.openingtimes,s=e.MinAge,i=e.largeimageurl,o=e.description;return this.state.loading?c.a.createElement(k,null):c.a.createElement("div",{className:"event"},c.a.createElement(N,null),c.a.createElement("div",{className:"event__hero"},c.a.createElement("div",{className:"event__hero__wrapper container"},c.a.createElement("div",{className:"event__hero__info"},c.a.createElement("h1",{className:"title"},n),c.a.createElement("div",{className:"event__hero__info__text"},c.a.createElement(g.c,null),c.a.createElement("p",null,a.name)),c.a.createElement("div",{className:"event__hero__info__text"},c.a.createElement(g.a,null),c.a.createElement("p",null,r)),c.a.createElement("div",{className:"event__hero__info__text"},c.a.createElement(g.b,null),c.a.createElement("p",null,l.doorsopen)),c.a.createElement("div",{className:"event__hero__info__text"},c.a.createElement(g.d,null),c.a.createElement("p",null,"Minimum Age: ",s))),c.a.createElement("img",{className:"event__hero__img",src:i,alt:"event"}))),c.a.createElement("div",{className:"event__desc container"},c.a.createElement("p",null,o)),c.a.createElement("div",{className:"event__artists container"},c.a.createElement("h1",{className:"title"},"Artists"),t.map(function(e){var t=e.artistid,a=e.image,n=e.name;return c.a.createElement(j,{key:t,img:a,name:n,id:t})})))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={artist:{},loading:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;h.get("/artist/".concat(t,"/?api_key=").concat("008f1e6099ecc48e990e3776784d447b")).then(function(t){e.setState({artist:t.data.results,loading:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.artist,t=e.description,a=e.name,n=e.imageurl;return this.state.loading?c.a.createElement(k,null):c.a.createElement("div",{className:"artist"},c.a.createElement(N,null),c.a.createElement("div",{className:"artist__wrapper container"},c.a.createElement("div",{className:"artist__img"},c.a.createElement("img",{src:n,alt:a})),c.a.createElement("div",{className:"artist__text"},c.a.createElement("h1",{className:"title"},a),c.a.createElement("p",null,t))),c.a.createElement("div",{className:"artist__btn container"},c.a.createElement(v.b,{to:"/"},c.a.createElement("button",{className:"btn"},"Home"))))}}]),t}(n.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(v.a,null,c.a.createElement(d.a,{exact:!0,path:"/",component:b}),c.a.createElement(d.a,{exact:!0,path:"/event/:id",component:O}),c.a.createElement(d.a,{exact:!0,path:"/artist/:id",component:x}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.6aef231b.chunk.js.map