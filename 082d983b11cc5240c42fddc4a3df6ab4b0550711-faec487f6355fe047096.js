(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("pJf4"),a("3nLz");var i=a("YTpj"),r=a("q1tI"),n=a.n(r),s=a("9eSz"),d=a.n(s),o=a("p3AD");t.a=function(){var e=i.data,t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(o.a)(2.5)}},n.a.createElement(d.a,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(o.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a.name)," | ",a.summary,n.a.createElement("br",null),n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"You should follow him on Twitter")))}},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),d=i(a("8OQS")),o=i(a("pVnL")),l=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,S=y&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function R(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function A(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+s+d+a+i+t+n+r+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(L,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),d):d})),L=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=p(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,d=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,E=e.loading,I=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:O?1:0,transition:C?"opacity "+y+"ms":"none"},d),T="boolean"==typeof b?"lightgray":b,k={transitionDelay:y+"ms"},W=(0,o.default)((0,o.default)((0,o.default)({opacity:this.state.imgLoaded?0:1},C&&k),d),f),j={title:t,alt:this.state.isVisible?"":a,style:W,className:p,itemProp:v};if(h){var N=h,H=g(h);return l.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),T&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&k)}),H.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:j,imageVariants:N,generateSources:A}),H.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:j,imageVariants:N,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,w(N),l.default.createElement(L,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)((0,o.default)({alt:a,title:t,loading:E},H),{},{imageVariants:N}))}}))}if(m){var M=m,P=g(m),J=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete J.display,l.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:J,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},T&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},C&&k)}),P.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:j,imageVariants:M,generateSources:A}),P.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:j,imageVariants:M,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,w(M),l.default.createElement(L,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)((0,o.default)({alt:a,title:t,loading:E},P),{},{imageVariants:M}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),T=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});C.propTypes={resolutions:V,sizes:T,fixed:u.default.oneOfType([V,u.default.arrayOf(V)]),fluid:u.default.oneOfType([T,u.default.arrayOf(T)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var k=C;t.default=k},SGlo:function(e,t,a){"use strict";var i=a("rj/q"),r=a("N+BI").getWeak,n=a("1a8y"),s=a("BjK0"),d=a("xa9o"),o=a("yde8"),l=a("Wadk"),u=a("qDzq"),c=a("O1i0"),f=l(5),p=l(6),g=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,i){d(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=i&&o(i,a,e[n],e)}));return i(l.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var i=r(n(t),!0);return!0===i?h(e).set(t,a):i[e._i]=a,e},ufstore:h}},YTpj:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADuklEQVQ4y01UWStGURQ9v8CbV5nneZ7nMbPImKRMIaJIxidSfH0PhEhRyJCZ8iJzHkimEiUp4YEyy4OltXXlq92959xz1l5r7b0/FRERAVtbW7i6usLX1xeWlpYICAiAj48PHBwc5BkcHIz8/Hzk5OQgJCREzjECAwPh4uKCsLAwuRMdHQ0VExOD0NBQuRwVFSWbvMT3uro6tLS0oL6+HlVVVcjMzERsbCw8PDzg5eUliby9vWVtb28PPz8/qLS0NGRkZMDf3x/h4eEC6OTkJAC1tbUoKipCSUkJ0tPT4enpCRMTEyQmJgoJqiJDc3NzIUQVitQdHR0lLCws4OzsjLi4OGHFw9xjdmNjYxgYGAggCRBAs4eAJFNZWQlFAHpobW0NOzs7uUhZKSkp4llZWRlKS0tFLpM0NTVJUiZyc3OT4DovLw/V1dVQNJQbmsnu7u4CRj8mJiZweXmJ9fV1LC0tYX9/H/Pz8zAzM5M7lE5l8fHx4jdtUZRDbwimVY0+5ubmYnNzE6urqxgZGcHU1BQGBwcxMDAgBaNEDdDKyupvrWgsFzY2NiLdyMgIWVlZAjI7Owt2ARO0tbVJEVJTU9HY2IikpCSRy7aiXTyTkJDwCxgUFCSZeIAe0o/Dw0NcXFxgfHwcY2NjODg4QGdnJ2ZmZrC4uIjCwkK5R99Jhv2cnJwMRa/4gW3DnqIF9JXs6B9l8p2SybK/vx9DQ0NSOPpOMNoUGRkprBWbkrTJjofYX7SgpqYGOzs7aGhoQEdHB8rLy1FQUID29napOhURhP4ziMPiSJUJwiBbfuQei0JASuzu7paWaW5uRl9fn1STrMiQFTc1NZU2Ki4uhiIbyiVdjhIzc1L4vru7i+PjYywvL4t/k5OT0Ov1f8VgdQ0NDQWQDFtbW39nmdTpH7MSkIUio/Pzc2xsbIh/9I7F6erqEjXsVc4zgflkUXp6eqBYJdKluZTAD/Tp7OwMe3t70tTDw8Po7e2VVtre3paGJwGOHpNr/1T0W2VnZ0On08kEHB0d4erqStqFclndlZUVYTg6OirTQsC3tzdUVFRIz5Idg53C/lSfn5/4/7u/vxd2bBmCsijT09OYm5uTqVlbW8PT05Oc478Lh4GFZA2E4fv7O15eXiReX1/Btbb3/PyMk5MTbG1tCfjp6akAfXx84Pr6Gnd3d5KMI8eWYQcoglACQfj8D659e3x8lNDUPDw8iArG9/e3nFtYWJCpUhojBjNroBoYn2TKb4ybmxvc3t6KbO3c19eXJGKCH7+ksfQGagqfAAAAAElFTkSuQmCC","width":50,"height":50,"src":"/static/c444d69b0186c77eca8475054ba85c53/8ba1e/profile-pic.png","srcSet":"/static/c444d69b0186c77eca8475054ba85c53/8ba1e/profile-pic.png 1x,\\n/static/c444d69b0186c77eca8475054ba85c53/f937a/profile-pic.png 1.5x,\\n/static/c444d69b0186c77eca8475054ba85c53/71eb7/profile-pic.png 2x"}}},"site":{"siteMetadata":{"author":{"name":"Luis H. Ball Jr.","summary":"Dad 🍼. Pittsburgh sports fanatic 🏴‍☠️."},"social":{"twitter":"luishbjr1"}}}}}')},eMsz:function(e,t,a){"use strict";var i,r=a("emib"),n=a("Wadk")(0),s=a("IYdN"),d=a("N+BI"),o=a("k5Iv"),l=a("SGlo"),u=a("BjK0"),c=a("O1i0"),f=a("O1i0"),p=!r.ActiveXObject&&"ActiveXObject"in r,g=d.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(u(e)){var t=g(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},S=e.exports=a("94Pd")("WeakMap",b,y,l,!0,!0);f&&p&&(o((i=l.getConstructor(b,"WeakMap")).prototype,y),d.NEED=!0,n(["delete","has","get","set"],(function(e){var t=S.prototype,a=t[e];s(t,e,(function(t,r){if(u(t)&&!h(t)){this._f||(this._f=new i);var n=this._f[e](t,r);return"set"==e?this:n}return a.call(this,t,r)}))})))},"t+fG":function(e,t,a){var i=a("P8UN"),r=a("96qb"),n=a("ap2Z"),s=/"/g,d=function(e,t,a,i){var r=String(n(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),d+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},zTTH:function(e,t,a){"use strict";var i=a("P8UN"),r=a("Wadk")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=082d983b11cc5240c42fddc4a3df6ab4b0550711-faec487f6355fe047096.js.map