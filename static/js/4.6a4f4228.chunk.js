(this["webpackJsonpchristinazhou99.github.io"]=this["webpackJsonpchristinazhou99.github.io"]||[]).push([[4],{72:function(t,e,a){"use strict";var i=a(1),r=a(4),n=a(0),o=a.n(n),c=(a(7),a(20)),s=a.n(c),p=a(55);function l(t){var e=t.theme,a=t.name,i=t.props;if(!e||!e.props||!e.props[a])return i;var r,n=e.props[a];for(r in n)void 0===i[r]&&(i[r]=n[r]);return i}var h=a(71),u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(a){var n=e.defaultTheme,c=e.withTheme,u=void 0!==c&&c,d=e.name,m=Object(r.a)(e,["defaultTheme","withTheme","name"]);var b=d,g=Object(p.a)(t,Object(i.a)({defaultTheme:n,Component:a,name:d||a.displayName,classNamePrefix:b},m)),f=o.a.forwardRef((function(t,e){t.classes;var c,s=t.innerRef,p=Object(r.a)(t,["classes","innerRef"]),m=g(Object(i.a)(Object(i.a)({},a.defaultProps),t)),b=p;return("string"===typeof d||u)&&(c=Object(h.a)()||n,d&&(b=l({theme:c,name:d,props:p})),u&&!b.theme&&(b.theme=c)),o.a.createElement(a,Object(i.a)({ref:s||e,classes:m},b))}));return s()(f,a),f}},d=a(21);e.a=function(t,e){return u(t,Object(i.a)({defaultTheme:d.a},e))}},73:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a(54);function r(t){if("string"!==typeof t)throw new Error(Object(i.a)(7));return t.charAt(0).toUpperCase()+t.slice(1)}},76:function(t,e,a){"use strict";var i=a(1),r=a(4),n=a(12),o=a(0),c=(a(7),a(25)),s=a(72),p=a(73),l=o.forwardRef((function(t,e){var a=t.classes,n=t.className,s=t.component,l=void 0===s?"div":s,h=t.disableGutters,u=void 0!==h&&h,d=t.fixed,m=void 0!==d&&d,b=t.maxWidth,g=void 0===b?"lg":b,f=Object(r.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(l,Object(i.a)({className:Object(c.a)(a.root,n,m&&a.fixed,u&&a.disableGutters,!1!==g&&a["maxWidth".concat(Object(p.a)(String(g)))]),ref:e},f))}));e.a=Object(s.a)((function(t){return{root:Object(n.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,a){var i=t.breakpoints.values[a];return 0!==i&&(e[t.breakpoints.up(a)]={maxWidth:i}),e}),{}),maxWidthXs:Object(n.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(n.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(n.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(n.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(n.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(l)},78:function(t,e,a){"use strict";var i=a(1),r=a(4),n=a(0),o=(a(7),a(25)),c=a(72),s=a(73),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},l=n.forwardRef((function(t,e){var a=t.align,c=void 0===a?"inherit":a,l=t.classes,h=t.className,u=t.color,d=void 0===u?"initial":u,m=t.component,b=t.display,g=void 0===b?"initial":b,f=t.gutterBottom,y=void 0!==f&&f,v=t.noWrap,x=void 0!==v&&v,O=t.paragraph,j=void 0!==O&&O,w=t.variant,k=void 0===w?"body1":w,W=t.variantMapping,T=void 0===W?p:W,R=Object(r.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),E=m||(j?"p":T[k]||p[k])||"span";return n.createElement(E,Object(i.a)({className:Object(o.a)(l.root,h,"inherit"!==k&&l[k],"initial"!==d&&l["color".concat(Object(s.a)(d))],x&&l.noWrap,y&&l.gutterBottom,j&&l.paragraph,"inherit"!==c&&l["align".concat(Object(s.a)(c))],"initial"!==g&&l["display".concat(Object(s.a)(g))]),ref:e},R))}));e.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(l)},79:function(t,e,a){t.exports=a.p+"static/media/oilRig.34c9002b.gif"},86:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return u}));var i=a(0),r=a.n(i),n=a(76),o=a(78),c=a(66),s=a(79),p=a.n(s),l=a(3),h=Object(c.a)((function(){return{cont:{marginTop:"3rem"},pic:{marginTop:"1rem",width:"50rem"}}}));function u(){var t=h(),e=Object(l.f)();return Object(i.useEffect)((function(){var t=setTimeout((function(){e.push("/results")}),3e3);return function(){return clearTimeout(t)}}),[e]),r.a.createElement(n.a,{className:t.cont},r.a.createElement(o.a,{variant:"h4"},"Creating an optimal schedule..."),r.a.createElement("hr",null),r.a.createElement("img",{src:p.a,className:t.pic,alt:"loading"}))}window.onload=function(){setTimeout((function(){window.location.href="/results"}),5e3)}}}]);
//# sourceMappingURL=4.6a4f4228.chunk.js.map