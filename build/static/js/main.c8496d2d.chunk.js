(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,a,t){e.exports=t(201)},147:function(e,a,t){},201:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),i=t.n(l),c=t(9),o=(t(147),t(29)),s=t(237),m=t(277),u=t(238),p=t(239),d=t(26),f=t.n(d),h=t(240),E=t(19),g=t.n(E),b=t(43),v=t(118),y=t(119),O=t(78),w=t.n(O),C=(t(154),t(156),t(157),{apiKey:"AIzaSyCQMJrwB7OnKJAInoPtpR-MUXFy3jbu3a4",authDomain:"b8-dashboard.firebaseapp.com",databaseURL:"https://b8-dashboard.firebaseio.com",projectId:"b8-dashboard",storageBucket:"b8-dashboard.appspot.com",messagingSenderId:"759008957926",appId:"1:759008957926:web:dfbad8bd165c9f157b3227",measurementId:"G-ZWDMKGHG7Y"}),j=new(function(){function e(){Object(v.a)(this,e),w.a.initializeApp(C),this.auth=w.a.auth(),this.db=w.a.firestore(),this.database=w.a.database()}return Object(y.a)(e,[{key:"login",value:function(e,a){return this.auth.signInWithEmailAndPassword(e,a)}},{key:"logout",value:function(){return this.auth.signOut()}},{key:"register",value:function(){var e=Object(b.a)(g.a.mark(function e(a,t,n,r){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.createUserWithEmailAndPassword(t,n);case 2:return e.abrupt("return",this.auth.currentUser.updateProfile({displayName:a,phoneNumber:"+91"+r}));case 3:case"end":return e.stop()}},e,this)}));return function(a,t,n,r){return e.apply(this,arguments)}}()},{key:"addQuote",value:function(e){return this.auth.currentUser?this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).set({quote:e}):alert("Not authorized")}},{key:"updateProfile",value:function(e,a){return this.auth.currentUser?this.database.ref("users/"+this.auth.currentUser.uid).set({admission_no:"",division:"TEACHER",name:e,phone:a,profile_pic:"https://ui-avatars.com/api/?name="+e}):alert("Not authorized")}},{key:"isInitialized",value:function(){var e=this;return new Promise(function(a){e.auth.onAuthStateChanged(a)})}},{key:"getCurrentUsername",value:function(){return this.auth.currentUser&&this.auth.currentUser.displayName}},{key:"getCurrentUserQuote",value:function(){var e=Object(b.a)(g.a.mark(function e(){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return a=e.sent,e.abrupt("return",a.get("quote"));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}());var k=f()(function(e){return{main:Object(o.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},submit:{marginTop:3*e.spacing.unit}}})(function(e){var a=e.classes;return r.a.createElement("main",{className:a.main},r.a.createElement(s.a,{className:a.paper},r.a.createElement(m.a,{className:a.avatar,alt:"Icon",src:window.location.origin+"/favicon.ico"}),r.a.createElement(u.a,{component:"h1",variant:"h5"},"Hello ",j.auth.currentUser?j.auth.currentUser.displayName:"Guest","!"),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",component:h.a,to:"/login",className:a.submit},"Login"),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",component:h.a,to:"/dashboard",className:a.submit},"Dashboard")))}),x=t(245),N=t(276),D=t(246),A=t(87),S=t.n(A),P=t(280),F=t(241),M=t(243),_=t(244),R=t(247),I=function(e){var a=e.openPRDialog,t=e.handlePRDialogClose,n=e.email,l=e.setEmail,i=e.handleSentPRE;return r.a.createElement("div",null,r.a.createElement(F.a,{open:a,onClose:function(){return t()},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(M.a,{id:"alert-dialog-title"},"Reset Password"),r.a.createElement(_.a,null,r.a.createElement(u.a,{gutterBottom:!0,variant:"p"},"A reset password email send to your email acccount"),r.a.createElement(x.a,{fullWidth:!0},r.a.createElement(N.a,{htmlFor:"email"},"Email"),r.a.createElement(D.a,{name:"Email",type:"text",id:"email",autoComplete:"off",value:n,onChange:function(e){return l(e.target.value)},multiline:!0}))),r.a.createElement(R.a,null,r.a.createElement(p.a,{onClick:function(){return t()},color:"primary"},"Close"),r.a.createElement(p.a,{onClick:function(){return i()},color:"primary"},"Submit"))))};var U=Object(P.a)(f()(function(e){return{main:Object(o.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(function(e){var a=e.classes,t=Object(n.useState)(""),l=Object(c.a)(t,2),i=l[0],o=l[1],d=Object(n.useState)(""),f=Object(c.a)(d,2),h=f[0],E=f[1],v=Object(n.useState)(!1),y=Object(c.a)(v,2),O=y[0],w=y[1];return r.a.createElement("main",{className:a.main},r.a.createElement(s.a,{className:a.paper},r.a.createElement(m.a,{className:a.avatar},r.a.createElement(S.a,null)),r.a.createElement(u.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,onSubmit:function(e){return e.preventDefault()&&!1}},r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{htmlFor:"email"},"Email Address"),r.a.createElement(D.a,{id:"email",name:"email",autoComplete:"off",autoFocus:!0,value:i,onChange:function(e){return o(e.target.value)}})),r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{htmlFor:"password"},"Password"),r.a.createElement(D.a,{name:"password",type:"password",id:"password",autoComplete:"off",value:h,onChange:function(e){return E(e.target.value)}})),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return C.apply(this,arguments)},className:a.submit},"Sign in"),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",onClick:function(){w(!0)},className:a.submit},"Forgot Password"))),r.a.createElement(I,{openPRDialog:O,handlePRDialogClose:function(){w(!1)},email:i,setEmail:o,handleSentPRE:function(){j.auth.sendPasswordResetEmail(i).then(function(){w(!1),alert("Success! \n Check your ".concat(i,"'s inbox"))}).catch(function(e){alert(e)})}}));function C(){return(C=Object(b.a)(g.a.mark(function a(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.login(i,h);case 3:e.history.replace("/dashboard"),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),alert(a.t0.message);case 9:case"end":return a.stop()}},a,null,[[0,6]])}))).apply(this,arguments)}}));var B=Object(P.a)(f()(function(e){return{main:Object(o.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(function(e){var a=e.classes,t=Object(n.useState)(""),l=Object(c.a)(t,2),i=l[0],o=l[1],d=Object(n.useState)(""),f=Object(c.a)(d,2),h=f[0],E=f[1],v=Object(n.useState)(""),y=Object(c.a)(v,2),O=y[0],w=y[1],C=Object(n.useState)(""),k=Object(c.a)(C,2),A=k[0],P=k[1];return r.a.createElement("main",{className:a.main},r.a.createElement(s.a,{className:a.paper},r.a.createElement(m.a,{className:a.avatar},r.a.createElement(S.a,null)),r.a.createElement(u.a,{component:"h1",variant:"h5"},"Register Account"),r.a.createElement("form",{className:a.form,onSubmit:function(e){return e.preventDefault()&&!1}},r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{htmlFor:"name"},"Name"),r.a.createElement(D.a,{id:"name",name:"name",autoComplete:"off",autoFocus:!0,value:i,onChange:function(e){return o(e.target.value)}})),r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{htmlFor:"email"},"Email Address"),r.a.createElement(D.a,{id:"email",name:"email",autoComplete:"off",value:h,onChange:function(e){return E(e.target.value)}})),r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{htmlFor:"password"},"Password"),r.a.createElement(D.a,{name:"password",type:"password",id:"password",autoComplete:"off",value:O,onChange:function(e){return w(e.target.value)}})),r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{htmlFor:"phone"},"Phone Number without +91"),r.a.createElement(D.a,{name:"phone",type:"text",id:"phone",autoComplete:"off",value:A,onChange:function(e){return P(e.target.value)}})),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return F.apply(this,arguments)},className:a.submit},"Register"))));function F(){return(F=Object(b.a)(g.a.mark(function a(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==A&&""!==i){a.next=4;break}alert("Complete all fields "),a.next=15;break;case 4:return a.prev=4,a.next=7,j.register(i,h,O,A);case 7:return a.next=9,j.updateProfile(i,A);case 9:e.history.replace("/dashboard"),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(4),alert(a.t0.message);case 15:case"end":return a.stop()}},a,null,[[4,12]])}))).apply(this,arguments)}})),L=t(274),T=t(248),W=t(249),$=t(250),z=t(251),H=t(252),J=t(253),Y=t(254),q=t(255),K=t(256),G=t(279),Q=t(5),V=t(130),Z=t.n(V),X=t(125),ee=t.n(X),ae=t(126),te=t.n(ae),ne=t(127),re=t.n(ne),le=t(129),ie=t.n(le),ce=t(128),oe=t.n(ce),se=Object(Q.a)(function(e){return{root:{display:"flex"},drawer:Object(o.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:{zIndex:e.zIndex.drawer+1},menuButton:Object(o.a)({marginRight:20},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:3*e.spacing.unit}}})(function(e){var a=e.classes,t=e.children,l=e.container,i=e.logout,o=Object(n.useState)(!1),s=Object(c.a)(o,2),m=s[0],p=s[1],d=function(){p(!m)},f=r.a.createElement("div",null,r.a.createElement(L.a,{smDown:!0},r.a.createElement("div",{className:a.toolbar})),r.a.createElement(T.a,null),r.a.createElement(W.a,null,r.a.createElement($.a,{button:!0,component:h.a,to:"/dashboard",onClick:function(){return p(!1)}},r.a.createElement(z.a,null,r.a.createElement(ee.a,null)),r.a.createElement(H.a,{primary:"New Problems"})),r.a.createElement($.a,{button:!0,component:h.a,to:"/dashboard/follow up videos",onClick:function(){return p(!1)}},r.a.createElement(z.a,null,r.a.createElement(te.a,null)),r.a.createElement(H.a,{primary:"Solved Problems"}))),r.a.createElement(T.a,null),r.a.createElement(W.a,null,r.a.createElement($.a,{button:!0,onClick:function(){return p(!1)},component:h.a,to:"/dashboard/Profile"},r.a.createElement(z.a,null,r.a.createElement(re.a,null)),r.a.createElement(H.a,{primary:"Your Account"})),r.a.createElement($.a,{button:!0,onClick:function(){return p(!1)},component:h.a,to:"/dashboard/register"},r.a.createElement(z.a,null,r.a.createElement(oe.a,null)),r.a.createElement(H.a,{primary:"Register New Account"})),r.a.createElement($.a,{button:!0,onClick:i},r.a.createElement(z.a,null,r.a.createElement(ie.a,null)),r.a.createElement(H.a,{primary:"logout"}))));return r.a.createElement(n.Fragment,null,r.a.createElement(J.a,null),r.a.createElement("div",{className:a.root},r.a.createElement(Y.a,{position:"absolute",className:a.appBar},r.a.createElement(q.a,null,r.a.createElement(K.a,{color:"inherit","aria-label":"Open drawer",onClick:d,className:a.menuButton},r.a.createElement(Z.a,null)),r.a.createElement(u.a,{variant:"h6",color:"inherit",noWrap:!0},"B8 Dashboard"))),r.a.createElement("nav",{className:a.drawer},r.a.createElement(L.a,{smUp:!0,implementation:"css"},r.a.createElement(G.a,{container:l,variant:"temporary",open:m,onClose:d,classes:{paper:a.drawerPaper}},f)),r.a.createElement(L.a,{xsDown:!0,implementation:"css"},r.a.createElement(G.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},f))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),t)))}),me=t(266),ue=t(90),pe=t.n(ue),de=t(257),fe=t(258),he=t(259),Ee=t(260),ge=t(261),be=function(e){var a=e.videos,t=e.viewDetails;return r.a.createElement("div",null,r.a.createElement("div",{style:{marginTop:20,padding:30}},r.a.createElement(de.a,{container:!0,spacing:2,justify:"center"},a.map(function(e){return r.a.createElement(de.a,{item:!0,key:e.id.$t},r.a.createElement(fe.a,{onClick:function(){return t(e)}},r.a.createElement(he.a,null,r.a.createElement(Ee.a,{component:"img",alt:e.title.$t,height:"140",width:"auto",image:e.media$thumbnail.url,title:e.title.$t}),r.a.createElement(ge.a,null,r.a.createElement(u.a,{gutterBottom:!0,variant:"p",component:"h2"},e.title.$t),r.a.createElement(u.a,{component:"p"},e.published.$t)))))}))))},ve=t(264),ye=t(271),Oe=t(265),we=t(133),Ce=t.n(we),je=t(91),ke=t.n(je),xe=t(132),Ne=t.n(xe),De=t(270),Ae=t(262),Se=t(263),Pe=function(e){var a=e.handleChangeSearch,t=e.divisions,n=e.division,l=e.classes,i=e.viewers,c=e.handleProfileDialogClickOpen;return r.a.createElement("div",null,r.a.createElement(N.a,{id:"demo-simple-select-label"},"Division"),r.a.createElement(De.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,onChange:function(e){return a(e.target.value)}},t.map(function(e){return r.a.createElement(Ae.a,{key:e,value:e},e)})),r.a.createElement(W.a,{className:l.root},i.map(function(e,a){return r.a.createElement("div",{key:e.uid},r.a.createElement($.a,{alignItems:"flex-start"},r.a.createElement(Se.a,null,r.a.createElement(m.a,{button:!0,alt:e.name,src:e.profile_pic,onClick:function(){return c(e)}})),r.a.createElement(H.a,{primary:e.name,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{component:"span",variant:"body2",className:l.inline,color:"textPrimary"},e.date),r.a.createElement("br",null),r.a.createElement(u.a,{component:"span",variant:"body2",className:l.inline,color:"textPrimary"},"9 "+e.division),r.a.createElement("br",null),"Admission NO: "+e.admission_no)})),r.a.createElement(T.a,{variant:"inset",component:"li"}))})))},Fe=t(281),Me=t(131),_e=t.n(Me),Re=function(e){var a=e.classes,t=e.comment,n=e.index,l=e.handleProfileDialogClickOpen,i=e.handleCommentDialogClickOpen;return r.a.createElement("div",{key:t.date+n},r.a.createElement($.a,{alignItems:"flex-start",button:!0,onClick:function(){return i?i(t):null}},r.a.createElement(Se.a,null,r.a.createElement(m.a,{alt:t.name,src:t.profile_pic,onClick:function(){return l?l(t):null}})),r.a.createElement(H.a,{primary:t.name,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary"},t.date),r.a.createElement("br",null),r.a.createElement(u.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary"},"9 "+t.division+"  Admi_NO: "+t.admission_no),r.a.createElement("br",null),t.comment)})),r.a.createElement(T.a,{variant:"inset",component:"li"}))},Ie=function(e){var a=e.classes,t=e.comment,n=e.setComment,l=e.comments,i=e.handleProfileDialogClickOpen,c=e.handleNewComment,o=e.handleCommentDialogClickOpen;return r.a.createElement("div",null,r.a.createElement(s.a,{className:a.root2},r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(Fe.a,{value:t,autoComplete:"off",className:a.input,placeholder:"Post new comment",onChange:function(e){return n(e.target.value)},multiline:!0})),r.a.createElement(T.a,{className:a.divider,orientation:"vertical"}),r.a.createElement(K.a,{color:"primary",className:a.iconButton,"aria-label":"directions",onClick:function(){return c()}},r.a.createElement(_e.a,null))),r.a.createElement(W.a,{className:a.root},l.map(function(e,t){return r.a.createElement(Re,{classes:a,comment:e,index:t,handleProfileDialogClickOpen:i,handleCommentDialogClickOpen:o})})))},Ue=function(e){var a=e.openCommentDialog,t=e.handleCommentDialogClose,n=e.openCommentObj,l=e.classes,i=e.handleDeleteComment;return r.a.createElement("div",null,r.a.createElement(F.a,{open:a,onClose:function(){return t()},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(M.a,{id:"alert-dialog-title"},n.name),r.a.createElement(_.a,null,r.a.createElement(W.a,{className:l.root},r.a.createElement(Re,{classes:l,comment:n,index:0,handleProfileDialogClickOpen:null}))),r.a.createElement(R.a,null,r.a.createElement(p.a,{onClick:function(){return t()},color:"primary"},"Close"),r.a.createElement(p.a,{onClick:function(){return i(n)},color:"primary"},"Delete"))))},Be=function(e){var a=e.openProfileDialog,t=e.handleProfileDialogClose,n=e.openProfileObj;return r.a.createElement("div",null,r.a.createElement(F.a,{open:a,onClose:function(){return t()},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(M.a,{id:"alert-dialog-title"},n.name),r.a.createElement(_.a,null,r.a.createElement("img",{src:n.profile_pic,alt:n.name,width:"100%",height:"auto"})),r.a.createElement(R.a,null,r.a.createElement(p.a,{onClick:function(){return t()},color:"primary"},"Close"))))},Le=f()(function(e){return{root:{width:"100%",maxWidth:"36ch"},inline:{display:"inline"},root2:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}})(function(e){var a=e.classes,t=e.users,l=e.video,i=e.goBack,o=Object(n.useState)(0),s=Object(c.a)(o,2),m=s[0],d=s[1],f=Object(n.useState)([]),h=Object(c.a)(f,2),E=h[0],g=h[1],b=Object(n.useState)(0),v=Object(c.a)(b,2),y=v[0],O=v[1],w=Object(n.useState)(0),C=Object(c.a)(w,2),k=C[0],x=C[1],N=Object(n.useState)([]),D=Object(c.a)(N,2),A=D[0],S=D[1],P=Object(n.useState)([]),F=Object(c.a)(P,2),M=F[0],_=F[1],R=Object(n.useState)(!1),I=Object(c.a)(R,2),U=I[0],B=I[1],L=Object(n.useState)({}),T=Object(c.a)(L,2),W=T[0],$=T[1],z=Object(n.useState)("ALL"),H=Object(c.a)(z,2),J=H[0],Y=H[1],q=Object(n.useState)(""),G=Object(c.a)(q,2),Q=G[0],V=G[1],Z=Object(n.useState)(!1),X=Object(c.a)(Z,2),ee=X[0],ae=X[1],te=Object(n.useState)({}),ne=Object(c.a)(te,2),re=ne[0],le=ne[1],ie=function(e){B(!0),$(e)},ce=function(){ae(!1),le({})},oe=function(){var e=new Date,a=e.getDate(),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],n=e.getFullYear();return"".concat(a,"-").concat(t,"-").concat(n)};Object(n.useEffect)(function(){j.database.ref("videos/views/"+l.id.$t).once("value").then(function(e){var a=e.val(),n=[];for(var r in O(e.numChildren()),a)if(t.hasOwnProperty(r)){var l=t[r];l.uid=r,l.date=a[r],n.push(l)}_(n),S(n)}),j.database.ref("videos/likes/"+l.id.$t).once("value").then(function(e){var a=0;e.forEach(function(e){e.val()&&a++}),x(a)}),se()},[]);var se=function(){j.database.ref("videos/comments/"+l.id.$t).once("value").then(function(e){var a=[];e.forEach(function(e){var n=e.val(),r=n.uid;t.hasOwnProperty(r)&&(n.name=t[r].name||"????",n.division=t[r].division||"????",n.phone=t[r].phone||"????",n.profile_pic=t[r].profile_pic||"????",n.admission_no=t[r].admission_no||"????",n.key=e.key||"",a.push(n))}),g(a)})};return r.a.createElement("div",null,r.a.createElement(p.a,{onClick:function(){return i()},color:"primary",startIcon:r.a.createElement(Ne.a,null)}," ","Back"," "),r.a.createElement(fe.a,null,r.a.createElement(he.a,null,r.a.createElement(Ee.a,{component:"img",alt:l.title.$t,width:"auto",image:l.media$thumbnail.url,title:l.title.$t}),r.a.createElement(ge.a,null,r.a.createElement(u.a,{gutterBottom:!0,variant:"p",component:"h2"},l.title.$t)),r.a.createElement(ve.a,null,r.a.createElement(u.a,{component:"p"},l.published.$t),r.a.createElement(K.a,{"aria-label":"Likes"},r.a.createElement(Ce.a,null)),k,r.a.createElement(K.a,{"aria-label":"Views"},r.a.createElement(ke.a,null)),y))),r.a.createElement(ye.a,{value:m,onChange:function(e,a){d(a)},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(Oe.a,{label:"Views"}),r.a.createElement(Oe.a,{label:"Comments "+E.length})),0===m?r.a.createElement(Pe,{handleChangeSearch:function(e){Y(e),_("ALL"===e?A:A.filter(function(a){return a.division===e}))},divisions:["ALL","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","TEACHER"],division:J,classes:a,viewers:M,handleProfileDialogClickOpen:ie}):r.a.createElement(Ie,{classes:a,comment:Q,setComment:V,comments:E,handleProfileDialogClickOpen:ie,handleNewComment:function(){if(""===Q)alert("Please enter a comment");else{var e=oe(),a={comment:Q,date:e,uid:j.auth.currentUser.uid};j.database.ref("videos/comments/"+l.id.$t).push(a,function(e){e?alert(e):(se(),V(""))})}},handleCommentDialogClickOpen:function(e){ae(!0),le(e)}}),r.a.createElement(Be,{openProfileDialog:U,handleProfileDialogClose:function(){B(!1),$({})},openProfileObj:W}),r.a.createElement(Ue,{openCommentDialog:ee,handleCommentDialogClose:ce,openCommentObj:re,classes:a,handleDeleteComment:function(e){j.database.ref("videos/comments/"+l.id.$t+"/"+e.key).remove(function(e){e?alert(e):(ce(),se())})}}))}),Te=function(e){var a=e.Tag,t=Object(n.useState)(!0),l=Object(c.a)(t,2),i=l[0],o=l[1],s=Object(n.useState)(!1),m=Object(c.a)(s,2),u=(m[0],m[1]),p=Object(n.useState)([]),d=Object(c.a)(p,2),f=d[0],h=d[1],E=Object(n.useState)(null),g=Object(c.a)(E,2),b=g[0],v=g[1],y=Object(n.useState)({"3aTOYUUdZUOZIbGOijrhtYHatlQ2":{admission_no:"18041656",division:"G",name:"MOHAMMED ASHAD",phone:"8089931063",profile_pic:"https://firebasestorage.googleapis.com/v0/b/ninetizen.appspot.com/o/profile_pics%2F3aTOYUUdZUOZIbGOijrhtYHatlQ2..jpg?alt=media&token=8cf44c90-1554-4e7a-9854-150449468c42"},BXqMKgDjEteL5xiPZkrXsfyvs773:{admission_no:"36766",division:"O",name:"MUHAMMED JASEEL",phone:"9544952685",profile_pic:"https://firebasestorage.googleapis.com/v0/b/ninetizen.appspot.com/o/profile_pics%2FBXqMKgDjEteL5xiPZkrXsfyvs773..jpg?alt=media&token=ee2c3200-0010-4b67-a2d3-d539678e2bad"},DThdtwhNDvg4VmRJaDYBBKxSB1k1:{admission_no:"19131567",division:"D",name:"MOHAMMED ASHAR MM",phone:"8137921905",profile_pic:"https://firebasestorage.googleapis.com/v0/b/ninetizen.appspot.com/o/profile_pics%2FDThdtwhNDvg4VmRJaDYBBKxSB1k1..jpg?alt=media&token=ea1cc4be-e3cd-4862-bea9-a1521afc5993"},kgn4gV42I3NbY132bfbOU7hAzp02:{admission_no:"000000",division:"Q",name:"TESTER",phone:8089931063,profile_pic:"https://via.placeholder.com/150"},yWD6SbzzLpYFAlouqI405omMi1p2:{admission_no:"18041656",division:"AD",name:"MOHAMMED ASHAD MM",phone:"9895908979",profile_pic:"https://firebasestorage.googleapis.com/v0/b/ninetizen.appspot.com/o/profile_pics%2FyWD6SbzzLpYFAlouqI405omMi1p2..png?alt=media&token=fcc2a50d-2a26-4867-8777-9feaa6dc4f82"}}),O=Object(c.a)(y,2),w=O[0],C=O[1];return Object(n.useEffect)(function(){v(null),o(!0),pe.a.get("https://script.google.com/macros/s/AKfycbzR9H9BWSJnU1_mm-R2wpc38cqflfdItKbIIyvtQtiEGsFARB8/exec?url=https://pkmmhss9thqicqic.blogspot.com/feeds/posts/default/-/".concat(a,"?alt=json")).then(function(e){if(o(!1),e.data.feed.hasOwnProperty("entry")){var a=e.data.feed.entry.map(function(e){var a="post"+e.id.$t.split("post")[1];return e.id.$t=a,e.views=0,e.published.$t=function(e){var a=new Date(e),t=a.getDate(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],r=a.getFullYear();return"".concat(t,"-").concat(n,"-").concat(r)}(e.published.$t),e.hasOwnProperty("media$thumbnail")?e.media$thumbnail.url=e.media$thumbnail.url.replace("/s72-c/","/s300/"):e.media$thumbnail={url:""},e});h(a)}}).catch(function(e){u(!0),o(!1)}),j.database.ref("users").once("value").then(function(e){C(e.val())})},[a]),!0!==i?r.a.createElement("div",null,r.a.createElement("h2",null,a," Videos"),r.a.createElement("hr",null),b?r.a.createElement(Le,{users:w,video:b,goBack:function(){v(null)}}):r.a.createElement(be,{videos:f,viewDetails:function(e){v(e)}})):r.a.createElement("div",{id:"loader"},r.a.createElement(me.a,null))},We=t(267),$e=t(134),ze=t.n($e),He=Object(We.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});var Je=function(){var e=He();return r.a.createElement("div",null,r.a.createElement("main",{className:e.main},r.a.createElement(fe.a,{className:e.root},r.a.createElement(ge.a,null,r.a.createElement(u.a,{variant:"h5",component:"h2"},"404"),r.a.createElement(u.a,{className:e.pos,color:"textSecondary"},"Page Not Found"),r.a.createElement(u.a,{variant:"body2",component:"p"},"The page you are looking for does not exist. Sorry"," ",r.a.createElement(ze.a,null))),r.a.createElement(ve.a,null,r.a.createElement(p.a,{size:"small",component:h.a,to:"/"},"Home Page")))))},Ye=function(e){var a=new Date(e),t=a.getDate(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],r=a.getFullYear();return"".concat(t,"-").concat(n,"-").concat(r)},qe=function(){var e={root:{width:"100%",maxWidth:"36ch"},inline:{display:"inline"}},a=Object(n.useState)(!0),t=Object(c.a)(a,2),l=t[0],i=t[1],o=Object(n.useState)(!1),s=Object(c.a)(o,2),p=(s[0],s[1]),d=Object(n.useState)([]),f=Object(c.a)(d,2),h=f[0],E=f[1];return Object(n.useEffect)(function(){pe.a.get("https://script.google.com/macros/s/AKfycbyJCw-SQlthY4K2w0zz9HFuYU2GhNu8YVAsKHc6lTxegw5_N9QX/exec?action=read").then(function(e){E(e.data),i(!1)}).catch(function(e){p(!0),i(!1)})},[]),!0!==l?r.a.createElement("div",null,r.a.createElement("h3",null,"Feedbacks/Helps "),r.a.createElement(W.a,{className:e.root},h.reverse().map(function(a,t){return r.a.createElement("div",{key:a.date+t},r.a.createElement($.a,{alignItems:"flex-start"},r.a.createElement(Se.a,null,r.a.createElement(m.a,{alt:a.name,src:"https://ui-avatars.com/api/?name="+a.name})),r.a.createElement(H.a,{primary:a.name,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"},a.class+" - "+Ye(a.date)),r.a.createElement("br",null),r.a.createElement(u.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"},a.phone),r.a.createElement("br",null),a.message)})),r.a.createElement(T.a,{variant:"inset",component:"li"}))}))):r.a.createElement("div",{id:"loader"},r.a.createElement(me.a,null))},Ke=t(268),Ge=t(135),Qe=t.n(Ge),Ve=f()(function(e){return{main:Object(o.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},submit:{marginTop:3*e.spacing.unit}}})(function(e){var a=e.classes,t=e.logout,l=j.auth.currentUser,i=Object(n.useState)({admission_no:"",division:"TEACHER",name:"Admin",phone:"8089931063",profile_pic:"https://ui-avatars.com/api/?name=Admin"}),o=Object(c.a)(i,2),d=o[0],f=o[1],h=Object(n.useState)(""),E=Object(c.a)(h,2),g=E[0],b=E[1],v=Object(n.useState)(!1),y=Object(c.a)(v,2),O=y[0],w=y[1];Object(n.useEffect)(function(){j.database.ref("users/"+l.uid).once("value").then(function(e){f(e.val())})});return d?r.a.createElement("div",null,r.a.createElement(s.a,{className:a.paper},r.a.createElement(m.a,{className:a.avatar,alt:d.name,src:d.profile_pic}),r.a.createElement(u.a,{component:"h1",variant:"h5"},"Hello ",d.name,"!"),r.a.createElement(u.a,null,"Email: ",l.email),r.a.createElement(u.a,null,"Mobile Number: ",d.phone),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(N.a,{htmlFor:"password"},"New Password"),r.a.createElement(D.a,{fullWidth:!0,id:"password",type:O?"text":"password",value:g,onChange:function(e){return b(e.target.value)},endAdornment:r.a.createElement(Ke.a,{position:"end"},r.a.createElement(K.a,{"aria-label":"toggle password visibility",onClick:function(){w(!O)},onMouseDown:function(e){e.preventDefault()}},O?r.a.createElement(ke.a,null):r.a.createElement(Qe.a,null)))}),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",onClick:function(){""===g?alert("Enter a password"):l.updatePassword(g).then(function(){t(),alert("Password changed successfully")}).catch(function(e){alert(e)})},className:a.submit},"Change Password")))):r.a.createElement("div",{id:"loader"},r.a.createElement(me.a,null))}),Ze=t(275),Xe=t(278),ea=t(269);var aa=Object(P.a)(f()(function(e){return{main:{},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},submit:{marginTop:3*e.spacing.unit}}})(function(e){e.match.url;var a=e.classes;if(!j.getCurrentUsername())return alert("Please login first"),e.history.replace("/login"),null;var t=Object(n.useState)(""),l=Object(c.a)(t,2),i=l[0],o=l[1];Object(n.useEffect)(function(){j.database.ref("flashNews/flashNews/newsLine").once("value").then(function(e){o(e.val())})},[]);var s=function(){j.database.ref("flashNews/flashNews/newsLine").set(i,function(e){e?alert(e):alert("Updated")})};return r.a.createElement("main",{className:a.main},r.a.createElement(Ze.a,null,r.a.createElement(Xe.a,null,r.a.createElement(ea.a,{exact:!0,path:"/dashboard",render:function(){return r.a.createElement(se,{logout:m},r.a.createElement(x.a,{fullWidth:!0},r.a.createElement(N.a,{htmlFor:"news"},"Flash News"),r.a.createElement(D.a,{name:"news",type:"text",id:"news",autoComplete:"off",value:i,onChange:function(e){return o(e.target.value)},multiline:!0}),r.a.createElement(p.a,{type:"submit",variant:"contained",color:"secondary",onClick:s,className:a.submit},"Update")))}}),r.a.createElement(ea.a,{exact:!0,path:"/dashboard/feedbacks",render:function(){return r.a.createElement(se,{logout:m},r.a.createElement(qe,null))}}),r.a.createElement(ea.a,{exact:!0,path:"/dashboard/tip videos",render:function(){return r.a.createElement(se,{logout:m},r.a.createElement(Te,{Tag:"Ninetizen"}))}}),r.a.createElement(ea.a,{exact:!0,path:"/dashboard/follow up videos",render:function(){return r.a.createElement(se,{logout:m},r.a.createElement(Te,{Tag:"Follow up"}))}}),r.a.createElement(ea.a,{exact:!0,path:"/dashboard/Profile",render:function(){return r.a.createElement(se,{logout:m},r.a.createElement(Ve,{logout:m}))}}),r.a.createElement(ea.a,{exact:!0,path:"/dashboard/register",render:function(){return r.a.createElement(se,{logout:m},r.a.createElement(B,null))}}),r.a.createElement(ea.a,{render:function(){return r.a.createElement(se,{logout:m},r.a.createElement(Je,null))}}))));function m(){return u.apply(this,arguments)}function u(){return(u=Object(b.a)(g.a.mark(function a(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j.logout();case 2:e.history.push("/");case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}})),ta=t(202),na=t(105),ra=Object(ta.a)();function la(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)(function(){j.isInitialized().then(function(e){l(e)})}),!1!==t?r.a.createElement(na.a,{theme:ra},r.a.createElement(J.a,null),r.a.createElement(Ze.a,null,r.a.createElement(Xe.a,null,r.a.createElement(ea.a,{exact:!0,path:"/",component:k}),r.a.createElement(ea.a,{exact:!0,path:"/login",component:U}),r.a.createElement(ea.a,{exact:!0,path:"/register",component:B}),r.a.createElement(ea.a,{path:"/dashboard",component:aa}),r.a.createElement(ea.a,{component:Je})))):r.a.createElement("div",{id:"loader"},r.a.createElement(me.a,null))}i.a.render(r.a.createElement(la,null),document.getElementById("root"))}},[[142,2,1]]]);
//# sourceMappingURL=main.c8496d2d.chunk.js.map