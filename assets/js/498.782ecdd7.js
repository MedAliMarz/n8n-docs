(window.webpackJsonp=window.webpackJsonp||[]).push([[498],{1322:function(t,n,e){"use strict";e.r(n);e(10);var o={data:function(){return{items:[]}},beforeMount:function(){var t=this;fetch("https://api.n8n.io/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'\n\t\t\t\t\tquery GetRegularNodes{\n\t\t\t\t\t\tnodes(where: {categories:{name_ncontains: "Core Nodes"}, displayName_ncontains:"Trigger"}, sort:"displayName"){\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tdisplayName\n\t\t\t\t\t\t\ticonData\n\t\t\t\t\t\t}\n}\n\t\t\t\t'})}).then((function(t){return t.json()})).then((function(n){t.$data.items=n.data.nodes})).catch((function(t){return console.log(t)}))}},a=e(26),s=Object(a.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodes"}},[this._v("#")]),this._v(" Nodes")]),this._v(" "),n("p",[this._v("This section contains information about all the regular nodes in n8n. Each node documentation contains information on the available resources and operations along with an example workflow.")]),this._v(" "),n("NodeCard",{attrs:{items:this.items}})],1)}),[],!1,null,null,null);n.default=s.exports}}]);