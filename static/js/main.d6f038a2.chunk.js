(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{46:function(e,a,t){e.exports=t(81)},81:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),s=t(8),o=t(9),i=t(11),u=t(10),m=t(5),p=t(83),d=t(84),h=t(82),E=t(85),y=t(17),v=t(18),f=[{id:0,name:"Hepsi",value:""},{id:1,name:"Film",value:"movie"},{id:2,name:"Dizi",value:"series"},{id:3,name:"B\xf6l\xfcm",value:"episode"},{id:4,name:"Oyun",value:"game"}],b=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{color:"success"},f.find((function(a){return a.value===e.props.type})).name)}}]),t}(r.a.Component),g=function(){return r.a.createElement("div",{className:"contaier mt-5 text-center p-5"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow text-success m-5",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-warning m-5",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-danger m-5",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))},R=t(90),j=function(e){return r.a.createElement(p.a,null,r.a.createElement(R.a,{className:"mt-5",color:e.type?e.type:"info"},e.msg?e.msg:"L\xfctfen bir mesaj giriniz"))},O=t(13),I=function(){return{type:"PAGE_DECREASE",payload:1}},C=function(){return{type:"PAGE_INCREASE",payload:1}},S=function(){return{type:"PAGE_RESET"}},B=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={tableHeader:["IMDB Id","Film/Dizi Ad\u0131","Y\u0131l","Tip"],searchMovies:[],searchError:null,searchList:[],totalPage:null,page:null},e.fecthMoviesData=function(){var a=e.props,t=a.searchMovies,n=a.searchError,r=t.Search;e.setState({searchMovies:t,searchError:n,searchList:r}),e.handlePagination()},e.handlePagination=function(){var a=e.state.searchMovies;if(a&&"True"===a.Response){var t=parseInt(a.totalResults);e.setState({totalPage:t/10})}},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.searchMovies,t=e.searchError;(a||t)&&this.fecthMoviesData()}},{key:"componentDidUpdate",value:function(e,a,t){var n=this.props,r=n.searchMovies,c=n.searchError;r===e.searchMovies&&c===e.searchError||this.fecthMoviesData()}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{fluid:!0},this.state.searchList?r.a.createElement("div",null,r.a.createElement(d.a,{hover:!0},r.a.createElement("thead",{className:"bg-dark text-light"},r.a.createElement("tr",null,this.state.tableHeader.map((function(e){return r.a.createElement("th",{key:e}," ",e," ")})))),r.a.createElement("tbody",null,this.state.searchList.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement(h.a,{className:"badge badge-pill",color:"warning"},e.imdbID)),r.a.createElement("td",null,r.a.createElement(y.b,{to:"/movies-app-for-react/detay/"+e.imdbID+"-"+e.Title+"-detayi"},e.Title)),r.a.createElement("td",null,r.a.createElement(h.a,{className:"badge badge-pill",color:"info"},e.Year)),r.a.createElement("td",null," ",r.a.createElement(b,{type:e.Type})," "))})))),parseInt(this.state.searchMovies.totalResults)>10&&r.a.createElement("div",null,r.a.createElement("p",null,"Toplam ",r.a.createElement("b",null,this.state.searchMovies.totalResults)," kay\u0131t bulunmaktad\u0131r."),r.a.createElement("p",null," ",r.a.createElement("b",null,10*this.props.pageCount,"-",10*(this.props.pageCount+1))," aras\u0131 kay\u0131tlar g\xf6r\xfcnt\xfclenmektedir."),this.props.pageCount>0&&r.a.createElement(E.a,{onClick:function(){return e.props.pageDecrease()},className:"mr-3",color:"warning"},"Bir \xd6nceki Kay\u0131tlar"),this.props.pageCount<parseInt(this.state.searchMovies.totalResults)/10&&r.a.createElement(E.a,{onClick:function(){return e.props.pageIncrease()},color:"warning"},"Bir Sonraki Kay\u0131tlar"))):r.a.createElement(j,{msg:"Filtrelere uygun sonu\xe7 bulunamad\u0131.",type:"danger"}))}}]),t}(r.a.Component),k=Object(v.b)((function(e){return{searchMovies:e.SearchMoviesReducer.searchMovies,searchError:e.SearchMoviesReducer.searchError,pageCount:e.PageControlReducer}}),(function(e){return Object(O.b)({pageDecrease:I,pageIncrease:C},e)}))(B),M=t(86),A=t(87),N=t(88),w=t(44),_=t.n(w).a.create({params:{apikey:"cb96dbf1",r:"json"}}),D=function(e){return _.get("https://www.omdbapi.com",{params:e})},x=function(e){return function(a){return D(e).then((function(e){var t=e.data;if(200!==e.status)throw t;a({type:"SEARCH_MOVIE_SUCCESS",payload:t})})).catch((function(e){a({type:"SEARCH_MOVIE_FAILURE",payload:e})}))}},P=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={type:null,y:null,s:"Pokemon",params:null,page:0},e.searchMovies=function(){var a={s:e.state.s,type:e.state.type,y:e.state.y?e.state.y:null,page:0===e.state.page?null:e.state.page};e.setState({params:a}),e.props.searchMovies(a)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.searchMovies()}},{key:"componentDidUpdate",value:function(e,a,t){var n=this.props.pageCount,r=this.state.s;n!==e.pageCount&&(this.setState({page:n}),this.searchMovies()),r!==a.s&&this.props.pageReset()}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(M.a,{className:" d-flex justify-content-center"},r.a.createElement(A.a,{xs:2},r.a.createElement("select",{onChange:function(a){return e.setState({type:a.target.value})},className:"form-control rounded-0"},f.map((function(e){return r.a.createElement("option",{key:e.id,value:e.value},e.name)})))),r.a.createElement(A.a,{xs:2},r.a.createElement(N.a,{onChange:function(a){return e.setState({y:parseInt(a.target.value)})},className:"rounded-0",type:"number",placeholder:"Y\u0131l"})),r.a.createElement(A.a,{xs:6},r.a.createElement(N.a,{value:this.state.s,onChange:function(a){return e.setState({s:a.target.value})},className:"rounded-0",placeholder:"Flim ,Dizi ,B\xf6l\xfcm ,Oyun Ad\u0131"})),r.a.createElement(A.a,{xs:2},r.a.createElement(E.a,{onClick:this.searchMovies,className:"rounded-0",color:"success"},"Bul"))))}}]),t}(r.a.Component),T=Object(v.b)((function(e){return{pageCount:e.PageControlReducer}}),(function(e){return Object(O.b)({searchMovies:x,pageReset:S},e)}))(P),L=t(89),H=function(e){return r.a.createElement(p.a,{fluid:!0},r.a.createElement(M.a,{className:"mt-3"},r.a.createElement(A.a,{xs:12},r.a.createElement(L.a,{className:" bg-dark text-light"},r.a.createElement("h1",null,e.data.Title," ",r.a.createElement(h.a,{className:"small",color:"warning"},e.data.imdbRating)," "),r.a.createElement("h5",null,e.data.Released," - ",e.data.Country)))),r.a.createElement(y.b,{className:"btn btn-warning",to:"/movies-app-for-react/"},"\u2190  Anasayfa "),r.a.createElement(M.a,{className:"mt-4"},r.a.createElement(A.a,{xs:3},r.a.createElement("img",{className:"img-thumbnail",src:e.data.Poster,alt:"image"})),r.a.createElement(A.a,{xs:6},r.a.createElement("h3",null,e.data.Title," ",r.a.createElement(b,{type:e.data.Type})),r.a.createElement("p",{className:"mt-5"},r.a.createElement("b",null,"S\xfcre :")," ",e.data.Runtime),r.a.createElement("p",null,r.a.createElement("b",null,"Yazar :")," ",e.data.Writer),r.a.createElement("p",null,r.a.createElement("b",null,"Akt\xf6rler :")," ",e.data.Actors),r.a.createElement("p",null,r.a.createElement("b",null,"Dil :")," ",e.data.Language),r.a.createElement("p",null,r.a.createElement("b",null,"Y\u0131l :")," ",e.data.Year),r.a.createElement("p",null,r.a.createElement("b",null,"T\xfcr :")," ",e.data.Genre),r.a.createElement("p",null,r.a.createElement("b",null,"Tan\u0131t\u0131m :"),"  ",e.data.Plot))))},U=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0,className:"mt-5"},r.a.createElement(M.a,{className:"mt-3 d-flex justify-content-center"},r.a.createElement(A.a,{xs:8},r.a.createElement(T,null))),r.a.createElement("hr",null),r.a.createElement(M.a,null,r.a.createElement(A.a,{xs:12},r.a.createElement(k,null))))}}]),t}(r.a.Component),Y=function(e){return function(a){return D({i:e}).then((function(e){var t=e.data;if(200!==e.status)throw t;a({type:"SEARCH_BY_ID_SUCCESS",payload:t})})).catch((function(e){a({type:"SEARCH_BY_ID_FAILURE",payload:e})}))}},F=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={searchByIdResp:null,searchByIdError:null},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.handleRouteParams()}},{key:"handleRouteParams",value:function(){var e=this.props.match.params.movie.split("-")[0];this.props.searchById(e)}},{key:"componentDidUpdate",value:function(e,a,t){var n=this.props,r=n.searchByIdResp,c=n.searchByIdError;r===e.searchByIdResp&&c===e.searchByIdError||(this.handleRouteParams(),this.setState({searchByIdResp:r,searchByIdError:c}))}},{key:"render",value:function(){return this.state.searchByIdResp?this.state.searchByIdError?r.a.createElement(j,{msg:"Sitemsel Hata ERR38.",type:"danger"}):this.state.searchByIdResp&&"True"===this.state.searchByIdResp.Response?r.a.createElement(H,{data:this.state.searchByIdResp}):r.a.createElement(j,{msg:"B\xf6yle bir sonu\xe7 mevcut de\u011fil"}):r.a.createElement(g,null)}}]),t}(r.a.Component),G=Object(v.b)((function(e){return{searchByIdResp:e.SearchByIdReducer.searchByIdResp,searchByIdError:e.SearchByIdReducer.searchByIdError}}),(function(e){return Object(O.b)({searchById:Y},e)}))(F),z=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0,className:"mt-5 d-flex justify-content-center"},r.a.createElement(L.a,null,"Malesef B\xf6yle Bir Sayfa Mevcut De\u011fil",r.a.createElement("br",null),"Anasayfa d\xf6nmek i\xe7in ",r.a.createElement("b",null,r.a.createElement(y.b,{to:"/"},"t\u0131klay\u0131n\u0131z."))))}}]),t}(r.a.Component),V=function(){return r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/movies-app-for-react/",component:U}),r.a.createElement(m.a,{path:"/movies-app-for-react/detay/:movie",component:G}),r.a.createElement(m.a,{component:z}))},W=t(45),J=t(16),K=Object(O.c)({SearchMoviesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCH_MOVIE_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{searchMovies:a.payload});case"SEARCH_MOVIE_FAILURE":return Object(J.a)(Object(J.a)({},e),{},{searchError:a.payload});default:return e}},SearchByIdReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCH_BY_ID_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{searchByIdResp:a.payload});case"SEARCH_BY_ID_FAILURE":return Object(J.a)(Object(J.a)({},e),{},{searchByIdError:a.payload});default:return e}},PageControlReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PAGE_INCREASE":return e+a.payload;case"PAGE_DECREASE":return e-a.payload;case"PAGE_RESET":return e-e;default:return e}}}),$=Object(O.d)(K,Object(O.a)(W.a)),q=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{store:$},r.a.createElement(V,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(80);l.a.render(r.a.createElement(y.a,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.d6f038a2.chunk.js.map