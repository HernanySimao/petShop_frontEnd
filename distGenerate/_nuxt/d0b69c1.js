(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{305:function(t,n,e){var content=e(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(65).default)("6bd999fc",content,!0,{sourceMap:!1})},308:function(t,n,e){"use strict";e(305)},309:function(t,n,e){var o=e(64)((function(i){return i[1]}));o.push([t.i,".bg-inline[data-v-5cb9ae08]{border-bottom:2px solid #000659}.mdi-paw[data-v-5cb9ae08],.nav-link[data-v-5cb9ae08],span[data-v-5cb9ae08]{color:#000659}.mdi-account[data-v-5cb9ae08]{width:100%}li[data-v-5cb9ae08]{color:#000659;font-weight:600}",""]),o.locals={},t.exports=o},311:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{token:!1}},mounted:function(){localStorage.getItem("token")&&(this.token=!0)},methods:{Toast:function(){var t=this;return this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(n){n.addEventListener("mouseenter",t.$swal.stopTimer),n.addEventListener("mouseleave",t.$swal.resumeTimer)}})},logout:function(){localStorage.clear(),this.$router.push("/Auth/login"),this.Toast().fire({icon:"success",title:"Sessão terminada"})}}},r=(e(308),e(47)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"container"},[n("nav",{staticClass:"navbar navbar-expand-lg bg-inline mb-5"},[n("div",{staticClass:"container-fluid mb-2"},[n("a",{staticClass:"navbar-brand mdi mdi-paw",attrs:{href:"#"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",attrs:{to:"/","aria-current":"page",href:"#"}},[t._v("Inicio")])],1),t._v(" "),n("li",[t.token?n("nuxt-link",{staticClass:"nav-link mdi mdi-paw",attrs:{to:"/CreatePets","aria-current":"page",href:"#"}},[t._v("Adicionar")]):t._e()],1)]),t._v(" "),n("div",[t.token?n("button",{staticClass:"nav-link mdi mdi-logout",on:{click:function(n){return t.logout()}}},[t._v("\n            Sair\n          ")]):n("nuxt-link",{staticClass:"nav-link mdi mdi-account",attrs:{to:"/Auth/login"}},[t._v("Entrar\n          ")])],1)])])])])}),[function(){var t=this._self._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"mdi mdi-menu-down-outline"})])}],!1,null,"5cb9ae08",null);n.default=component.exports}}]);