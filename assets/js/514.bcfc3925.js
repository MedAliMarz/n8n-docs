(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{1825:function(t,a,s){"use strict";s.r(a);var e=s(26),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"security"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[t._v("#")]),t._v(" Security")]),t._v(" "),s("p",[t._v("By default, n8n can be accessed by everybody. This is okay if you only have it running\nlocally but if you deploy it on a server which is accessible from the web, you have\nto make sure that n8n is protected.")]),t._v(" "),s("h3",{attrs:{id:"basic-auth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-auth"}},[t._v("#")]),t._v(" Basic Auth")]),t._v(" "),s("p",[t._v("Right now we have very basic protection in place using basic-auth. It can be activated\nby setting the following environment variables:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_BASIC_AUTH_ACTIVE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_BASIC_AUTH_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_BASIC_AUTH_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PASSWORD"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" JWT")]),t._v(" "),s("p",[t._v("There is also limited support for JWT based authentication. If enabled, n8n will verify the token with the provided JSON Web Key Set URI. It can be configured through the following environment variables:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_JWT_AUTH_ACTIVE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_JWT_AUTH_HEADER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HEADER"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_JWKS_URI")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("URI"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("Keep in mind that there is currently no built-in way of passing down the Token in the request, so to use JWT you have to have the token in the request manually.")])])}),[],!1,null,null,null);a.default=r.exports}}]);