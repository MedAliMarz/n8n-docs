(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1660:function(e,t,o){"use strict";o.r(t);var a=o(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mattermost"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mattermost"}},[e._v("#")]),e._v(" Mattermost")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://mattermost.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mattermost"),a("OutboundLink")],1),e._v(" is an open-source, self-hostable online chat service with file sharing, search, and integrations. It is designed as an internal chat for organisations and companies.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("Resource",{attrs:{node:"n8n-nodes-base.mattermost"}}),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to create a channel, add a member, and post a message to the channel on Mattermost. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/832",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Mattermost")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(931),alt:"A workflow with the Mattermost node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-mattermost-node-create-channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mattermost-node-create-channel"}},[e._v("#")]),e._v(" 2. Mattermost node (create: channel)")]),e._v(" "),a("p",[e._v("This node will create a new channel named "),a("code",[e._v("docs")]),e._v(" in Mattermost. If you want to create a channel with a different name, enter that name instead.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Mattermost node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select 'Channel' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select a team from the "),a("em",[a("strong",[e._v("Team ID")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("Docs")]),e._v(" in the "),a("em",[a("strong",[e._v("Display Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("docs")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node creates a new channel named "),a("code",[e._v("docs")]),e._v(" in Mattermost.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(932),alt:"Using the Mattermost node to create a channel"}})]),e._v(" "),a("h3",{attrs:{id:"_3-mattermost1-node-adduser-channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-mattermost1-node-adduser-channel"}},[e._v("#")]),e._v(" 3. Mattermost1 node (addUser: channel)")]),e._v(" "),a("p",[e._v("This node will add a member to the channel that we created in the previous node.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Channel' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select 'Add User' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Channel ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Mattermost > Output Data > JSON > id. You can also add the following expression: "),a("code",[e._v('{{$node["Mattermost"].json["id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Select a user from the "),a("em",[a("strong",[e._v("User ID")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node adds a user to the channel that we created in the previous node.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(933),alt:"Using the Mattermost node to add a user to a channel"}})]),e._v(" "),a("h3",{attrs:{id:"_4-mattermost2-node-post-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-mattermost2-node-post-message"}},[e._v("#")]),e._v(" 4. Mattermost2 node (post: message)")]),e._v(" "),a("p",[e._v("This node will post a message to the channel that we created using the Mattermost node.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Channel ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Mattermost > Output Data > JSON > id. You can also add the following expression: "),a("code",[e._v('{{$node["Mattermost"].json["id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Enter a message in the "),a("em",[a("strong",[e._v("Message")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node posts a message to the channel that we created in the Mattermost node.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(934),alt:"Using the Mattermost node to post a message to a channel"}})]),e._v(" "),a("h2",{attrs:{id:"faqs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),a("h3",{attrs:{id:"how-do-i-resolve-the-error-for-the-channel-id-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-resolve-the-error-for-the-channel-id-field"}},[e._v("#")]),e._v(" How do I resolve the error for the "),a("em",[a("strong",[e._v("Channel ID")])]),e._v(" field?")]),e._v(" "),a("p",[e._v("If you're not the System Administrator, you might get an error "),a("code",[e._v('there was a problem loading the parameter options from server: "Mattermost error response: You do not have the appropriate permissions."')]),e._v(" next to the "),a("em",[a("strong",[e._v("Channel ID")])]),e._v(" field.")]),e._v(" "),a("p",[e._v("If the system administrator has granted you the "),a("code",[e._v("post:channel")]),e._v(" permissions, you will be able to execute the node successfully even with the error.")]),e._v(" "),a("h3",{attrs:{id:"how-do-i-find-the-channel-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-find-the-channel-id"}},[e._v("#")]),e._v(" How do I find the Channel ID?")]),e._v(" "),a("p",[e._v("To find the Channel ID in Mattermost, follow the steps mentioned below.")]),e._v(" "),a("ol",[a("li",[e._v("Select the channel from the left sidebar.")]),e._v(" "),a("li",[e._v("Click on the channel name on the top and select 'View Info' from the dropdown list.")]),e._v(" "),a("li",[e._v("Use the displayed "),a("em",[a("strong",[e._v("ID")])]),e._v(" in n8n.")])]),e._v(" "),a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),a("FurtherReadingBlog",{attrs:{node:"Mattermost"}})],1)}),[],!1,null,null,null);t.default=n.exports},931:function(e,t,o){e.exports=o.p+"assets/img/workflow.eb022930.png"},932:function(e,t,o){e.exports=o.p+"assets/img/Mattermost_node.2fd336ac.png"},933:function(e,t,o){e.exports=o.p+"assets/img/Mattermost1_node.4021a559.png"},934:function(e,t,o){e.exports=o.p+"assets/img/Mattermost2_node.86d3912b.png"}}]);