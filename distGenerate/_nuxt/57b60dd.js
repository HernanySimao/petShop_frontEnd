(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{313:function(t,e,o){var content=o(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("539c064c",content,!0,{sourceMap:!1})},323:function(t,e,o){"use strict";o(313)},324:function(t,e,o){var n=o(64)((function(i){return i[1]}));n.push([t.i,".text-orage[data-v-c54004ac]{color:#ff5b2e}.btn-orage[data-v-c54004ac]{background:#ff5b2e;border-radius:20px;color:#fff;padding:10px 30px;transition:all .2s}.btn-orage[data-v-c54004ac]:hover{background:#a73b1d}",""]),n.locals={},t.exports=n},330:function(t,e,o){"use strict";o.r(e);var n=o(12),r=(o(66),{data:function(){return{email:"",senha:"",loadingReq:!1}},methods:{Toast:function(){var t=this;return this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",t.$swal.stopTimer),e.addEventListener("mouseleave",t.$swal.resumeTimer)}})},login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/users/auth/login",{email:t.email,senha:t.senha});case 3:o=e.sent,t.loadingReq=!0,localStorage.setItem("token",o.data.token),t.$router.push("/"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),401===e.t0.response.status&&(t.loadingReq=!1,t.Toast().fire({icon:"error",title:"Credenciais inválidas"}));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}}),l=(o(323),o(47)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{},[e("div",{staticClass:"px-4 py-5 px-md-5 text-center text-lg-start",staticStyle:{"background-color":"hsl(0, 0%, 96%)"}},[e("div",[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v(" Voltar ")])],1),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row gx-lg-5"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-6 mb-5 mb-lg-0"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body py-5 px-md-5"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.login()}}},[e("div",{staticClass:"row"}),t._v(" "),e("div",{staticClass:"form-outline mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control p-3",attrs:{type:"email",id:"email",required:"",placeholder:"O seu email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-outline mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.senha,expression:"senha"}],staticClass:"form-control p-3",attrs:{type:"password",id:"password",required:"",placeholder:"A sua senha"},domProps:{value:t.senha},on:{input:function(e){e.target.composing||(t.senha=e.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-orage mb-4 w-100 text-uppercase",attrs:{disabled:t.loadingReq,type:"submit"}},[t._v("\n                  Entrar\n                  "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.loadingReq,expression:"loadingReq"}],staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"})])]),t._v(" "),e("nuxt-link",{attrs:{to:"/auth/signUp"}},[t._v("Você não tem uma conta?")])],1)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 mb-5 mb-lg-0"},[e("h1",{staticClass:"my-5 display-3 fw-bold ls-tight"},[t._v("\n            Bem-vindo de volta! "),e("br"),t._v(" "),e("span",{staticClass:"text-orage"},[t._v("Vamos começar?")])]),t._v(" "),e("p",{staticStyle:{color:"hsl(217, 10%, 50.8%)"}},[t._v("\n            Entre agora para acessar a plataforma e aproveitar todos os\n            recursos disponíveis, estamos felizes em recebê-lo em nossa\n            plataforma dedicada aos cuidados e bem-estar dos seus animais de\n            estimação.\n          ")])])}],!1,null,"c54004ac",null);e.default=component.exports}}]);