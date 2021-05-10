(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1553:function(e,t,n){"use strict";n.r(t);var s=n(26),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"split-in-batches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-in-batches"}},[e._v("#")]),e._v(" Split In Batches")]),e._v(" "),s("p",[e._v("The Split In Batches node saves the original incoming data, and with each iteration, it returns a predefined amount of data. This node can be used to loop through the data.")]),e._v(" "),s("h2",{attrs:{id:"node-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Batch Size:")]),e._v(" The number of items to return with each call.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Options")])]),e._v(" "),s("ul",[s("li",[s("em",[s("strong",[e._v("Reset:")])]),e._v(" If set to true, the node will reset.")])])])]),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to read RSS feed from two different sources using the Split In Batches node. The Split in Batches node is needed in the workflow since the RSS Read node only processes the first item it receives. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/687",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[e._v("Function")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("Split In Batches")])]),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/RSSRead/"}},[e._v("RSS Read")])],1)]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(619),alt:"A workflow with the Split In Batches node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),s("div",{pre:!0},[s("h3",{pre:!0,attrs:{id:"_2-function-node"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#_2-function-node"}},[e._v("#")]),e._v(" 2. Function node")]),e._v(" "),s("ol",[s("li",[e._v("Paste the following JavaScript code snippet in the "),s("em",[s("strong",[e._v("Function")])]),e._v(" field.")])]),e._v(" "),s("div",{pre:!0,attrs:{class:"language-js extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    json"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      url"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://medium.com/feed/n8n-io'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    json"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      url"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://dev.to/feed/n8n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("ol",{pre:!0,attrs:{start:"2"}},[s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),s("p",[s("img",{attrs:{src:n(620),alt:"Using the Function node to return URLs"}})]),e._v(" "),s("div",{pre:!0},[s("h3",{pre:!0,attrs:{id:"_3-splitinbatches-node"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-splitinbatches-node"}},[e._v("#")]),e._v(" 3. SplitInBatches node")]),e._v(" "),s("ol",[s("li",[e._v("Set the batch size to "),s("code",[e._v("1")]),e._v(" in the "),s("em",[s("strong",[e._v("Batch Size")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),s("p",[s("img",{attrs:{src:n(621),alt:"Using the Split In Batches node to split the data"}})]),e._v(" "),s("div",{pre:!0},[s("h3",{pre:!0,attrs:{id:"_4-rss-read-node"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-rss-read-node"}},[e._v("#")]),e._v(" 4. RSS Read node")]),e._v(" "),s("ol",[s("li",[e._v("Click on the gears icon next to the "),s("em",[s("strong",[e._v("URL")])]),e._v(" field and click on "),s("em",[s("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),s("li",[e._v("Select the following in the "),s("em",[s("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > SplitInBatches > Output Data > JSON > url. You can also add the following expression: "),s("code",[e._v('{{$node["SplitInBatches"].json["url"]}}')]),e._v(".")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])])]),s("p",[s("img",{attrs:{src:n(622),alt:"Using the RSS Read node to read data from RSS feed"}})]),e._v(" "),s("h2",{attrs:{id:"faqs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),s("h3",{attrs:{id:"how-to-identify-that-no-items-are-left-to-be-processed-by-the-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-identify-that-no-items-are-left-to-be-processed-by-the-node"}},[e._v("#")]),e._v(" How to identify that no items are left to be processed by the node?")]),e._v(" "),s("div",{pre:!0},[s("p",[e._v("To identify if items are left to be processed by node use the following expression: "),s("code",[e._v('{{$node["SplitInBatches"].context["noItemsLeft"]}}')]),e._v(". This expression returns a boolean value. If there is data yet to be processed, the expression will return "),s("code",[e._v("false")]),e._v(", otherwise "),s("code",[e._v("true")]),e._v(".")])]),s("p",[e._v("Refer to this "),s("a",{attrs:{href:"https://n8n.io/workflows/995",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" to try it out.")]),e._v(" "),s("h3",{attrs:{id:"how-to-get-the-current-running-index-of-the-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-the-current-running-index-of-the-node"}},[e._v("#")]),e._v(" How to get the current running index of the node?")]),e._v(" "),s("div",{pre:!0},[s("p",[e._v("To get the current running index of the node, use the following expression: "),s("code",[e._v('{{$node["SplitInBatches"].context["currentRunIndex"];}}')]),e._v(".")])]),s("p",[e._v("Refer to this "),s("a",{attrs:{href:"https://n8n.io/workflows/996",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" to try it out.")]),e._v(" "),s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),s("FurtherReadingBlog",{attrs:{node:"Split In Batches"}})],1)}),[],!1,null,null,null);t.default=o.exports},619:function(e,t,n){e.exports=n.p+"assets/img/workflow.57432bdb.png"},620:function(e,t,n){e.exports=n.p+"assets/img/Function_node.335e2cbf.png"},621:function(e,t,n){e.exports=n.p+"assets/img/SplitInBatches_node.d7752cb8.png"},622:function(e,t,n){e.exports=n.p+"assets/img/RSSFeedRead_node.7bb732b7.png"}}]);