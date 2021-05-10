(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1642:function(e,t,o){"use strict";o.r(t);var r=o(26),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"iterable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iterable"}},[e._v("#")]),e._v(" Iterable")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://iterable.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Iterable"),r("OutboundLink")],1),e._v(" is a cross-channel platform that allows marketers to create, optimize, and measure every interaction throughout the customer journey.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Iterable/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.iterable"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create, update, and get a user from Iterable. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/813",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Iterable")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(875),alt:"A workflow with the Iterable node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-iterable-node-upsert-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-iterable-node-upsert-user"}},[e._v("#")]),e._v(" 2. Iterable node (upsert: user)")]),e._v(" "),r("p",[e._v("This node will create a new user in Iterable.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Iterable node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Iterable/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Email' in the "),r("em",[r("strong",[e._v("Identifier")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter the email address in the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node creates a new user in Iterable.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(876),alt:"Using the Iterable node to create a user"}})]),e._v(" "),r("h3",{attrs:{id:"_3-iterable1-node-upsert-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-iterable1-node-upsert-user"}},[e._v("#")]),e._v(" 3. Iterable1 node (upsert: user)")]),e._v(" "),r("p",[e._v("This node will update the information of the user that we created in the previous node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Email' in the "),r("em",[r("strong",[e._v("Identifier")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Iterable > Parameters > value. You can also add the following expression: "),r("code",[e._v('{{$node["Iterable"].parameter["value"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" button and select "),r("em",[r("strong",[e._v("Data Fields")])]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Data Field")])]),e._v(" button.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("Name")]),e._v(" in the "),r("em",[r("strong",[e._v("Key")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter the name of the user in the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node updates the information of the user that we created in the previous node.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(877),alt:"Using the Iterable node to update the user information"}})]),e._v(" "),r("h3",{attrs:{id:"_4-iterable2-node-get-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-iterable2-node-get-user"}},[e._v("#")]),e._v(" 4. Iterable2 node (get: user)")]),e._v(" "),r("p",[e._v("This node will get the information of the user that we created using the Iterable node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Get' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Iterable > Parameters > value. You can also add the following expression: "),r("code",[e._v('{{$node["Iterable"].parameter["value"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node gets the information of the user that we created using the Iterable node.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(878),alt:"Using the Iterable node to get the user's information"}})])],1)}),[],!1,null,null,null);t.default=a.exports},875:function(e,t,o){e.exports=o.p+"assets/img/workflow.b936347a.png"},876:function(e,t,o){e.exports=o.p+"assets/img/Iterable_node.997fc8bf.png"},877:function(e,t,o){e.exports=o.p+"assets/img/Iterable1_node.c17d61fd.png"},878:function(e,t,o){e.exports=o.p+"assets/img/Iterable2_node.b7a29a3c.png"}}]);