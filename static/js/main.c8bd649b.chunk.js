(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(44),i=a.n(r),o=(a(66),a(5)),s=a(6),l=a(8),m=a(7),u=a(9),f=(a(68),a(1)),_=a.n(f),p=a(13),d=a.n(p),g=a(115),v=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return"string"===typeof e}).filter(function(e){return isNaN(e.charAt(0))}).join(" ")},h=a(45),E=a.n(h);function b(e,t){var a=v(d.a["vert-center"],d.a["site-title"]),n=v(d.a.link);return c.a.createElement("nav",{className:d.a["cg-nav"]},c.a.createElement("div",{className:d.a.header},c.a.createElement("div",{className:d.a.content},c.a.createElement("figure",null,c.a.createElement("img",{className:"".concat(d.a["vert-center"]," ").concat(d.a["header-logo"]),src:E.a})),c.a.createElement("h1",{className:a},c.a.createElement(g.a,{to:"/"},"Rival Dust")),c.a.createElement("div",{className:n},c.a.createElement(g.a,{to:"/Blog"},"Blog"),c.a.createElement(g.a,{to:"/Games"},"Games"),c.a.createElement(g.a,{to:"/About"},"About\xa0Us")))))}b.contextTypes={router:_.a.object};var j=b,O=a(46),N=a.n(O),x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:N.a.blog},"I'm the Blog")}}]),t}(n.Component),w=a(2),y=a.n(w),k=a(60),M=a(19),A=a.n(M),G=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.df.addEventListener("animationend",this.props.setNextActive)}},{key:"render",value:function(){var e=this,t="".concat(this.props.tagtype);return c.a.createElement(t,{ref:function(t){return e.df=t},className:"".concat(A.a.fader," ").concat(!0===this.props.active?A.a.active:"")},"".concat(this.props.word))}}]),t}(n.Component);G.contextTypes={};var D=G,H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={words:[{word:"Is\xa0Hard\xa0Working",active:!0},{word:"Is\xa0Efficient",active:!1},{word:"Is\xa0Focused",active:!1},{word:"Is\xa0Energetic",active:!1},{word:"Has\xa0a\xa0Pteradactyl",active:!1}],activeIndex:0},a.setNextActive=function(){var e=a.state.activeIndex,t=e>=a.state.words.length-1?0:e+1,n=Object(k.a)({},a.state);n.words[t].active=!0,n.words[e].active=!1,n.activeIndex=t,a.setState(n)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:A.a["parent-container"]},c.a.createElement("div",{className:A.a["fade-container"]},this.state.words.map(function(t,a){return c.a.createElement(D,{key:a,word:t.word,tagtype:"h2",active:t.active,setNextActive:e.setNextActive})})))}}]),t}(n.Component);H.contextTypes={router:_.a.object};var B=a(47),F=a.n(B),I=a(48),P=a.n(I),R=a(49),C=a.n(R),S=a(50),Z=a.n(S),L=a(51),q=a.n(L),K=a(52),T=a.n(K),U=a(116),W=a(117),z=a(118),J=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:y.a["main-section"]},c.a.createElement("div",{className:y.a["top-text"]},c.a.createElement("h1",{className:y.a["title-header"]},"Rival\xa0Dust")),c.a.createElement("figure",{className:y.a.figure},c.a.createElement("img",{className:y.a.image,src:F.a,alt:""}))),c.a.createElement("section",null,c.a.createElement(U.a,null,c.a.createElement(W.a,null,c.a.createElement(z.a,{xs:6,sm:6},c.a.createElement("h2",null,"Zlirp"),c.a.createElement("h3",null,"Gotta\xa0Get\xa0Dem\xa0Gems")),c.a.createElement(z.a,{xs:6,sm:6,className:y.a.vcenter},c.a.createElement("figure",{className:"".concat(y.a.figure," ").concat(y.a["figure-gif"],"  ").concat(y.a["itunes-svg"])},c.a.createElement("a",{href:"https://itunes.apple.com/us/app/zlirp/id1419348285?ls=1&mt=8"},c.a.createElement("img",{className:"".concat(y.a.itunes),src:T.a,alt:""}))))),c.a.createElement(W.a,{className:y.a["gif-row"]},c.a.createElement(z.a,{xs:12,sm:6},c.a.createElement("figure",{className:"".concat(y.a.figure," ").concat(y.a["figure-gif"])},c.a.createElement("img",{className:y.a.gif,src:C.a,alt:""}))),c.a.createElement(z.a,{xs:12,sm:6},c.a.createElement("figure",{className:"".concat(y.a.figure," ").concat(y.a["figure-gif"])},c.a.createElement("img",{className:y.a.gif,src:P.a,alt:""})))),c.a.createElement(W.a,{className:y.a["gif-row"]},c.a.createElement(z.a,{xs:12,sm:6},c.a.createElement("figure",{className:"".concat(y.a.figure," ").concat(y.a["figure-gif"])},c.a.createElement("img",{className:y.a.gif,src:Z.a,alt:""}))),c.a.createElement(z.a,{xs:12,sm:6},c.a.createElement("figure",{className:"".concat(y.a.figure," ").concat(y.a["figure-gif"])},c.a.createElement("img",{className:y.a.gif,src:q.a,alt:""})))))))}}]),t}(n.Component),Q=a(56),X=a.n(Q),V=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:X.a.dc},"About")}}]),t}(n.Component),Y=a(57),$=a.n(Y),ee=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:$.a.blog},"Games")}}]),t}(n.Component),te=a(121),ae=a(120),ne=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(j,null),c.a.createElement("main",null,c.a.createElement(te.a,null,c.a.createElement(ae.a,{exact:!0,path:"/",component:J}),c.a.createElement(ae.a,{exact:!0,path:"/rivaldustcom",component:J}),c.a.createElement(ae.a,{path:"/Blog",component:x}),c.a.createElement(ae.a,{path:"/Games",component:ee}),c.a.createElement(ae.a,{path:"/About",component:V}))))}}]),t}(n.Component),ce=a(119);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(111);i.a.render(c.a.createElement(ce.a,null,c.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},13:function(e,t,a){e.exports={header:"Header_header__1w2up","header-logo":"Header_header-logo__3v34Q","cg-nav":"Header_cg-nav__3rYz-",content:"Header_content__1pIX3","site-title":"Header_site-title__2_2pU","vert-center":"Header_vert-center__2N32F",link:"Header_link__2xbEq",selected:"Header_selected__WPSwp"}},19:function(e,t,a){e.exports={fader:"DropFade_fader__1ESwa",fade:"DropFade_fade__1Rew4",active:"DropFade_active__6Omo9","fade-container":"DropFade_fade-container__kmQ_i","first-text":"DropFade_first-text__1plOd","parent-container":"DropFade_parent-container__2cEKX"}},2:function(e,t,a){e.exports={"main-section":"Main_main-section__3QOJt",section:"Main_section__36nYe",itunes:"Main_itunes__1Dswq",vcenter:"Main_vcenter__cnZus","title-header":"Main_title-header__2KVAZ",h2:"Main_h2__1Pncd","top-text":"Main_top-text__2HM8R","itunes-svg":"Main_itunes-svg__lTG3v",figure:"Main_figure__3N7FM","figure-gif":"Main_figure-gif__1yM63","gif-row":"Main_gif-row__2AikZ",image:"Main_image__3b4ul","hero-copy":"Main_hero-copy__1cnzh",gif:"Main_gif__3qbeo"}},45:function(e,t,a){e.exports=a.p+"static/media/rival_dust_icon_header.3c56f235.png"},46:function(e,t,a){e.exports={blog:"Blog_blog__38fsq"}},47:function(e,t,a){e.exports=a.p+"static/media/Sniper_CityScape.ac2be595.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/ZLiRP_Opening.3dab2a96.gif"},49:function(e,t,a){e.exports=a.p+"static/media/ZLiRP_GamePlay_1.acdc02b2.gif"},50:function(e,t,a){e.exports=a.p+"static/media/ZLiRP_GamePlay_2.31deb9ff.gif"},51:function(e,t,a){e.exports=a.p+"static/media/ZLiRP_GamePlay_3.960cb252.gif"},52:function(e,t,a){e.exports=a.p+"static/media/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.f95ad15b.svg"},56:function(e,t,a){e.exports={dc:"About_dc__3uXBK"}},57:function(e,t,a){e.exports={blog:"Games_blog__2VkS9"}},61:function(e,t,a){e.exports=a(113)},66:function(e,t,a){},68:function(e,t,a){}},[[61,2,1]]]);
//# sourceMappingURL=main.c8bd649b.chunk.js.map