(this["webpackJsonpbasic-proj"]=this["webpackJsonpbasic-proj"]||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/forgot-password.63f5a96a.png"},37:function(e,a,t){},53:function(e,a,t){e.exports=t(86)},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),s=(t(37),t(10)),o=t(11),m=t(13),i=t(12),u=t(6),p=t(15),d=Object(p.a)(),b=t(22),E=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-tabs bg-blue"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/basic-proj/user-dashboard",className:"nav-link"},"User Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/basic-proj/login",className:"nav-link",style:{marginLeft:"1050px"}},"Login"))))}}]),t}(n.Component),f=t(18),h=(r.a.Component,t(90)),O=t(91),g=t(92),j=t(93),N=t(94),v=t(95),y=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={counter:0},console.log("PROPSSS",n.state.counter),n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement(O.a,{sm:"12"},r.a.createElement(g.a,{className:"pt-4"},r.a.createElement(j.a,null,"User Dashboard"),r.a.createElement(N.a,null,r.a.createElement(O.a,{sm:"12"},r.a.createElement(h.a,null,r.a.createElement(O.a,{sm:"12"},r.a.createElement(v.a,{onClick:function(){return console.log("IS AUTHENTICATED",e.props.isSuccess)}},"Counter")),r.a.createElement(O.a,{sm:"12"},r.a.createElement(v.a,{onClick:function(){return console.log("IS handle",e.props.handleClick())}},"Dispatch Action"))))))))}}]),t}(r.a.Component),S=Object(f.b)((function(e){return{isSuccess:e.globalReducer.isSuccess}}),(function(e){return{handleClick:function(){return e({type:"SUCCESS"})}}}))(y),I=t(20),T=t(9),w=t(96),R=t(97),C=t(98),D=t(99),k=t(101),P=t(25),x=t.n(P),_=t(35),A=t(48),L=t.n(A);t(80).config();var F=L.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/basic-proj",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://immense-mesa-71524.herokuapp.com/api/"}),H=t(8),U=(t(23),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleInput=function(e){e.persist(),n.setState((function(a){return{formData:Object(T.a)(Object(T.a)({},a.formData),{},Object(I.a)({},e.target.name,e.target.value))}}))},n.handleFormSubmit=function(){var e;console.log("FORMDATA===",n.state.formData),n.props.dispatch((e=n.state.formData,function(a){F.post("/signin",{email:e.email,password:e.password}).then((function(e){var t=e.data.user;t?(a({type:"LOGIN_WITH_JWT",payload:{userInfo:t,accessToken:e.data.token}}),H.b.success("Login Successfully",{position:H.b.POSITION.BOTTOM_RIGHT}),setTimeout((function(){d.push("/basic-proj/user-dashboard")}),2e3)):H.b.success("User email & password doesn't match",{position:H.b.POSITION.BOTTOM_RIGHT})})).catch((function(e){H.b.error("User email & password doesn't match",{position:H.b.POSITION.BOTTOM_RIGHT})}))}))},n.state={counter:0,formData:{}},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{className:"m-0 justify-content-center"},r.a.createElement(O.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center pt-4"},r.a.createElement(g.a,{className:"rounded-0 mb-0 px-2"},r.a.createElement(j.a,null,"Login"),r.a.createElement(N.a,null,r.a.createElement(O.a,{sm:"12"},r.a.createElement(w.a,{onSubmit:function(a){a.preventDefault(),e.handleFormSubmit()}},r.a.createElement(h.a,null,r.a.createElement(O.a,{sm:"12"},r.a.createElement(R.a,null,r.a.createElement(C.a,null,"Email"),r.a.createElement(D.a,{type:"email",placeholder:"Email",name:"email",onChange:this.handleInput}))),r.a.createElement(O.a,{sm:"12"},r.a.createElement(R.a,null,r.a.createElement(C.a,null,"Password"),r.a.createElement(D.a,{type:"password",placeholder:"Password",name:"password",onChange:this.handleInput})),r.a.createElement(R.a,{className:"d-flex justify-content-between align-items-center"},r.a.createElement(k.a,{className:"pt-1 ml-2",type:"checkbox",name:"donotcall",id:"donotcall",label:"Remember me"}),r.a.createElement("div",{className:"float-right"},r.a.createElement(b.a,{to:"/basic-proj/forgotpassword"},"Forgot Password?"))),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(v.a,{color:"primary",outline:!0,onClick:function(){d.push("/basic-proj/register")}},"Register"),r.a.createElement(v.a,{color:"primary",type:"submit"},"Login")),r.a.createElement(H.a,null)))))))))}}]),t}(r.a.Component)),G=Object(f.b)((function(e){return{}}))(U),M=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleInput=function(e){e.persist(),n.setState((function(a){return{formData:Object(T.a)(Object(T.a)({},a.formData),{},Object(I.a)({},e.target.name,e.target.value))}}),(function(){return console.log(n.state.formData)}))},n.handleavtar=function(e){e.persist(),n.setState((function(a){return{formData:Object(T.a)(Object(T.a)({},a.formData),{},Object(I.a)({},e.target.name,e.target.files[0]))}}),(function(){return console.log(e.target.files)}))},n.handleFormSubmit=function(){var e;n.props.dispatch((e=n.state.formData,function(){var a=Object(_.a)(x.a.mark((function a(t){var n,r;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("ADD USER",e),(n=new FormData).append("firstName",e.firstName),n.append("lastName",e.lastName),n.append("email",e.email),n.append("password",e.password),n.append("address",e.address),n.append("mobile",e.mobile),n.append("avtar",e.avtar),a.next=11,F.post("create/users",n);case 11:return r=a.sent,console.log("ADD USER=======",r),a.abrupt("return",r);case 14:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())).then((function(e){console.log("REGISTER DATAA",e),e.data?(H.b.success("Register Successfully",{position:H.b.POSITION.BOTTOM_RIGHT}),setTimeout((function(){d.push("/basic-proj/login")}),3e3)):H.b.error("Register is not Successfully",{position:H.b.POSITION.BOTTOM_RIGHT})})).catch((function(e){H.b.error("Register is not Successfully",{position:H.b.POSITION.BOTTOM_RIGHT})}))},n.state={counter:0,formData:{}},console.log("PROPSSS",n.props),n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{className:"m-0"},r.a.createElement(O.a,{sm:"12",className:" pt-4"},r.a.createElement(g.a,{className:"rounded-0 mb-0 px-2"},r.a.createElement(j.a,null,"Register"),r.a.createElement(N.a,null,r.a.createElement(O.a,{sm:"12"},r.a.createElement(w.a,{onSubmit:function(a){a.preventDefault(),e.handleFormSubmit()}},r.a.createElement(h.a,null,r.a.createElement(O.a,{sm:"12"},r.a.createElement(R.a,null,r.a.createElement(C.a,null,"FirstName"),r.a.createElement(D.a,{type:"text",placeholder:"First Name",name:"firstName",onChange:this.handleInput,required:!0}))),r.a.createElement(O.a,{sm:"12"},r.a.createElement(R.a,{className:"form-label-group"},r.a.createElement(C.a,null,"Last Name"),r.a.createElement(D.a,{type:"text",placeholder:"Last Name",name:"lastName",onChange:this.handleInput,required:!0})),r.a.createElement(R.a,{className:"form-label-group"},r.a.createElement(C.a,null,"Email"),r.a.createElement(D.a,{type:"email",placeholder:"Email",name:"email",onChange:this.handleInput,required:!0})),r.a.createElement(R.a,{className:"form-label-group"},r.a.createElement(C.a,null,"Password"),r.a.createElement(D.a,{type:"password",placeholder:"Password",name:"password",onChange:this.handleInput,required:!0})),r.a.createElement(R.a,{className:"form-label-group"},r.a.createElement(C.a,null,"Avtar"),r.a.createElement(k.a,{type:"file",id:"avtar",name:"avtar",onChange:this.handleavtar})),r.a.createElement(R.a,{className:"form-label-group"},r.a.createElement(C.a,null,"Address"),r.a.createElement(D.a,{type:"textarea",placeholder:"Address",name:"address",onChange:this.handleInput})),r.a.createElement(R.a,{className:"form-label-group"},r.a.createElement(C.a,null,"Phone No"),r.a.createElement(D.a,{type:"Number",placeholder:"Phone No.",name:"mobile",onChange:this.handleInput})),r.a.createElement(O.a,{className:"d-flex justify-content-end flex-wrap mt-2",sm:"12"},r.a.createElement(v.a,{className:"mr-1",color:"primary",type:"submit"},"Register"),r.a.createElement(H.a,null),r.a.createElement(v.a,{color:"primary",outline:!0,type:"button"},"Reset"))))))))))}}]),t}(r.a.Component),B=Object(f.b)(null,(function(e){return{dispatch:e}}))(M),W=t(100),q=t(28),J=t.n(q),K=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleInput=function(e){e.persist(),n.setState((function(a){return{formData:Object(T.a)(Object(T.a)({},a.formData),{},Object(I.a)({},e.target.name,e.target.value))}}))},n.handleFormSubmit=function(){var e;console.log("FORMDATA===",n.state.formData),n.props.dispatch((e=n.state.formData,function(){var a=Object(_.a)(x.a.mark((function a(t){var n,r;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={email:e.email},a.next=3,F.put("/forgotpassword",n);case 3:return r=a.sent,a.abrupt("return",r);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())).then((function(e){e.data?H.b.success("Email has been sent, kindly Follow the instruction",{position:H.b.POSITION.BOTTOM_RIGHT}):H.b.error("Something went wrong",{position:H.b.POSITION.BOTTOM_RIGHT})})).catch((function(e){H.b.error("Something went wrong",{position:H.b.POSITION.BOTTOM_RIGHT})}))},n.state={formData:{}},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{className:"m-0 justify-content-center"},r.a.createElement(O.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center pt-5"},r.a.createElement(g.a,null,r.a.createElement(h.a,{className:"m-0"},r.a.createElement(O.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center"},r.a.createElement("img",{src:J.a,alt:"fgImg"})),r.a.createElement(O.a,{lg:"6",md:"12",className:"p-0"},r.a.createElement(g.a,{className:"rounded-0 mb-0 px-2 py-1"},r.a.createElement(j.a,{className:"pb-1"},r.a.createElement(W.a,null,r.a.createElement("h4",{className:"mb-0"},"Password Assistance"))),r.a.createElement("p",{className:"px-2 auth-title"},"Please enter your email address and we'll send you instructions on how to reset your password."),r.a.createElement(N.a,{className:"pt-1 pb-0"},r.a.createElement(w.a,{onSubmit:function(a){a.preventDefault(),e.handleFormSubmit()}},r.a.createElement(R.a,{className:"form-label-group"},r.a.createElement(C.a,null,"Email"),r.a.createElement(D.a,{type:"email",placeholder:"Email",name:"email",onChange:this.handleInput})),r.a.createElement("div",{className:"float-md-left d-block mb-1 pt-3"},r.a.createElement(v.a,{color:"primary",outline:!0,className:"px-75 btn-block",onClick:function(){return d.push("/basic-proj/login")}},"Back to Login")),r.a.createElement("div",{className:"float-md-right d-block mb-1 pt-3"},r.a.createElement(v.a,{color:"primary",type:"submit",className:"px-75 btn-block"},"Continue"),r.a.createElement(H.a,null))))))))))}}]),t}(r.a.Component),V=Object(f.b)((function(e){return{}}))(K),X=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleInput=function(e){e.persist(),n.setState((function(a){return{newPass:Object(T.a)(Object(T.a)({},a.newPass),{},Object(I.a)({},e.target.name,e.target.value))}}),(function(){return console.log("Name Input",e.target.value)}))},n.handleFormSubmit=function(e){},n.state={newPass:"",userInfo:n.props.userInfo},n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{className:"m-0 justify-content-center"},r.a.createElement(O.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},r.a.createElement(g.a,{className:"bg-authentication rounded-0 mb-0 w-100"},r.a.createElement(h.a,{className:"m-0"},r.a.createElement(O.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center"},r.a.createElement("img",{src:J.a,alt:"fgImg"})),r.a.createElement(O.a,{lg:"6",md:"12",className:"p-0"},r.a.createElement(g.a,{className:"rounded-0 mb-0 px-2 py-1"},r.a.createElement(j.a,{className:"pb-1"},r.a.createElement(W.a,null,r.a.createElement("h4",{className:"mb-0"},"Recover your password"))),r.a.createElement("p",{className:"px-2 auth-title"},"Please enter your ",r.a.createElement("strong",null,"New Password")),r.a.createElement(N.a,{className:"pt-1 pb-0"},r.a.createElement(w.a,null,r.a.createElement(R.a,{className:"form-label-group"},r.a.createElement(D.a,{type:"password",placeholder:"Password",name:"password",onChange:this.handleInput}),r.a.createElement(C.a,null,"Password")),r.a.createElement("div",{className:"float-md-center d-block mb-1"},r.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"px-75 btn-block"},"Recover Password"),r.a.createElement(H.a,null))))))))))}}]),t}(r.a.Component),z=Object(f.b)((function(e){return{}}))(X),Q=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.b,{history:d},r.a.createElement(E,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/basic-proj/user-dashboard",component:S}),r.a.createElement(u.a,{path:"/basic-proj/login",component:G}),r.a.createElement(u.a,{path:"/basic-proj/register",component:B}),r.a.createElement(u.a,{path:"/basic-proj/forgotpassword",component:V}),r.a.createElement(u.a,{path:"/basic-proj/resetpassword",component:z}))))}}]),t}(n.Component);var Y=function(){return r.a.createElement(Q,null)},Z=(t(83),t(14)),$=t(49),ee=t.n($),ae=t(50),te=t(29),ne={isSuccess:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SUCCESS":return Object(T.a)(Object(T.a)({},e),{},{isSuccess:!0});case"FAIL":return Object(T.a)(Object(T.a)({},e),{},{isSuccess:!1});default:return e}},le={userRole:"admin",userInfo:"",accessToken:""},ce=Object(Z.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN_WITH_JWT":return Object.assign({},e,{userInfo:a.payload.userInfo,accessToken:a.payload.accessToken});case"LOGOUT":return le;case"CHANGE_ROLE":return{userRole:a.userRole};default:return e}}}),se=t(51),oe={key:"jwt",storage:t.n(se).a,whitelist:["auth"]},me=Object(Z.c)({globalReducer:re,auth:ce}),ie=Object(te.a)(oe,me),ue=[ae.a,ee()()],pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,de=Object(Z.e)(ie,{},pe(Z.a.apply(void 0,ue))),be=Object(te.b)(de),Ee=t(52);c.a.render(r.a.createElement(f.a,{store:de},r.a.createElement(Ee.a,{persistor:be},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)))),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.88eaebac.chunk.js.map