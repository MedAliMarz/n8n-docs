(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1561:function(e,t,n){"use strict";n.r(t);var o=n(26),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"n8n-trigger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#n8n-trigger"}},[e._v("#")]),e._v(" n8n Trigger")]),e._v(" "),o("p",[e._v("The n8n Trigger node gets triggered when the n8n instance is started or restarted. The n8n Trigger node can be used to notify when the n8n instance starts.")]),e._v(" "),o("h2",{attrs:{id:"node-reference"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),o("ul",[o("li",[e._v("Events\n"),o("ul",[o("li",[o("em",[o("strong",[e._v("Instance started:")])]),e._v(" Triggers when the n8n instance is started or restarted")])])])]),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to receive a message on Mattermost when your n8n instance starts. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/1058",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:""}},[e._v("n8n Trigger")])]),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Mattermost/"}},[e._v("Mattermost")])],1)]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(645),alt:"A workflow with the Webhook node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-n8n-trigger-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-n8n-trigger-node"}},[e._v("#")]),e._v(" 1. n8n Trigger node")]),e._v(" "),o("p",[e._v("The n8n Trigger node will trigger the workflow whenever n8n starts.")]),e._v(" "),o("ol",[o("li",[e._v("Select 'Instance started' from the "),o("em",[o("strong",[e._v("Events")])]),e._v(" dropdown list.")])]),e._v(" "),o("p",[e._v("In the screenshot below, you will notice that the node triggers the workflow when the n8n instance starts.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(646),alt:"Using the n8n Trigger node to trigger the workflow"}})]),e._v(" "),o("h3",{attrs:{id:"_2-mattermost-node-post-message"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-mattermost-node-post-message"}},[e._v("#")]),e._v(" 2. Mattermost node (post: message)")]),e._v(" "),o("p",[e._v("This node will send a message in the "),o("code",[e._v("workflow")]),e._v(" channel on Mattermost.")]),e._v(" "),o("div",{pre:!0},[o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the Mattermost node. You can find out how to enter credentials for this node "),o("RouterLink",{pre:!0,attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("Select a channel from the "),o("em",[o("strong",[e._v("Channel ID")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Message")])]),e._v(" field click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),o("div",{pre:!0,attrs:{"v-pre":""}},[o("ol",{pre:!0,attrs:{start:"4"}},[o("li",[e._v("Enter the following message in the "),o("em",[o("strong",[e._v("Expression")])]),e._v(" field: "),o("code",[e._v('Your n8n instance started at {{$json["timestamp"]}}.')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])])])]),o("p",[e._v("In the screenshot below, you will notice that the node sends a message to Mattermost.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(647),alt:"Using the Mattermost node to send a message to a channel"}})]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),o("p",[e._v("This example workflow uses the n8n Trigger node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow.")])])])}),[],!1,null,null,null);t.default=r.exports},645:function(e,t,n){e.exports=n.p+"assets/img/workflow.08995568.png"},646:function(e,t,n){e.exports=n.p+"assets/img/n8nTrigger_node.e5de7ab3.png"},647:function(e,t,n){e.exports=n.p+"assets/img/Mattermost_node.f5de333c.png"}}]);