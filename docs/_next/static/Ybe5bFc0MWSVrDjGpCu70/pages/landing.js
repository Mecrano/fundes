(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1AYd":function(e,t,a){"use strict";var r=a("wx14"),o=a("Ff2n"),n=a("q1tI"),i=a.n(n),l=(a("17x9"),a("iuhU")),s=a("28cb"),c=a("EHdT"),d=a("H2TA"),u=i.a.forwardRef(function(e,t){var a=e.children,n=e.classes,d=e.className,u=e.component,p=void 0===u?"label":u,m=(e.disabled,e.error,e.filled,e.focused,e.required,Object(o.a)(e,["children","classes","className","component","disabled","error","filled","focused","required"])),f=Object(c.a)(),b=Object(s.a)({props:e,muiFormControl:f,states:["required","focused","disabled","error","filled"]});return i.a.createElement(p,Object(r.a)({className:Object(l.a)(n.root,d,b.disabled&&n.disabled,b.error&&n.error,b.filled&&n.filled,b.focused&&n.focused,b.required&&n.required),ref:t},m),a,b.required&&i.a.createElement("span",{className:Object(l.a)(n.asterisk,b.error&&n.error)},"\u2009","*"))}),p=Object(d.a)(function(e){return{root:Object(r.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary["light"===e.palette.type?"dark":"light"]},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}},{name:"MuiFormLabel"})(u),m=i.a.forwardRef(function(e,t){var a=e.classes,n=e.className,d=e.disableAnimation,u=void 0!==d&&d,m=(e.margin,e.shrink),f=(e.variant,Object(o.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),b=Object(c.a)(),h=m;"undefined"===typeof h&&b&&(h=b.filled||b.focused||b.adornedStart);var g=Object(s.a)({props:e,muiFormControl:b,states:["margin","variant"]});return i.a.createElement(p,Object(r.a)({"data-shrink":h,className:Object(l.a)(a.root,n,b&&a.formControl,!u&&a.animated,h&&a.shrink,{dense:a.marginDense}[g.margin],{filled:a.filled,outlined:a.outlined}[g.variant]),classes:{focused:a.focused,disabled:a.disabled,error:a.error,required:a.required,asterisk:a.asterisk},ref:t},f))});t.a=Object(d.a)(function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}},{name:"MuiInputLabel"})(m)},"28cb":function(e,t,a){"use strict";function r(e){var t=e.props,a=e.states,r=e.muiFormControl;return a.reduce(function(e,a){return e[a]=t[a],r&&"undefined"===typeof t[a]&&(e[a]=r[a]),e},{})}a.d(t,"a",function(){return r})},"4hqb":function(e,t,a){"use strict";a.d(t,"b",function(){return i});var r=a("q1tI"),o=a.n(r),n=o.a.createContext();function i(){return o.a.useContext(n)}t.a=n},"5LSk":function(e,t,a){"use strict";var r=a("kOwS"),o=a("vYYK"),n=a("qNsG"),i=a("q1tI"),l=a.n(i),s=a("TSYQ"),c=a.n(s),d=a("R/WZ"),u={cardFooter:{display:"flex",alignItems:"center",backgroundColor:"transparent",padding:"0.9375rem 1.875rem"}};a.d(t,"a",function(){return f});var p=l.a.createElement,m=Object(d.a)(u);function f(e){var t,a=m(),i=e.className,l=e.children,s=Object(n.a)(e,["className","children"]),d=c()((t={},Object(o.a)(t,a.cardFooter,!0),Object(o.a)(t,i,void 0!==i),t));return p("div",Object(r.a)({className:d},s),l)}},A2So:function(e,t,a){"use strict";var r=a("kOwS"),o=a("vYYK"),n=a("qNsG"),i=a("q1tI"),l=a.n(i),s=a("TSYQ"),c=a.n(s),d=a("R/WZ"),u={card:{border:"0",marginBottom:"30px",marginTop:"30px",borderRadius:"6px",color:"rgba(0, 0, 0, 0.87)",background:"#fff",width:"100%",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",position:"relative",display:"flex",flexDirection:"column",minWidth:"0",wordWrap:"break-word",fontSize:".875rem",transition:"all 300ms linear"},cardPlain:{background:"transparent",boxShadow:"none"},cardCarousel:{overflow:"hidden"}};a.d(t,"a",function(){return f});var p=l.a.createElement,m=Object(d.a)(u);function f(e){var t,a=m(),i=e.className,l=e.children,s=e.plain,d=e.carousel,u=Object(n.a)(e,["className","children","plain","carousel"]),f=c()((t={},Object(o.a)(t,a.card,!0),Object(o.a)(t,a.cardPlain,s),Object(o.a)(t,a.cardCarousel,d),Object(o.a)(t,i,void 0!==i),t));return p("div",Object(r.a)({className:f},u),l)}},ADg1:function(e,t,a){"use strict";var r=a("wx14"),o=a("ODXe"),n=a("Ff2n"),i=a("q1tI"),l=a.n(i),s=(a("17x9"),a("iuhU")),c=(a("2W6z"),a("ByqB")),d=a("H2TA"),u=a("mVKy"),p=a("OMPe"),m=a("4hqb"),f=l.a.forwardRef(function(e,t){var a=e.children,i=e.classes,d=e.className,f=e.component,b=void 0===f?"div":f,h=e.disabled,g=void 0!==h&&h,v=e.error,x=void 0!==v&&v,w=e.fullWidth,j=void 0!==w&&w,O=e.hiddenLabel,y=void 0!==O&&O,N=e.margin,C=void 0===N?"none":N,k=e.required,F=void 0!==k&&k,S=e.variant,E=void 0===S?"standard":S,R=Object(n.a)(e,["children","classes","className","component","disabled","error","fullWidth","hiddenLabel","margin","required","variant"]),T=l.a.useState(function(){var e=!1;return a&&l.a.Children.forEach(a,function(t){if(Object(p.a)(t,["Input","Select"])){var a=Object(p.a)(t,["Select"])?t.props.input:t;a&&Object(c.a)(a.props)&&(e=!0)}}),e}),W=Object(o.a)(T,1)[0],A=l.a.useState(function(){var e=!1;return a&&l.a.Children.forEach(a,function(t){Object(p.a)(t,["Input","Select"])&&Object(c.b)(t.props,!0)&&(e=!0)}),e}),q=Object(o.a)(A,2),I=q[0],M=q[1],z=l.a.useState(!1),H=Object(o.a)(z,2),D=H[0],B=H[1];g&&D&&B(!1);var Y={adornedStart:W,disabled:g,error:x,filled:I,focused:D,hiddenLabel:y,margin:C,onBlur:function(){B(!1)},onEmpty:function(){I&&M(!1)},onFilled:function(){I||M(!0)},onFocus:function(){B(!0)},registerEffect:void 0,required:F,variant:E};return l.a.createElement(m.a.Provider,{value:Y},l.a.createElement(b,Object(r.a)({className:Object(s.a)(i.root,d,"none"!==C&&i["margin".concat(Object(u.a)(C))],j&&i.fullWidth),ref:t},R),a))});t.a=Object(d.a)({root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}},{name:"MuiFormControl"})(f)},Baq3:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("q1tI")),n=(0,r(a("8/g6")).default)(o.default.createElement("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"}),"VerifiedUser");t.default=n},ByqB:function(e,t,a){"use strict";function r(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function o(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(r(e.value)&&""!==e.value||t&&r(e.defaultValue)&&""!==e.defaultValue)}function n(e){return e.startAdornment}a.d(t,"b",function(){return o}),a.d(t,"a",function(){return n})},EHdT:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a("q1tI"),o=a.n(r),n=a("4hqb");function i(){return o.a.useContext(n.a)}},Hak1:function(e,t){e.exports="./_next/static/images/kendall-e0508cc923eb0b5e68ca6783c53d0f1d.jpg"},Ilpk:function(e,t,a){"use strict";t.a={imgFluid:{maxWidth:"100%",height:"auto"},imgRounded:{borderRadius:"6px !important"},imgRoundedCircle:{borderRadius:"50% !important"},imgRaised:{boxShadow:"0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},imgGallery:{width:"100%",marginBottom:"2.142rem"},imgCardTop:{width:"100%",borderTopLeftRadius:"calc(.25rem - 1px)",borderTopRightRadius:"calc(.25rem - 1px)"},imgCardBottom:{width:"100%",borderBottomLeftRadius:"calc(.25rem - 1px)",borderBottomRightRadius:"calc(.25rem - 1px)"},imgCard:{width:"100%",borderRadius:"calc(.25rem - 1px)"},imgCardOverlay:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",padding:"1.25rem"}}},M1Nd:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("q1tI")),n=(0,r(a("8/g6")).default)(o.default.createElement("path",{d:"M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"}),"Fingerprint");t.default=n},UsYt:function(e,t,a){"use strict";var r=a("kOwS"),o=a("vYYK"),n=a("qNsG"),i=a("q1tI"),l=a.n(i),s=a("TSYQ"),c=a.n(s),d=a("R/WZ"),u={cardBody:{padding:"0.9375rem 1.875rem",flex:"1 1 auto"}};a.d(t,"a",function(){return f});var p=l.a.createElement,m=Object(d.a)(u);function f(e){var t,a=m(),i=e.className,l=e.children,s=Object(n.a)(e,["className","children"]),d=c()((t={},Object(o.a)(t,a.cardBody,!0),Object(o.a)(t,i,void 0!==i),t));return p("div",Object(r.a)({className:d},s),l)}},"V/tC":function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("q1tI")),n=(0,r(a("8/g6")).default)(o.default.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"}),"Chat");t.default=n},Z2Lm:function(e,t,a){"use strict";var r=a("zrwo"),o=a("vYYK"),n=a("doui"),i=a("q1tI"),l=a.n(i),s=a("TSYQ"),c=a.n(s),d=a("R/WZ"),u=function(e){return{parallax:{height:"90vh",maxHeight:"1000px",overflow:"hidden",position:"relative",backgroundPosition:"center top",backgroundSize:"cover",margin:"0",padding:"0",border:"0",display:"flex",alignItems:"center"},filter:{"&:before":{background:"rgba(0, 0, 0, 0.5)"},"&:after,&:before":{position:"absolute",zIndex:"1",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:"''"}},small:{height:"380px"},parallaxResponsive:Object(o.a)({},e.breakpoints.down("md"),{minHeight:"660px"})}};a.d(t,"a",function(){return f});var p=l.a.createElement,m=Object(d.a)(u);function f(e){var t,a=l.a.useState("translate3d(0,0px,0)"),i=Object(n.a)(a,2),s=i[0],d=i[1];l.a.useEffect(function(){return window.innerWidth>=768&&window.addEventListener("scroll",u),function(){window.innerWidth>=768&&window.removeEventListener("scroll",u)}});var u=function(){var e=window.pageYOffset/3;d("translate3d(0,"+e+"px,0)")},f=e.filter,b=e.className,h=e.children,g=e.style,v=e.image,x=e.small,w=e.responsive,j=m(),O=c()((t={},Object(o.a)(t,j.parallax,!0),Object(o.a)(t,j.filter,f),Object(o.a)(t,j.small,x),Object(o.a)(t,j.parallaxResponsive,w),Object(o.a)(t,b,void 0!==b),t));return p("div",{className:O,style:Object(r.a)({},g,{backgroundImage:"url("+v+")",transform:s})},h)}},pTTa:function(e,t,a){"use strict";a.r(t);var r=a("kOwS"),o=a("q1tI"),n=a.n(o),i=a("TSYQ"),l=a.n(i),s=a("R/WZ"),c=a("8x5e"),d=a("HXcA"),u=a("mtPR"),p=a("i4t8"),m=a("Kg+a"),f=a("8E12"),b=a("Z2Lm"),h=a("zrwo"),g=a("eDSW"),v={container:Object(h.a)({zIndex:"12",color:"#FFFFFF"},g.d),title:Object(h.a)({},g.v,{display:"inline-block",position:"relative",marginTop:"30px",minHeight:"32px",color:"#FFFFFF",textDecoration:"none"}),subtitle:{fontSize:"1.313rem",maxWidth:"500px",margin:"10px auto 0"},main:{background:"#FFFFFF",position:"relative",zIndex:"3"},mainRaised:{margin:"-60px 30px 0px",borderRadius:"6px",boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"}},x=a("V/tC"),w=a.n(x),j=a("Baq3"),O=a.n(j),y=a("M1Nd"),N=a.n(y),C=a("vYYK"),k={infoArea:{maxWidth:"360px",margin:"0 auto",padding:"0px"},iconWrapper:{float:"left",marginTop:"24px",marginRight:"10px"},primary:{color:g.p},warning:{color:g.z},danger:{color:g.g},success:{color:g.u},info:{color:g.m},rose:{color:g.r},gray:{color:g.j},icon:{width:"36px",height:"36px"},descriptionWrapper:{color:g.j,overflow:"hidden"},title:g.v,description:{color:g.j,overflow:"hidden",marginTop:"0px",fontSize:"14px"},iconWrapperVertical:{float:"none"},iconVertical:{width:"61px",height:"61px"}},F=n.a.createElement,S=Object(s.a)(k);function E(e){var t,a,r=S(),o=e.title,n=e.description,i=e.iconColor,s=e.vertical,c=l()((t={},Object(C.a)(t,r.iconWrapper,!0),Object(C.a)(t,r[i],!0),Object(C.a)(t,r.iconWrapperVertical,s),t)),d=l()((a={},Object(C.a)(a,r.icon,!0),Object(C.a)(a,r.iconVertical,s),a));return F("div",{className:r.infoArea},F("div",{className:c},F(e.icon,{className:d})),F("div",{className:r.descriptionWrapper},F("h4",{className:r.title},o),F("p",{className:r.description},n)))}E.defaultProps={iconColor:"gray"};var R={section:{padding:"70px 0",textAlign:"center"},title:Object(h.a)({},g.v,{marginBottom:"1rem",marginTop:"30px",minHeight:"32px",textDecoration:"none"}),description:{color:"#999"}},T=n.a.createElement,W=Object(s.a)(R);function A(){var e=W();return T("div",{className:e.section},T(u.a,{justify:"center"},T(p.a,{xs:12,sm:12,md:8},T("h2",{className:e.title},"Let","'","s talk product"),T("h5",{className:e.description},"This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn","'","t scroll to get here. Add a button if you want the user to see more."))),T("div",null,T(u.a,null,T(p.a,{xs:12,sm:12,md:4},T(E,{title:"Free Chat",description:"Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",icon:w.a,iconColor:"info",vertical:!0})),T(p.a,{xs:12,sm:12,md:4},T(E,{title:"Verified Users",description:"Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",icon:O.a,iconColor:"success",vertical:!0})),T(p.a,{xs:12,sm:12,md:4},T(E,{title:"Fingerprint",description:"Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",icon:N.a,iconColor:"danger",vertical:!0})))))}var q=a("A2So"),I=a("UsYt"),M=a("5LSk"),z=a("Ilpk"),H=Object(h.a)({section:{padding:"70px 0",textAlign:"center"},title:Object(h.a)({},g.v,{marginBottom:"1rem",marginTop:"30px",minHeight:"32px",textDecoration:"none"})},z.a,{itemGrid:{marginLeft:"auto",marginRight:"auto"},cardTitle:g.b,smallTitle:{color:"#6c757d"},description:{color:"#999"},justifyCenter:{justifyContent:"center !important"},socials:{marginTop:"0",width:"100%",transform:"none",left:"0",top:"0",height:"100%",lineHeight:"41px",fontSize:"20px",color:"#999"},margin5:{margin:"5px"}}),D=a("ydEf"),B=a.n(D),Y=a("skcn"),L=a.n(Y),P=a("Hak1"),$=a.n(P),V=n.a.createElement,K=Object(s.a)(H);function _(){var e=K(),t=l()(e.imgRaised,e.imgRoundedCircle,e.imgFluid);return V("div",{className:e.section},V("h2",{className:e.title},"Here is our team"),V("div",null,V(u.a,null,V(p.a,{xs:12,sm:12,md:4},V(q.a,{plain:!0},V(p.a,{xs:12,sm:12,md:6,className:e.itemGrid},V("img",{src:B.a,alt:"...",className:t})),V("h4",{className:e.cardTitle},"Gigi Hadid",V("br",null),V("small",{className:e.smallTitle},"Model")),V(I.a,null,V("p",{className:e.description},"You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ",V("a",{href:"#pablo"},"links")," for people to be able to follow them outside the site.")),V(M.a,{className:e.justifyCenter},V(m.a,{justIcon:!0,color:"transparent",className:e.margin5},V("i",{className:e.socials+" fab fa-twitter"})),V(m.a,{justIcon:!0,color:"transparent",className:e.margin5},V("i",{className:e.socials+" fab fa-instagram"})),V(m.a,{justIcon:!0,color:"transparent",className:e.margin5},V("i",{className:e.socials+" fab fa-facebook"}))))),V(p.a,{xs:12,sm:12,md:4},V(q.a,{plain:!0},V(p.a,{xs:12,sm:12,md:6,className:e.itemGrid},V("img",{src:L.a,alt:"...",className:t})),V("h4",{className:e.cardTitle},"Christian Louboutin",V("br",null),V("small",{className:e.smallTitle},"Designer")),V(I.a,null,V("p",{className:e.description},"You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ",V("a",{href:"#pablo"},"links")," for people to be able to follow them outside the site.")),V(M.a,{className:e.justifyCenter},V(m.a,{justIcon:!0,color:"transparent",className:e.margin5},V("i",{className:e.socials+" fab fa-twitter"})),V(m.a,{justIcon:!0,color:"transparent",className:e.margin5},V("i",{className:e.socials+" fab fa-linkedin"}))))),V(p.a,{xs:12,sm:12,md:4},V(q.a,{plain:!0},V(p.a,{xs:12,sm:12,md:6,className:e.itemGrid},V("img",{src:$.a,alt:"...",className:t})),V("h4",{className:e.cardTitle},"Kendall Jenner",V("br",null),V("small",{className:e.smallTitle},"Model")),V(I.a,null,V("p",{className:e.description},"You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ",V("a",{href:"#pablo"},"links")," for people to be able to follow them outside the site.")),V(M.a,{className:e.justifyCenter},V(m.a,{justIcon:!0,color:"transparent",className:e.margin5},V("i",{className:e.socials+" fab fa-twitter"})),V(m.a,{justIcon:!0,color:"transparent",className:e.margin5},V("i",{className:e.socials+" fab fa-instagram"})),V(m.a,{justIcon:!0,color:"transparent",className:e.margin5},V("i",{className:e.socials+" fab fa-facebook"}))))))))}var U=a("um8N"),G={section:{padding:"70px 0"},title:Object(h.a)({},g.v,{marginBottom:"50px",marginTop:"30px",minHeight:"32px",textDecoration:"none",textAlign:"center"}),description:{color:"#999",textAlign:"center"},textCenter:{textAlign:"center"},textArea:{marginRight:"15px",marginLeft:"15px"}},X=n.a.createElement,Q=Object(s.a)(G);function Z(){var e=Q();return X("div",{className:e.section},X(u.a,{justify:"center"},X(p.a,{cs:12,sm:12,md:8},X("h2",{className:e.title},"Work with us"),X("h4",{className:e.description},"Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours."),X("form",null,X(u.a,null,X(p.a,{xs:12,sm:12,md:6},X(U.a,{labelText:"Your Name",id:"name",formControlProps:{fullWidth:!0}})),X(p.a,{xs:12,sm:12,md:6},X(U.a,{labelText:"Your Email",id:"email",formControlProps:{fullWidth:!0}})),X(U.a,{labelText:"Your Message",id:"message",formControlProps:{fullWidth:!0,className:e.textArea},inputProps:{multiline:!0,rows:5}}),X(p.a,{xs:12,sm:12,md:4,className:e.textCenter},X(m.a,{color:"primary"},"Send Message")))))))}a.d(t,"default",function(){return ae});var J=n.a.createElement,ee=[],te=Object(s.a)(v);function ae(e){var t=te(),o=Object(r.a)({},e);return J("div",null,J(c.a,Object(r.a)({color:"transparent",routes:ee,brand:"NextJS Material Kit",rightLinks:J(f.a,null),fixed:!0,changeColorOnScroll:{height:400,color:"white"}},o)),J(b.a,{filter:!0,responsive:!0,image:a("veCo")},J("div",{className:t.container},J(u.a,null,J(p.a,{xs:12,sm:12,md:6},J("h1",{className:t.title},"Your Story Starts With Us."),J("h4",null,"Every landing page needs a small description after the big bold title, that","'","s why we added this text here. Add here all the information that can make you or your product create the first impression."),J("br",null),J(m.a,{color:"danger",size:"lg",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim",target:"_blank",rel:"noopener noreferrer"},J("i",{className:"fas fa-play"}),"Watch video"))))),J("div",{className:l()(t.main,t.mainRaised)},J("div",{className:t.container},J(A,null),J(_,null),J(Z,null))),J(d.a,null))}},skcn:function(e,t){e.exports="./_next/static/images/christian-56633ed3f62f39d71f571374a6409e65.jpg"},um8N:function(e,t,a){"use strict";var r=a("kOwS"),o=a("vYYK"),n=a("q1tI"),i=a.n(n),l=a("TSYQ"),s=a.n(l),c=a("R/WZ"),d=a("ADg1"),u=a("1AYd"),p=a("wx14"),m=a("Ff2n"),f=(a("17x9"),a("iuhU")),b=a("ODXe"),h=(a("2W6z"),a("28cb")),g=a("4hqb"),v=a("H2TA"),x=a("OMPe"),w=a("l3Wi");function j(e,t){return parseInt(e[t],10)||0}var O="undefined"!==typeof window?i.a.useLayoutEffect:i.a.useEffect,y={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0},N=i.a.forwardRef(function(e,t){var a=e.onChange,r=e.rows,o=e.rowsMax,n=e.style,l=e.value,s=Object(m.a)(e,["onChange","rows","rowsMax","style","value"]),c=i.a.useRef(null!=l).current,d=i.a.useRef(null),u=Object(x.c)(t,d),f=i.a.useRef(null),h=i.a.useState({}),g=Object(b.a)(h,2),v=g[0],N=g[1],C=i.a.useCallback(function(){var t=d.current,a=window.getComputedStyle(t),n=f.current;n.style.width=a.width,n.value=t.value||e.placeholder||"x";var i=a["box-sizing"],l=j(a,"padding-bottom")+j(a,"padding-top"),s=j(a,"border-bottom-width")+j(a,"border-top-width"),c=n.scrollHeight-l;n.value="x";var u=n.scrollHeight-l,p=c;null!=r&&(p=Math.max(Number(r)*u,p)),null!=o&&(p=Math.min(Number(o)*u,p));var m=(p=Math.max(p,u))+("border-box"===i?l+s:0);N(function(e){return m>0&&Math.abs((e.outerHeightStyle||0)-m)>1?{innerHeight:c,outerHeight:p,outerHeightStyle:m}:e})},[N,r,o,e.placeholder]);i.a.useEffect(function(){var e=Object(w.a)(function(){C()});return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}},[C]),O(function(){C()});return i.a.createElement(i.a.Fragment,null,i.a.createElement("textarea",Object(p.a)({value:l,onChange:function(e){c||C(),a&&a(e)},ref:u,rows:r||1,style:Object(p.a)({height:v.outerHeightStyle,overflow:Math.abs(v.outerHeight-v.innerHeight)<=1?"hidden":null},n)},s)),i.a.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:f,tabIndex:-1,style:Object(p.a)({},y,{},n)}))}),C=a("ByqB"),k="undefined"===typeof window?i.a.useEffect:i.a.useLayoutEffect,F=i.a.forwardRef(function(e,t){var a=e["aria-describedby"],r=e.autoComplete,o=e.autoFocus,n=e.classes,l=e.className,s=e.defaultValue,c=e.disabled,d=e.endAdornment,u=(e.error,e.fullWidth),v=void 0!==u&&u,w=e.id,j=e.inputComponent,O=void 0===j?"input":j,y=e.inputProps,F=(y=void 0===y?{}:y).className,S=Object(m.a)(y,["className"]),E=e.inputRef,R=(e.margin,e.multiline),T=void 0!==R&&R,W=e.name,A=e.onBlur,q=e.onChange,I=e.onClick,M=e.onFocus,z=e.onKeyDown,H=e.onKeyUp,D=e.placeholder,B=e.readOnly,Y=e.renderSuffix,L=e.rows,P=e.rowsMax,$=e.select,V=void 0!==$&&$,K=e.startAdornment,_=e.type,U=void 0===_?"text":_,G=e.value,X=Object(m.a)(e,["aria-describedby","autoComplete","autoFocus","classes","className","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","rowsMax","select","startAdornment","type","value"]),Q=i.a.useRef(null!=G).current,Z=i.a.useRef(),J=i.a.useCallback(function(e){},[]),ee=Object(x.c)(S.ref,J),te=Object(x.c)(E,ee),ae=Object(x.c)(Z,te),re=i.a.useState(!1),oe=Object(b.a)(re,2),ne=oe[0],ie=oe[1],le=Object(g.b)();var se=Object(h.a)({props:e,muiFormControl:le,states:["disabled","error","hiddenLabel","margin","required","filled"]});se.focused=le?le.focused:ne,i.a.useEffect(function(){!le&&c&&ne&&(ie(!1),A&&A())},[le,c,ne,A]);var ce=i.a.useCallback(function(e){Object(C.b)(e)?le&&le.onFilled&&le.onFilled():le&&le.onEmpty&&le.onEmpty()},[le]);k(function(){Q&&ce({value:G})},[G,ce,Q]);var de=O,ue=Object(p.a)({},S,{ref:ae});return"string"!==typeof de?ue=Object(p.a)({inputRef:ae,type:U},ue,{ref:null}):T?L&&!P?de="textarea":(ue=Object(p.a)({rows:L,rowsMax:P},ue),de=N):ue=Object(p.a)({type:U},ue),i.a.createElement("div",Object(p.a)({className:Object(f.a)(n.root,l,se.disabled&&n.disabled,se.error&&n.error,v&&n.fullWidth,se.focused&&n.focused,le&&n.formControl,T&&n.multiline,K&&n.adornedStart,d&&n.adornedEnd,{dense:n.marginDense}[se.margin]),onClick:function(e){Z.current&&e.currentTarget===e.target&&Z.current.focus(),I&&I(e)},ref:t},X),K,i.a.createElement(g.a.Provider,{value:null},i.a.createElement(de,Object(p.a)({"aria-invalid":se.error,"aria-describedby":a,autoComplete:r,autoFocus:o,className:Object(f.a)(n.input,F,se.disabled&&n.disabled,T&&n.inputMultiline,V&&n.inputSelect,se.hiddenLabel&&n.inputHiddenLabel,K&&n.inputAdornedStart,d&&n.inputAdornedEnd,{search:n.inputTypeSearch}[U],{dense:n.inputMarginDense}[se.margin]),defaultValue:s,disabled:se.disabled,id:w,name:W,onBlur:function(e){A&&A(e),le&&le.onBlur?le.onBlur(e):ie(!1)},onChange:function(e){if(!Q){var t=e.target||Z.current;if(null==t)throw new TypeError("Material-UI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://material-ui.com/r/input-component-ref-interface for more info.");ce({value:t.value})}if(q){for(var a=arguments.length,r=new Array(a>1?a-1:0),o=1;o<a;o++)r[o-1]=arguments[o];q.apply(void 0,[e].concat(r))}},onFocus:function(e){se.disabled?e.stopPropagation():(M&&M(e),le&&le.onFocus?le.onFocus(e):ie(!0))},onKeyDown:z,onKeyUp:H,placeholder:D,readOnly:B,required:se.required,rows:L,value:G},ue))),d,Y?Y(Object(p.a)({},se,{startAdornment:K})):null)}),S=Object(v.a)(function(e){var t="light"===e.palette.type,a={color:"currentColor",opacity:t?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},r={opacity:"0 !important"},o={opacity:t?.42:.5};return{root:{fontFamily:e.typography.fontFamily,color:e.palette.text.primary,fontSize:e.typography.pxToRem(16),lineHeight:"1.1875em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center","&$disabled":{color:e.palette.text.disabled,cursor:"default"}},formControl:{},focused:{},disabled:{},adornedStart:{},adornedEnd:{},error:{},marginDense:{},multiline:{padding:"".concat(6,"px 0 ").concat(7,"px"),"&$marginDense":{paddingTop:3}},fullWidth:{width:"100%"},input:{font:"inherit",color:"currentColor",padding:"".concat(6,"px 0 ").concat(7,"px"),border:0,boxSizing:"content-box",background:"none",height:"1.1875em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%","&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&:-ms-input-placeholder":a,"&::-ms-input-placeholder":a,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{"-webkit-appearance":"none"},"label[data-shrink=false] + $formControl &":{"&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus::-webkit-input-placeholder":o,"&:focus::-moz-placeholder":o,"&:focus:-ms-input-placeholder":o,"&:focus::-ms-input-placeholder":o},"&$disabled":{opacity:1}},inputMarginDense:{paddingTop:3},inputSelect:{paddingRight:24},inputMultiline:{height:"auto",resize:"none",padding:0},inputTypeSearch:{"-moz-appearance":"textfield","-webkit-appearance":"textfield"},inputAdornedStart:{},inputAdornedEnd:{},inputHiddenLabel:{}}},{name:"MuiInputBase"})(F),E=i.a.forwardRef(function(e,t){var a=e.disableUnderline,r=e.classes,o=e.fullWidth,n=void 0!==o&&o,l=e.inputComponent,s=void 0===l?"input":l,c=e.multiline,d=void 0!==c&&c,u=e.type,b=void 0===u?"text":u,h=Object(m.a)(e,["disableUnderline","classes","fullWidth","inputComponent","multiline","type"]);return i.a.createElement(S,Object(p.a)({classes:Object(p.a)({},r,{root:Object(f.a)(r.root,!a&&r.underline),underline:null}),fullWidth:n,inputComponent:s,multiline:d,ref:t,type:b},h))});E.muiName="Input";var R=Object(v.a)(function(e){var t="light"===e.palette.type,a=t?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{root:{position:"relative"},formControl:{"label + &":{marginTop:16}},focused:{},disabled:{},underline:{"&:after":{borderBottom:"2px solid ".concat(e.palette.primary[t?"dark":"light"]),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},"&$focused:after":{transform:"scaleX(1)"},"&$error:after":{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:"1px solid ".concat(a),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},"&:hover:not($disabled):before":{borderBottom:"2px solid ".concat(e.palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(a)}},"&$disabled:before":{borderBottomStyle:"dotted"}},error:{},multiline:{},fullWidth:{},input:{},inputMarginDense:{},inputMultiline:{},inputTypeSearch:{}}},{name:"MuiInput"})(E),T=a("zrwo"),W=a("eDSW"),A={disabled:{"&:before":{borderColor:"transparent !important"}},underline:{"&:hover:not($disabled):before,&:before":{borderColor:"#D2D2D2 !important",borderWidth:"1px !important"},"&:after":{borderColor:W.p}},underlineError:{"&:after":{borderColor:W.g}},underlineSuccess:{"&:after":{borderColor:W.u}},whiteUnderline:{"&:hover:not($disabled):before,&:before":{borderColor:"#FFFFFF"},"&:after":{borderColor:"#FFFFFF"}},labelRoot:Object(T.a)({},W.h,{color:"#AAAAAA !important",fontWeight:"400",fontSize:"14px",lineHeight:"1.42857",top:"10px",letterSpacing:"unset","& + $underline":{marginTop:"0px"}}),labelRootError:{color:W.g+" !important"},labelRootSuccess:{color:W.u+" !important"},formControl:{margin:"0 0 17px 0",paddingTop:"27px",position:"relative","& svg,& .fab,& .far,& .fal,& .fas,& .material-icons":{color:"#495057"}},input:{color:"#495057",height:"unset","&,&::placeholder":{fontSize:"14px",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"400",lineHeight:"1.42857",opacity:"1"},"&::placeholder":{color:"#AAAAAA"}},whiteInput:{"&,&::placeholder":{color:"#FFFFFF",opacity:"1"}}};a.d(t,"a",function(){return M});var q=i.a.createElement,I=Object(c.a)(A);function M(e){var t,a,n,i,l=I(),c=e.formControlProps,p=e.labelText,m=e.id,f=e.labelProps,b=e.inputProps,h=e.error,g=e.white,v=e.inputRootCustomClasses,x=e.success,w=s()((t={},Object(o.a)(t," "+l.labelRootError,h),Object(o.a)(t," "+l.labelRootSuccess,x&&!h),t)),j=s()((a={},Object(o.a)(a,l.underlineError,h),Object(o.a)(a,l.underlineSuccess,x&&!h),Object(o.a)(a,l.underline,!0),Object(o.a)(a,l.whiteUnderline,g),a)),O=s()(Object(o.a)({},v,void 0!==v)),y=s()((n={},Object(o.a)(n,l.input,!0),Object(o.a)(n,l.whiteInput,g),n));return i=void 0!==c?s()(c.className,l.formControl):l.formControl,q(d.a,Object(r.a)({},c,{className:i}),void 0!==p?q(u.a,Object(r.a)({className:l.labelRoot+" "+w,htmlFor:m},f),p):null,q(R,Object(r.a)({classes:{input:y,root:O,disabled:l.disabled,underline:j},id:m},b)))}},veCo:function(e,t){e.exports="./_next/static/images/landing-bg-df8fd3efcd662b64b44de07f351c838b.jpg"},xOMe:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/landing",function(){var e=a("pTTa");return{page:e.default||e}}])},ydEf:function(e,t){e.exports="./_next/static/images/avatar-f1d71f777331fd7e3de116edf4ee3b67.jpg"}},[["xOMe",1,0]]]);