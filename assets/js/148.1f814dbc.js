(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1264:function(t,e,o){t.exports=o.p+"assets/img/workflow.3e07072d.png"},1265:function(t,e,o){t.exports=o.p+"assets/img/PushcutTrigger_node.d5554b80.png"},1266:function(t,e,o){t.exports=o.p+"assets/img/Twilio_node.eddfe46d.png"},1792:function(t,e,o){"use strict";o.r(e);var n=o(26),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"pushcut-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pushcut-trigger"}},[t._v("#")]),t._v(" Pushcut Trigger")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://pushcut.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pushcut"),n("OutboundLink")],1),t._v(" is an app for iOS that lets you create smart notifications to kick off shortcuts, URLs, and online automation.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),n("p",[t._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Pushcut/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),n("p",[t._v("This workflow allows you to send an SMS to a number whenever you go out. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/870",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),n("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow uses the following nodes.")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:""}},[t._v("Pushcut Trigger")])]),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Twilio/"}},[t._v("Twilio")])],1)]),t._v(" "),n("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(1264),alt:"A workflow with the Pushcut Trigger node"}})]),t._v(" "),n("h3",{attrs:{id:"_1-pushcut-trigger-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-pushcut-trigger-node"}},[t._v("#")]),t._v(" 1. Pushcut Trigger node")]),t._v(" "),n("p",[t._v("Whenever you leave your house, Pushcut will send you a notification with an action "),n("code",[t._v("Leaving Home")]),t._v(". The Pushcut Trigger node will trigger the workflow when this action is selected.")]),t._v(" "),n("p",[t._v("To create an action in the Pushcut app, follow the instructions mentioned in "),n("a",{attrs:{href:"#how-to-configure-a-pushcut-action"}},[t._v("FAQs")]),t._v(".")]),t._v(" "),n("ol",[n("li",[t._v("First of all, you'll have to enter credentials for the Pushcut Trigger node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Pushcut/"}},[t._v("here")]),t._v(".")],1),t._v(" "),n("li",[t._v("Enter an action name in the "),n("em",[n("strong",[t._v("Action Name")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),n("p",[t._v("In the screenshot below, you will notice that the node triggers the workflow whenever the "),n("code",[t._v("Leaving Home")]),t._v(" action is selected.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(1265),alt:"Using the Pushcut Trigger node to trigger the workflow"}})]),t._v(" "),n("h3",{attrs:{id:"_2-twilio-node-send-sms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-twilio-node-send-sms"}},[t._v("#")]),t._v(" 2. Twilio node (send: sms)")]),t._v(" "),n("p",[t._v("This node will send an SMS to a specified phone number notifying the recipient that you are going out.")]),t._v(" "),n("ol",[n("li",[t._v("First of all, you'll have to enter credentials for the Twilio node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Twilio/"}},[t._v("here")]),t._v(".")],1),t._v(" "),n("li",[t._v("Enter the Twilio phone number in the "),n("em",[n("strong",[t._v("From")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Enter the receiver's phone number in the "),n("em",[n("strong",[t._v("To")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on the gears icon next to the "),n("em",[n("strong",[t._v("Message")])]),t._v(" field and click on "),n("em",[n("strong",[t._v("Add Expression")])]),t._v(".")])]),t._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"6"}},[n("li",[t._v("Enter "),n("code",[t._v('I\'m {{$node["Pushcut Trigger"].json["input"]}}')]),t._v(" in the "),n("em",[n("strong",[t._v("Expression")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),n("p",[t._v("In the screenshot below, you will notice that the node sends an SMS with the input that we received from the Pushcut Trigger node.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(1266),alt:"Using the Twilio node to send an SMS"}})]),t._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[t._v("#")]),t._v(" FAQs")]),t._v(" "),n("h3",{attrs:{id:"how-to-configure-a-pushcut-action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-a-pushcut-action"}},[t._v("#")]),t._v(" How to configure a Pushcut action?")]),t._v(" "),n("p",[t._v("Follow the steps mentioned below to configure your Pushcut Trigger node with your Pushcut app.")]),t._v(" "),n("ol",[n("li",[t._v("In your Puschcut app, select a notification from the "),n("em",[n("strong",[t._v("Notifications")])]),t._v(" screen.")]),t._v(" "),n("li",[t._v("Click on the "),n("em",[n("strong",[t._v("Add Action")])]),t._v(" button.")]),t._v(" "),n("li",[t._v("Enter an action name in the "),n("em",[n("strong",[t._v("Label")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Select the "),n("em",[n("strong",[t._v("Server")])]),t._v(" tab.")]),t._v(" "),n("li",[t._v("Select the "),n("em",[n("strong",[t._v("Integration")])]),t._v(" tab.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Integration Trigger")])]),t._v(".")]),t._v(" "),n("li",[t._v("In n8n, enter a name for the action and click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(".")]),t._v(" "),n("li",[t._v("Select this action under the "),n("em",[n("strong",[t._v("Select Integration Trigger")])]),t._v(" screen in your Pushcut app.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Done")])]),t._v(" on the top right to save the action.")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("💡 Activate workflow for production")]),t._v(" "),n("p",[t._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Pushcut Trigger node.")])])])}),[],!1,null,null,null);e.default=i.exports}}]);