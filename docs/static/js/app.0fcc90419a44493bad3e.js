webpackJsonp([1],{"21UZ":function(t,e,a){"use strict";var s=a("5mxT");a("6A3X"),e.a={name:"MessageContainer",props:{messages:Array},components:{"message-item":s.a}}},"5mxT":function(t,e,a){"use strict";function s(t){a("JI1v")}var r=a("xzJ+"),n=a("9ofa"),i=a("VU/8"),o=s,c=i(r.a,n.a,!1,o,"data-v-3e098604",null);e.a=c.exports},"6A3X":function(t,e){},"9HJN":function(t,e,a){"use strict";var s=a("w7XY"),r=a("m9gn"),n=a("zNrp"),i=a("wBWz"),o=a("YqeF");e.a={name:"CurrentWeather",components:{"weather-summary":r.a,"weather-data":n.a,"load-spinner":i.a,"message-container":o.a},data:function(){return{weatherData:null,messages:[],query:"",showLoading:!1}},created:function(){var t=this;this.showLoading=!0;var e="currentWeather_"+this.$route.params.cityId;this.$ls.get(e)?(console.log("Cache detected for "+e+"."),this.weatherData=this.$ls.get(e),this.showLoading=!1):(console.log("No cache detected for "+e+"."),s.a.get("weather",{params:{id:this.$route.params.cityId}}).then(function(a){t.showLoading=!1,t.weatherData=a.data,t.$ls.set(e,t.weatherData,9e5)}).catch(function(e){t.showLoading=!1,t.messages.push({type:"error",text:e.message})}))}}},"9ZOA":function(t,e){},"9ofa":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",appear:"",tag:"div"}},[a("li",{directives:[{name:"show",rawName:"v-show",value:t.showMessage,expression:"showMessage"}],class:[t.message.type,"message"]},[t._v("\n    "+t._s(t.message.text)+"\n    "),a("button",{on:{click:t.close}},[t._v("close")])])])},r=[],n={render:s,staticRenderFns:r};e.a=n},AAsO:function(t,e,a){"use strict";e.a={name:"WeatherData",data:function(){return{}},props:{weatherData:Object}}},Af9I:function(t,e){},DU19:function(t,e){},I9oQ:function(t,e,a){"use strict";var s=a("bOdI"),r=a.n(s),n=a("w7XY"),i=a("m9gn"),o=a("zNrp"),c=a("wBWz"),u=a("YqeF");e.a={name:"Forecast",components:{"weather-summary":i.a,"weather-data":o.a,"message-container":u.a,"load-spinner":c.a},data:function(){return r()({weatherData:null,messages:[],query:"",showLoading:!1},"messages",[])},created:function(){var t=this;this.showLoading=!0;var e="forecast_"+this.$route.params.cityId;this.$ls.get(e)?(console.log("No cache detected for "+e+"."),this.weatherData=this.$ls.get(e),this.showLoading=!1):(console.log("No cache detected for "+e+"."),n.a.get("forecast",{params:{id:this.$route.params.cityId}}).then(function(e){t.showLoading=!1,t.weatherData=e.data,t.$ls.set(cacheLabe,t.weatherData,9e5)}).catch(function(e){t.showLoading=!1,t.messages.push({type:"error",text:e.message})}))},filters:{formatDate:function(t){var e=new Date(1e3*t),a=["January","February","March","April","May","June","July","August","September","October","November","December"],s=e.getDate(),r=e.getMonth(),n=e.getHours();return 12===n?n="Noon":0===n?n="Midnight":n>12?n=n-12+"PM":n<12&&(n+="AM"),a[r]+" "+s+" @ "+n}}}},JI1v:function(t,e){},JMnq:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.weatherData,function(e){return a("div",{staticClass:"weatherSummary"},[a("img",{attrs:{src:"http://openweathermap.org/img/w/"+e.icon+".png",alt:e.main}}),t._v(" "),a("br"),t._v(" "),a("b",[t._v(t._s(e.main))])])}))},r=[],n={render:s,staticRenderFns:r};e.a=n},KCAG:function(t,e,a){"use strict";e.a={name:"CubeSpinner"}},M93x:function(t,e,a){"use strict";function s(t){a("R3Hx")}var r=a("xJD8"),n=a("oFx+"),i=a("VU/8"),o=s,c=i(r.a,n.a,!1,o,null,null);e.a=c.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("M93x"),n=a("YaEn"),i=a("yXtV"),o=a.n(i),c={namespace:"weather__"};s.a.use(o.a,c),s.a.config.productionTip=!1,new s.a({el:"#app",router:n.a,template:"<App/>",components:{App:r.a}})},PAXd:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-container"},[t.messages.length>0?a("ul",t._l(t.messages,function(t,e){return a("message-item",{key:e,attrs:{message:t}})})):t._e()])},r=[],n={render:s,staticRenderFns:r};e.a=n},QZMn:function(t,e,a){"use strict";function s(t){a("sMmj")}var r=a("TTXs"),n=a("lRgo"),i=a("VU/8"),o=s,c=i(r.a,n.a,!1,o,"data-v-7824b45d",null);e.a=c.exports},R3Hx:function(t,e){},TTXs:function(t,e,a){"use strict";e.a={name:"FavoriteCities",data:function(){return{}},props:{favoriteCities:Array},methods:{removeCity:function(t){var e=this.favoriteCities.indexOf(t);this.favoriteCities.splice(e,1),this.$ls.set("favoriteCities",this.favoriteCities)}}}},XJ5f:function(t,e,a){"use strict";e.a={name:"WeatherSummary",data:function(){return{}},props:{weatherData:Array}}},XZAO:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Five Day Hourly Forecast "),t.weatherData?a("span",[t._v(" for "+t._s(t.weatherData.city.name)+", "+t._s(t.weatherData.city.country))]):t._e()]),t._v(" "),a("message-container",{attrs:{messages:t.messages}}),t._v(" "),a("p",[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:t.$route.params.cityId}}}},[t._v("Current Weather "),t.weatherData?a("span",[t._v(" for "+t._s(t.weatherData.city.name)+", "+t._s(t.weatherData.city.country))]):t._e()])],1),t._v(" "),t.weatherData?a("ul",{staticClass:"forecast"},[a("transition-group",{attrs:{name:"fade",tag:"div",appear:""}},t._l(t.weatherData.list,function(e){return a("li",{key:e.dt},[a("h3",[t._v(t._s(t._f("formatDate")(e.dt)))]),t._v(" "),a("weather-summary",{attrs:{weatherData:e.weather}}),t._v(" "),a("weather-data",{attrs:{weatherData:e.main}})],1)}))],1):t._e(),t._v(" "),t.showLoading?a("load-spinner"):t._e()],1)},r=[],n={render:s,staticRenderFns:r};e.a=n},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),r=a("/ocq"),n=a("ZpnF"),i=a("wAgz"),o=a("jbv3");s.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"CitySearch",component:n.a},{path:"/:cityId/current",name:"CurrentWeather",component:i.a},{path:"/:cityId/forecast",name:"Forecast",component:o.a}]})},YqeF:function(t,e,a){"use strict";function s(t){a("DU19")}var r=a("21UZ"),n=a("PAXd"),i=a("VU/8"),o=s,c=i(r.a,n.a,!1,o,"data-v-50a4fe20",null);e.a=c.exports},ZTKi:function(t,e,a){"use strict";var s=a("w7XY"),r=a("m9gn"),n=a("zNrp"),i=a("wBWz"),o=a("YqeF"),c=a("QZMn");e.a={name:"CitySearch",components:{"weather-summary":r.a,"weather-data":n.a,"load-spinner":i.a,"message-container":o.a,"favorite-cities":c.a},data:function(){return{results:null,query:"",showLoading:!1,messages:[],favorites:[]}},created:function(){this.$ls.get("favoriteCities")&&(this.favorites=this.$ls.get("favoriteCities"))},methods:{saveCity:function(t){this.favorites.push(t),this.$ls.set("favoriteCities",this.favorites)},getCities:function(){var t=this;this.results=null,this.showLoading=!0;var e="citySearch_${this.query}";this.$ls.get(e)?(consle.log("Valid cache detected for "+e+"."),this.results=this.$ls.get(e),this.showLoading=!1):(console.log("No cache detected for "+e+"."),s.a.get("find",{params:{q:this.query}}).then(function(a){t.results=a.data,t.$ls.set(e,t.results,9e5),t.showLoading=!1}).catch(function(e){t.messages.push({type:"error",text:e.message}),t.showLoading=!1}))}}}},ZpnF:function(t,e,a){"use strict";function s(t){a("Af9I")}var r=a("ZTKi"),n=a("mloo"),i=a("VU/8"),o=s,c=i(r.a,n.a,!1,o,"data-v-61f2d28f",null);e.a=c.exports},eGCS:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Loading...")]),t._v(" "),a("div",{staticClass:"sk-folding-cube"},[a("div",{staticClass:"sk-cube1 sk-cube"}),t._v(" "),a("div",{staticClass:"sk-cube2 sk-cube"}),t._v(" "),a("div",{staticClass:"sk-cube4 sk-cube"}),t._v(" "),a("div",{staticClass:"sk-cube3 sk-cube"})])])}],n={render:s,staticRenderFns:r};e.a=n},ee6c:function(t,e){},gida:function(t,e){},jHbs:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dl",[t.weatherData.temp!=t.weatherData.temp_min?a("dt",[t._v("Current Temp")]):t._e(),t._v(" "),t.weatherData.temp!=t.weatherData.temp_min?a("dd",[t._v(t._s(t.weatherData.temp)+"°F")]):t._e(),t._v(" "),a("dt",[t._v("Humidity")]),t._v(" "),a("dd",[t._v(t._s(t.weatherData.humidity)+"%")]),t._v(" "),a("dt",[t._v("High")]),t._v(" "),a("dd",[t._v(t._s(t.weatherData.temp_max)+"°F")]),t._v(" "),a("dt",[t._v("Low")]),t._v(" "),a("dd",[t._v(t._s(t.weatherData.temp_min)+"°F")])])},r=[],n={render:s,staticRenderFns:r};e.a=n},jXEj:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Current Weather "),t.weatherData?a("span",[t._v(" for "+t._s(t.weatherData.name)+", "+t._s(t.weatherData.sys.country))]):t._e()]),t._v(" "),a("message-container",{attrs:{messages:t.messages}}),t._v(" "),a("p",[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),a("router-link",{attrs:{to:{name:"Forecast",params:{cityId:t.$route.params.cityId}}}},[t._v("View 5-Day Forecast")])],1),t._v(" "),t.showLoading?a("load-spinner"):t._e(),t._v(" "),t.weatherData?a("div",[a("weather-summary",{attrs:{weatherData:t.weatherData.weather}}),t._v(" "),a("weather-data",{attrs:{weatherData:t.weatherData.main}})],1):t._e()],1)},r=[],n={render:s,staticRenderFns:r};e.a=n},jbv3:function(t,e,a){"use strict";function s(t){a("xyQx")}var r=a("I9oQ"),n=a("XZAO"),i=a("VU/8"),o=s,c=i(r.a,n.a,!1,o,"data-v-94e2113e",null);e.a=c.exports},lRgo:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"favorite-cities"},[t._m(0),t._v(" "),t.favoriteCities.length<1?a("li",[t._v("No favorites cities to display.")]):t._e(),t._v(" "),t._l(t.favoriteCities,function(e){return a("li",[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:e.id}}}},[t._v(t._s(e.name))]),t._v(" "),a("button",{staticClass:"remove",on:{click:function(a){t.removeCity(e)}}},[t._v("x")])],1)})],2)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("h2",[t._v("Favorite Cities")])])}],n={render:s,staticRenderFns:r};e.a=n},m9gn:function(t,e,a){"use strict";function s(t){a("ee6c")}var r=a("XJ5f"),n=a("JMnq"),i=a("VU/8"),o=s,c=i(r.a,n.a,!1,o,"data-v-95b231de",null);e.a=c.exports},mloo:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("favorite-cities",{attrs:{favoriteCities:t.favorites}}),t._v(" "),a("h2",[t._v("City Search")]),t._v(" "),a("message-container",{attrs:{messages:t.messages}}),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.getCities(e)}}},[a("p",[t._v("Enter city name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Paris, TX"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),a("button",{attrs:{type:"submit"}},[t._v("Go")])])]),t._v(" "),t.showLoading?a("load-spinner"):t._e(),t._v(" "),t.results&&t.results.list.length>0?a("ul",{staticClass:"cities"},t._l(t.results.list,function(e){return a("li",[a("h2",[t._v(t._s(e.name)+", "+t._s(e.sys.country))]),t._v(" "),a("p",[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:e.id}}}},[t._v("View Current Weather")])],1),t._v(" "),a("weather-summary",{attrs:{weatherData:e.weather}}),t._v(" "),a("weather-data",{attrs:{weatherData:e.main}}),t._v(" "),a("p",[a("button",{staticClass:"save",on:{click:function(a){t.saveCity(e)}}},[t._v("Save City to Favorites")])])],1)})):t._e()],1)},r=[],n={render:s,staticRenderFns:r};e.a=n},"oFx+":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("Weather Service")]),t._v(" "),a("router-view")],1)},r=[],n={render:s,staticRenderFns:r};e.a=n},pQcb:function(t,e){},sMmj:function(t,e){},w7XY:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var s=a("//Fk"),r=a.n(s),n=a("mtWM"),i=a.n(n),o=i.a.create({baseURL:"//api.openweathermap.org/data/2.5/"});o.interceptors.request.use(function(t){return t.params.APPID="f7ccb8ab9bbffa1c8579bbfbd133b663",t.params.units="imperial",t},function(t){return r.a.reject(t)})},wAgz:function(t,e,a){"use strict";function s(t){a("gida")}var r=a("9HJN"),n=a("jXEj"),i=a("VU/8"),o=s,c=i(r.a,n.a,!1,o,"data-v-fe1b250e",null);e.a=c.exports},wBWz:function(t,e,a){"use strict";function s(t){a("pQcb")}var r=a("KCAG"),n=a("eGCS"),i=a("VU/8"),o=s,c=i(r.a,n.a,!1,o,"data-v-68c3cd60",null);e.a=c.exports},xJD8:function(t,e,a){"use strict";e.a={name:"app"}},xyQx:function(t,e){},"xzJ+":function(t,e,a){"use strict";a("6A3X"),e.a={name:"MessageContainer",props:{message:Object},data:function(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}},created:function(){setTimeout(this.close,5e3)}}},zNrp:function(t,e,a){"use strict";function s(t){a("9ZOA")}var r=a("AAsO"),n=a("jHbs"),i=a("VU/8"),o=s,c=i(r.a,n.a,!1,o,"data-v-cd383bbe",null);e.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.0fcc90419a44493bad3e.js.map