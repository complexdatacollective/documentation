(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{9404:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{g:function(){return r}})},9006:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(9404),i=n(2798),o=n.n(i),l=n(5643),a=n(9599),u=n(7871);let s="locale";function c(e){return"object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e)}function d(e,t){let n;return"string"==typeof e?n=f(t,e):(n={...e},e.pathname&&(n.pathname=f(t,e.pathname))),n}function f(e,t){let n="/"+e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),n+=t}var p=(0,a.forwardRef)(function(e,t){let{href:n,locale:i,prefetch:f,...p}=e,m=(0,l.usePathname)(),g=function(){let e=(0,l.useParams)();return"string"==typeof(null==e?void 0:e[s])?e[s]:(0,u.useLocale)()}(),h=i!==g,[y,v]=(0,a.useState)(()=>c(n)&&i?d(n,i):n);return(0,a.useEffect)(()=>{m&&v(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3?arguments[3]:void 0;if(!c(e)||function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e))return e;let i=t!==n;return(null==t||function(e,t){let n="/".concat(e);return t===n||t.startsWith("".concat(n,"/"))}(t,r)||i)&&null!=t?d(e,t):e}(n,i,g,null!=m?m:void 0))},[g,n,i,m]),h&&(f&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),f=!1),a.createElement(o(),(0,r.g)({ref:t,href:y,prefetch:f},p))})},4435:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return Image}});let r=n(7295),i=n(3589),o=i._(n(9599)),l=r._(n(7456)),a=r._(n(2512)),u=n(417),s=n(1532),c=n(1211);n(1595);let d=n(6946),f=r._(n(5619)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,n,r,i,o){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function g(e){let[t,n]=o.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:a,decoding:u,className:s,style:c,fetchPriority:d,placeholder:f,loading:p,unoptimized:h,fill:y,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:_,setShowAltText:w,onLoad:S,onError:C,...j}=e;return o.default.createElement("img",{...j,...g(d),loading:p,width:a,height:l,decoding:u,"data-nimg":y?"fill":"1",className:s,style:c,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,f,v,b,_,h))},[n,f,v,b,_,C,h,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,v,b,_,h)},onError:e=>{w(!0),"empty"!==f&&_(!0),C&&C(e)}})});function y(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let Image=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(d.RouterContext),r=(0,o.useContext)(c.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=p||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:a}=e,m=(0,o.useRef)(l);(0,o.useEffect)(()=>{m.current=l},[l]);let g=(0,o.useRef)(a);(0,o.useEffect)(()=>{g.current=a},[a]);let[v,b]=(0,o.useState)(!1),[_,w]=(0,o.useState)(!1),{props:S,meta:C}=(0,u.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:v,showAltText:_});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...S,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:b,setShowAltText:w,ref:t}),C.priority?o.default.createElement(y,{isAppRouter:!n,imgAttributes:S}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8926:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let r=n(7295),i=r._(n(9599)),o=i.default.createContext({})},9277:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},417:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(1595);let r=n(4229),i=n(1532);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,u,s,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:v,fill:b=!1,style:_,onLoad:w,onLoadingComplete:S,placeholder:C="empty",blurDataURL:j,fetchPriority:P,layout:x,objectFit:O,objectPosition:E,lazyBoundary:M,lazyRoot:z,...I}=e,{imgConf:k,showAltText:A,blurComplete:R,defaultLoader:L}=t,D=k||i.imageConfigDefault;if("allSizes"in D)a=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);a={...D,allSizes:e,deviceSizes:t}}let U=I.loader||L;delete I.loader,delete I.srcSet;let N="__next_img_default"in U;if(N){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:n,...r}=t;return e(r)}}if(x){"fill"===x&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[x];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[x];t&&!d&&(d=t)}let B="",F=l(y),T=l(v);if("object"==typeof(n=c)&&(o(n)||void 0!==n.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,s=e.blurHeight,j=j||e.blurDataURL,B=e.src,!b){if(F||T){if(F&&!T){let t=F/e.width;T=Math.round(e.height*t)}else if(!F&&T){let t=T/e.height;F=Math.round(e.width*t)}}else F=e.width,T=e.height}}let W=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,W=!1),a.unoptimized&&(f=!0),N&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(P="high");let G=l(h),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:E}:{},A?{}:{color:"transparent"},_),V=R||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:T,blurWidth:u,blurHeight:s,blurDataURL:j||"",objectFit:H.objectFit})+'")':'url("'+C+'")',$=V?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},q=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:l,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,l),c=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,r)=>a({config:t,src:n,quality:o,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:a({config:t,src:n,quality:o,width:u[c]})}}({config:a,src:c,unoptimized:f,width:F,quality:G,sizes:d,loader:U}),J={...I,loading:W?"lazy":m,fetchPriority:P,width:F,height:T,decoding:"async",className:g,style:{...H,...$},sizes:q.sizes,srcSet:q.srcSet,src:q.src},Y={unoptimized:f,priority:p,placeholder:C,fill:b};return{props:J,meta:Y}}},2512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return c},default:function(){return m}});let r=n(7295),i=n(3589),o=i._(n(9599)),l=r._(n(7798)),a=n(8926),u=n(9082),s=n(9277);function c(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(1595);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(d,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(l.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=r?40*r:t,u=i?40*i:n,s=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},1211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let r=n(7295),i=r._(n(9599)),o=n(1532),l=i.default.createContext(o.imageConfigDefault)},1532:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5619:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},7798:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(9599),i=r.useLayoutEffect,o=r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},1595:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},2798:function(e,t,n){e.exports=n(2073)},5643:function(e,t,n){e.exports=n(813)},1095:function(e,t,n){"use strict";var r=n(9599).createContext(void 0);t.IntlContext=r},5087:function(e,t,n){"use strict";var r=n(9599),i=n(1095);function o(){let e=r.useContext(i.IntlContext);if(!e)throw Error(void 0);return e}t.useIntlContext=o,t.useLocale=function(){return o().locale}},7871:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5087);n(9599),n(1095),t.useLocale=r.useLocale}}]);