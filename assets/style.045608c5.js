import{x as $,y as C}from"./vendor.94a8c413.js";var I=Object.defineProperty,q=Object.defineProperties,S=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,y=(t,r,e)=>r in t?I(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,a=(t,r)=>{for(var e in r||(r={}))h.call(r,e)&&y(t,e,r[e]);if(d)for(var e of d(r))m.call(r,e)&&y(t,e,r[e]);return t};const k=t=>t?Object.entries(t).reduce((r,[e,l])=>{return e=`on${e=e.charAt(0).toUpperCase()+e.slice(1)}`,n=a({},r),q(n,S({[e]:l}));var n},{}):null,o=(t,r={},e)=>{const l=r,{props:n,domProps:f,on:g}=l,v=((s,u)=>{var c={};for(var i in s)h.call(s,i)&&u.indexOf(i)<0&&(c[i]=s[i]);if(s!=null&&d)for(var i of d(s))u.indexOf(i)<0&&m.call(s,i)&&(c[i]=s[i]);return c})(l,["props","domProps","on"]);let b=k(g);const w=a(a(a(a({},v),n),f),b);return C(t,w,e)},p=t=>o("link",{rel:"preconnect",href:t});var j=$({props:{announce:{type:String,required:!1,default:"Watch"},id:{type:String,required:!0},title:{type:String,required:!0},activatedClass:{type:String,required:!1,default:"lyt-activated"},adNetwork:{type:Boolean,required:!1,default:!0},iframeClass:{type:String,required:!1,default:""},cookie:{type:Boolean,required:!1,default:!1},params:{type:String,required:!1,default:""},playerClass:{type:String,required:!1,default:"lty-playbtn"},playlist:{type:Boolean,required:!1,default:!1},playlistCoverId:{type:String,required:!1,default:""},poster:{type:String,required:!1,default:"hqdefault"},wrapperClass:{type:String,required:!1,default:"yt-lite"},muted:{type:Boolean,required:!1,default:!1}},data:()=>({preconnected:!1,iframe:!1}),computed:{videoId(){return encodeURIComponent(this.id)},posterUrl(){const t=typeof this.playlistCoverId=="string"?encodeURIComponent(this.playlistCoverId):null;return this.playlist?`https://i.ytimg.com/vi/${t}/${this.poster}.jpg`:`https://i.ytimg.com/vi/${this.videoId}/${this.poster}.jpg`},ytUrl(){return this.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com"},mutedImp(){return this.muted?"&mute=1":""},iframeSrc(){return this.playlist?`${this.ytUrl}/embed/videoseries?autoplay=1&list=${this.videoId}${this.mutedImp}&${this.params}`:`${this.ytUrl}/embed/${this.videoId}?autoplay=1&state=1${this.mutedImp}&${this.params}`}},emits:["iframeAdded"],methods:{warmConnections(){this.preconnected||(this.preconnected=!0)},addIframe(){this.iframe||(this.$emit("iframeAdded"),this.iframe=!0)}},render(){return[o("link",{rel:"preload",href:this.posterUrl,as:"image"}),this.preconnected?p(this.ytUrl):null,this.preconnected?p("https://www.google.com"):null,this.adNetwork?p("https://static.doubleclick.net"):null,this.adNetwork?p("https://googleads.g.doubleclick.net"):null,o("div",{on:{pointerover:this.warmConnections,click:this.addIframe},class:`${this.wrapperClass} ${this.iframe&&this.activatedClass}`,"data-title":this.title,style:{backgroundImage:`url(${this.posterUrl})`},tabIndex:0},[o("button",{class:this.playerClass,ariaLabel:`${this.announce} ${this.title}`}),this.iframe?o("iframe",{class:this.iframeClass,title:this.title,width:560,height:315,frameborder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,src:this.iframeSrc}):null])]}});export{j as h};
