(this["webpackJsonpbasic-proj"]=this["webpackJsonpbasic-proj"]||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/forgot-password.63f5a96a.png"},37:function(e,a,t){},53:function(e,a,t){e.exports=t(86)},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(22),l=t.n(s),c=(t(37),t(10)),o=t(11),m=t(13),u=t(12),i=t(20),p=t(8),d=t(16),b=Object(d.a)(),f=t(14),E=t(23),h=t.n(E),O=t(30),g=t(48),N=t.n(g);t(79).config();var v=N.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/basic-proj",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://immense-mesa-71524.herokuapp.com/api/"}),j=t(6),T=(t(24),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleitem=function(e,a){n.props.logout(),b.push(a)},n.state={userdata:n.props.userInfo},console.log("UserData-------------",n.state.userdata),n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-tabs bg-blue"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/user-dashboard",className:"nav-link"},"User Dashboard")),r.a.createElement("li",{className:"nav-item"},this.state.userdata?r.a.createElement(i.b,{onClick:function(a){return e.handleitem(a,"/login")},className:"nav-link",style:{marginLeft:"1050px"}},"Logout"):r.a.createElement(i.b,{to:"/login",className:"nav-link",style:{marginLeft:"1050px"}},"Login"))))}}]),t}(n.Component)),I=Object(f.b)((function(e){return{userInfo:e.auth.login.userInfo}}),{logout:function(){return function(e){e({type:"LOGOUT"}),b.push("/login")}}})(T),y=(r.a.Component,t(90)),S=t(91),w=t(92),R=t(93),k=t(94),P=t(95),D=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={counter:0},console.log("PROPSSS",n.state.counter),n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(y.a,null,r.a.createElement(S.a,{sm:"12"},r.a.createElement(w.a,{className:"pt-4"},r.a.createElement(R.a,null,"User Dashboard"),r.a.createElement(k.a,null,r.a.createElement(S.a,{sm:"12"},r.a.createElement(y.a,null,r.a.createElement(S.a,{sm:"12"},r.a.createElement(P.a,{onClick:function(){return console.log("IS AUTHENTICATED",e.props.isSuccess)}},"Counter")),r.a.createElement(S.a,{sm:"12"},r.a.createElement(P.a,{onClick:function(){return console.log("IS handle",e.props.handleClick())}},"Dispatch Action"))))))))}}]),t}(r.a.Component),C=Object(f.b)((function(e){return{isSuccess:e.globalReducer.isSuccess}}),(function(e){return{handleClick:function(){return e({type:"SUCCESS"})}}}))(D),x=t(21),_=t(9),L=t(96),A=t(97),U=t(98),G=t(99),H=t(101),F=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleInput=function(e){e.persist(),n.setState((function(a){return{formData:Object(_.a)(Object(_.a)({},a.formData),{},Object(x.a)({},e.target.name,e.target.value))}}))},n.handleFormSubmit=function(){var e;console.log("FORMDATA===",n.state.formData),n.props.dispatch((e=n.state.formData,function(a){v.post("/signin",{email:e.email,password:e.password}).then((function(e){var t=e.data.user;t?(a({type:"LOGIN_WITH_JWT",payload:{userInfo:t,accessToken:e.data.token}}),j.b.success("Login Successfully",{position:j.b.POSITION.BOTTOM_RIGHT}),setTimeout((function(){b.push("/user-dashboard")}),2e3)):j.b.success("User email & password doesn't match",{position:j.b.POSITION.BOTTOM_RIGHT})})).catch((function(e){j.b.error("User email & password doesn't match",{position:j.b.POSITION.BOTTOM_RIGHT})}))}))},n.state={counter:0,formData:{}},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(y.a,{className:"m-0 justify-content-center"},r.a.createElement(S.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center pt-4"},r.a.createElement(w.a,{className:"rounded-0 mb-0 px-2"},r.a.createElement(R.a,null,"Login"),r.a.createElement(k.a,null,r.a.createElement(S.a,{sm:"12"},r.a.createElement(L.a,{onSubmit:function(a){a.preventDefault(),e.handleFormSubmit()}},r.a.createElement(y.a,null,r.a.createElement(S.a,{sm:"12"},r.a.createElement(A.a,null,r.a.createElement(U.a,null,"Email"),r.a.createElement(G.a,{type:"email",placeholder:"Email",name:"email",onChange:this.handleInput}))),r.a.createElement(S.a,{sm:"12"},r.a.createElement(A.a,null,r.a.createElement(U.a,null,"Password"),r.a.createElement(G.a,{type:"password",placeholder:"Password",name:"password",onChange:this.handleInput})),r.a.createElement(A.a,{className:"d-flex justify-content-between align-items-center"},r.a.createElement(H.a,{className:"pt-1 ml-2",type:"checkbox",name:"donotcall",id:"donotcall",label:"Remember me"}),r.a.createElement("div",{className:"float-right"},r.a.createElement(i.b,{to:"/forgotpassword"},"Forgot Password?"))),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(P.a,{color:"primary",outline:!0,onClick:function(){b.push("/register")}},"Register"),r.a.createElement(P.a,{color:"primary",type:"submit"},"Login")),r.a.createElement(j.a,null)))))))))}}]),t}(r.a.Component),M=Object(f.b)((function(e){return{}}))(F),B=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleInput=function(e){e.persist(),n.setState((function(a){return{formData:Object(_.a)(Object(_.a)({},a.formData),{},Object(x.a)({},e.target.name,e.target.value))}}),(function(){return console.log(n.state.formData)}))},n.handleavtar=function(e){e.persist(),n.setState((function(a){return{formData:Object(_.a)(Object(_.a)({},a.formData),{},Object(x.a)({},e.target.name,e.target.files[0]))}}),(function(){return console.log(e.target.files)}))},n.handleFormSubmit=function(){var e;n.props.dispatch((e=n.state.formData,function(){var a=Object(O.a)(h.a.mark((function a(t){var n,r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("ADD USER",e),(n=new FormData).append("firstName",e.firstName),n.append("lastName",e.lastName),n.append("email",e.email),n.append("password",e.password),n.append("address",e.address),n.append("mobile",e.mobile),n.append("avtar",e.avtar),a.next=11,v.post("create/users",n);case 11:return r=a.sent,console.log("ADD USER=======",r),a.abrupt("return",r);case 14:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())).then((function(e){console.log("REGISTER DATAA",e),e.data?(j.b.success("Register Successfully",{position:j.b.POSITION.BOTTOM_RIGHT}),setTimeout((function(){b.push("/login")}),3e3)):j.b.error("Register is not Successfully",{position:j.b.POSITION.BOTTOM_RIGHT})})).catch((function(e){j.b.error("Register is not Successfully",{position:j.b.POSITION.BOTTOM_RIGHT})}))},n.state={counter:0,formData:{}},console.log("PROPSSS",n.props),n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(y.a,{className:"m-0"},r.a.createElement(S.a,{sm:"12",className:" pt-4"},r.a.createElement(w.a,{className:"rounded-0 mb-0 px-2"},r.a.createElement(R.a,null,"Register"),r.a.createElement(k.a,null,r.a.createElement(S.a,{sm:"12"},r.a.createElement(L.a,{onSubmit:function(a){a.preventDefault(),e.handleFormSubmit()}},r.a.createElement(y.a,null,r.a.createElement(S.a,{sm:"12"},r.a.createElement(A.a,null,r.a.createElement(U.a,null,"FirstName"),r.a.createElement(G.a,{type:"text",placeholder:"First Name",name:"firstName",onChange:this.handleInput,required:!0}))),r.a.createElement(S.a,{sm:"12"},r.a.createElement(A.a,{className:"form-label-group"},r.a.createElement(U.a,null,"Last Name"),r.a.createElement(G.a,{type:"text",placeholder:"Last Name",name:"lastName",onChange:this.handleInput,required:!0})),r.a.createElement(A.a,{className:"form-label-group"},r.a.createElement(U.a,null,"Email"),r.a.createElement(G.a,{type:"email",placeholder:"Email",name:"email",onChange:this.handleInput,required:!0})),r.a.createElement(A.a,{className:"form-label-group"},r.a.createElement(U.a,null,"Password"),r.a.createElement(G.a,{type:"password",placeholder:"Password",name:"password",onChange:this.handleInput,required:!0})),r.a.createElement(A.a,{className:"form-label-group"},r.a.createElement(U.a,null,"Avtar"),r.a.createElement(H.a,{type:"file",id:"avtar",name:"avtar",onChange:this.handleavtar})),r.a.createElement(A.a,{className:"form-label-group"},r.a.createElement(U.a,null,"Address"),r.a.createElement(G.a,{type:"textarea",placeholder:"Address",name:"address",onChange:this.handleInput})),r.a.createElement(A.a,{className:"form-label-group"},r.a.createElement(U.a,null,"Phone No"),r.a.createElement(G.a,{type:"Number",placeholder:"Phone No.",name:"mobile",onChange:this.handleInput})),r.a.createElement(S.a,{className:"d-flex justify-content-end flex-wrap mt-2",sm:"12"},r.a.createElement(P.a,{className:"mr-1",color:"primary",type:"submit"},"Register"),r.a.createElement(j.a,null),r.a.createElement(P.a,{color:"primary",outline:!0,type:"button"},"Reset"))))))))))}}]),t}(r.a.Component),W=Object(f.b)(null,(function(e){return{dispatch:e}}))(B),q=t(100),J=t(28),K=t.n(J),V=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleInput=function(e){e.persist(),n.setState((function(a){return{formData:Object(_.a)(Object(_.a)({},a.formData),{},Object(x.a)({},e.target.name,e.target.value))}}))},n.handleFormSubmit=function(){var e;console.log("FORMDATA===",n.state.formData),n.props.dispatch((e=n.state.formData,function(){var a=Object(O.a)(h.a.mark((function a(t){var n,r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={email:e.email},a.next=3,v.put("/forgotpassword",n);case 3:return r=a.sent,a.abrupt("return",r);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())).then((function(e){e.data?j.b.success("Email has been sent, kindly Follow the instruction",{position:j.b.POSITION.BOTTOM_RIGHT}):j.b.error("Something went wrong",{position:j.b.POSITION.BOTTOM_RIGHT})})).catch((function(e){j.b.error("Something went wrong",{position:j.b.POSITION.BOTTOM_RIGHT})}))},n.state={formData:{}},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(y.a,{className:"m-0 justify-content-center"},r.a.createElement(S.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center pt-5"},r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"m-0"},r.a.createElement(S.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center"},r.a.createElement("img",{src:K.a,alt:"fgImg"})),r.a.createElement(S.a,{lg:"6",md:"12",className:"p-0"},r.a.createElement(w.a,{className:"rounded-0 mb-0 px-2 py-1"},r.a.createElement(R.a,{className:"pb-1"},r.a.createElement(q.a,null,r.a.createElement("h4",{className:"mb-0"},"Password Assistance"))),r.a.createElement("p",{className:"px-2 auth-title"},"Please enter your email address and we'll send you instructions on how to reset your password."),r.a.createElement(k.a,{className:"pt-1 pb-0"},r.a.createElement(L.a,{onSubmit:function(a){a.preventDefault(),e.handleFormSubmit()}},r.a.createElement(A.a,{className:"form-label-group"},r.a.createElement(U.a,null,"Email"),r.a.createElement(G.a,{type:"email",placeholder:"Email",name:"email",onChange:this.handleInput})),r.a.createElement("div",{className:"float-md-left d-block mb-1 pt-3"},r.a.createElement(P.a,{color:"primary",outline:!0,className:"px-75 btn-block",onClick:function(){return b.push("https://kunjan-tanna.github.io/basic-proj/#/login")}},"Back to Login")),r.a.createElement("div",{className:"float-md-right d-block mb-1 pt-3"},r.a.createElement(P.a,{color:"primary",type:"submit",className:"px-75 btn-block"},"Continue"),r.a.createElement(j.a,null))))))))))}}]),t}(r.a.Component),X=Object(f.b)((function(e){return{}}))(V),Y=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleInput=function(e){e.persist(),n.setState((function(a){return{newPass:Object(_.a)(Object(_.a)({},a.newPass),{},Object(x.a)({},e.target.name,e.target.value))}}),(function(){return console.log("Name Input",e.target.value)}))},n.handleFormSubmit=function(e){console.log("ResetLink---------",e),console.log("FORMDATA===",n.state.newPass);var a,t={resetLink:e,newPass:n.state.newPass.password};n.props.dispatch((a=t,function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.put("/resetpassword",a);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())).then((function(e){e.data?(j.b.success("Your Password hab been Changed",{position:j.b.POSITION.BOTTOM_RIGHT}),setTimeout((function(){b.push("/login")}),3e3)):j.b.error("USER with a ResetLink does not exists",{position:j.b.POSITION.BOTTOM_RIGHT})})).catch((function(e){j.b.error("USER with a ResetLink does not exists",{position:j.b.POSITION.BOTTOM_RIGHT}),setTimeout((function(){b.push("/forgotpassword")}),3e3)}))},n.state={newPass:"",userInfo:n.props.userInfo},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=this.props.location.search.split("=")[1];return r.a.createElement(y.a,{className:"m-0 justify-content-center"},r.a.createElement(S.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},r.a.createElement(w.a,{className:"bg-authentication rounded-0 mb-0 w-100"},r.a.createElement(y.a,{className:"m-0"},r.a.createElement(S.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center"},r.a.createElement("img",{src:K.a,alt:"fgImg"})),r.a.createElement(S.a,{lg:"6",md:"12",className:"p-0"},r.a.createElement(w.a,{className:"rounded-0 mb-0 px-2 py-1"},r.a.createElement(R.a,{className:"pb-1"},r.a.createElement(q.a,null,r.a.createElement("h4",{className:"mb-0"},"Recover your password"))),r.a.createElement("p",{className:"px-2 auth-title"},"Please enter your ",r.a.createElement("strong",null,"New Password")),r.a.createElement(k.a,{className:"pt-1 pb-0"},r.a.createElement(L.a,{onSubmit:function(t){t.preventDefault(),e.handleFormSubmit(a)}},r.a.createElement(A.a,{className:"form-label-group"},r.a.createElement(G.a,{type:"password",placeholder:"Password",name:"password",onChange:this.handleInput}),r.a.createElement(U.a,null,"Password")),r.a.createElement("div",{className:"float-md-center d-block mb-1"},r.a.createElement(P.a,{color:"primary",type:"submit",className:"px-75 btn-block"},"Recover Password"),r.a.createElement(j.a,null))))))))))}}]),t}(r.a.Component),z=Object(f.b)((function(e){return{}}))(Y),Q=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(i.a,{history:b},r.a.createElement(I,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/user-dashboard",component:C}),r.a.createElement(p.a,{path:"/login",component:M}),r.a.createElement(p.a,{path:"/register",component:W}),r.a.createElement(p.a,{path:"/forgotpassword",component:X}),r.a.createElement(p.a,{path:"/resetpassword",component:z}))))}}]),t}(n.Component);var Z=function(){return r.a.createElement(Q,null)},$=(t(83),t(15)),ee=t(49),ae=t.n(ee),te=t(50),ne=t(29),re={isSuccess:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{isSuccess:!0});case"FAIL":return Object(_.a)(Object(_.a)({},e),{},{isSuccess:!1});default:return e}},le={userRole:"admin",userInfo:"",accessToken:""},ce=Object($.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN_WITH_JWT":return Object.assign({},e,{userInfo:a.payload.userInfo,accessToken:a.payload.accessToken});case"LOGOUT":return le;case"CHANGE_ROLE":return{userRole:a.userRole};default:return e}}}),oe=t(51),me={key:"jwt",storage:t.n(oe).a,whitelist:["auth"]},ue=Object($.c)({globalReducer:se,auth:ce}),ie=Object(ne.a)(me,ue),pe=[te.a,ae()()],de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,be=Object($.e)(ie,{},de($.a.apply(void 0,pe))),fe=Object(ne.b)(be),Ee=t(52);l.a.render(r.a.createElement(f.a,{store:be},r.a.createElement(Ee.a,{persistor:fe},r.a.createElement(i.a,null,r.a.createElement(Z,null)))),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.1efd0c87.chunk.js.map