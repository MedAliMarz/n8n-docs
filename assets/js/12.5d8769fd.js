(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1531:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"execute-command"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#execute-command"}},[e._v("#")]),e._v(" Execute Command")]),e._v(" "),n("p",[e._v("The Execute Command node is used to run shell commands on the host machine that runs n8n.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),n("ol",[n("li",[e._v("If you are running n8n in Docker, your command will run on the n8n container and not the Docker host.")]),e._v(" "),n("li",[e._v("This node will execute the command in the default shell of the host machine. For example, this will be PowerShell on Windows and zsh on macOS.")])])]),e._v(" "),n("h2",{attrs:{id:"node-reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),n("p",[e._v("The Execute Command node has two properties:")]),e._v(" "),n("ol",[n("li",[n("em",[n("strong",[e._v("Execute Once")])]),e._v(" toggle: This is a boolean field that is used to specify whether you want the node to execute only once, or once for every item it receives an input.")]),e._v(" "),n("li",[n("em",[n("strong",[e._v("Command")])]),e._v(" field: This is a text field that is used to specify the command that will be executed on the host machine.")])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to execute a command that returns the percentage of the hard disk that is full using the Execute Command node. The workflow is triggered twice a day, and if the memory usage exceeds 80%, it will send an SMS using the Twilio node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/716",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Execute Command")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/If/"}},[e._v("IF")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Twilio/"}},[e._v("Twilio")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/NoOperationDoNothing/"}},[e._v("No Operation, do nothing")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(573),alt:"A workflow with the Execute Command node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-cron-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),n("p",[e._v("The Cron node will trigger the workflow twice a day, at 9 AM and 4 PM.")]),e._v(" "),n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select 'Every Day' from the "),n("em",[n("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("9")]),e._v(" in the "),n("em",[n("strong",[e._v("Hour")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select 'Every Day' from the "),n("em",[n("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("16")]),e._v(" in the "),n("em",[n("strong",[e._v("Hour")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(574),alt:"Using the Cron node to trigger the workflow twice a day"}})]),e._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_2-execute-command-node"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_2-execute-command-node"}},[e._v("#")]),e._v(" 2. Execute Command node")]),e._v(" "),n("p",[e._v("The Execute Command node will execute the command and return the percentage of hard disk space used on the host machine.")]),e._v(" "),n("ol",[n("li",[e._v("Enter "),n("code",[e._v("df -k / | tail -1 | awk '{print $5}'")]),e._v(" in the "),n("em",[n("strong",[e._v("Command")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node executes the command and returns the percentage of the hard disk that is full.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(575),alt:"Using the Execute Command node to get the percentage of hard disk used on the host machine"}})]),e._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_3-if-node"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-if-node"}},[e._v("#")]),e._v(" 3. IF node")]),e._v(" "),n("p",[e._v("This node will compare the percentage of the hard disk space used we got from the Execute Command node. If the usage of the memory exceeds 80%, it will return true otherwise false.")]),e._v(" "),n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Condition")])]),e._v(" and select 'Number' from the dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value 1")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v('{{parseInt($node["Execute Command"].json["stdout"])}}')]),e._v(" in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field. The output from the Execute Command node is a string. The "),n("code",[e._v("parseInt()")]),e._v(" method converts the string into an integer.")]),e._v(" "),n("li",[e._v("Select 'Larger' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Set "),n("em",[n("strong",[e._v("Value 2")])]),e._v(" to 80.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns an output when the percentage of hard disk space used exceeds 80%.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(576),alt:"Using the IF node to check if the percentage of hard disk space used is greater than eighty percent"}})]),e._v(" "),n("h3",{attrs:{id:"_4-twilio-node-send-sms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-twilio-node-send-sms"}},[e._v("#")]),e._v(" 4. Twilio node (send: sms)")]),e._v(" "),n("p",[e._v("This node sends an SMS to the specified phone number when the usage of hard disk space  exceeds 80%.")]),e._v(" "),n("ol",[n("li",[e._v("Create a Twilio node connected to the 'true' output of the IF node.")]),e._v(" "),n("li",[e._v("You'll have to enter credentials for the Twilio node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Twilio/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter the Twilio phone number in the "),n("em",[n("strong",[e._v("From")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter the receiver's phone number in the "),n("em",[n("strong",[e._v("To")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Message")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"6"}},[n("li",[e._v("Enter "),n("code",[e._v('Your hard disk space is filling up fast! Your hard disk is {{$node["Execute Command"].json["stdout"]}} full.')]),e._v(" in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sends an SMS with the percentage of the hard disk space used that we got from the Execute Command node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(577),alt:"Using the Twilio node to send an SMS"}})]),e._v(" "),n("h3",{attrs:{id:"_5-noop-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-noop-node"}},[e._v("#")]),e._v(" 5. NoOp node")]),e._v(" "),n("p",[e._v("Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow.")]),e._v(" "),n("ol",[n("li",[e._v("Create a "),n("em",[n("strong",[e._v("NoOp")])]),e._v(" node connected to the 'false' output of the IF node.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(578),alt:"Using the NoOp node"}})]),e._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),n("h3",{attrs:{id:"how-to-run-multiple-commands-in-the-execute-command-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-run-multiple-commands-in-the-execute-command-node"}},[e._v("#")]),e._v(" How to run multiple commands in the Execute Command node?")]),e._v(" "),n("p",[e._v("You can combine multiple commands using "),n("code",[e._v("&&")]),e._v(". For example, you can combine the change directory (cd) command with the list (ls) command using "),n("code",[e._v("&&")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" bin "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n")])])]),n("p",[e._v("To run multiple commands, you can also write the commands on separate lines. For example, you can write the list (ls) command on a new line after the change directory (cd) command.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" bin\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n")])])]),n("h3",{attrs:{id:"how-to-run-the-curl-command-in-the-execute-command-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-run-the-curl-command-in-the-execute-command-node"}},[e._v("#")]),e._v(" How to run the curl command in the Execute Command node?")]),e._v(" "),n("p",[e._v("You can also use the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")]),e._v(" node to make a cURL request.")],1),e._v(" "),n("p",[e._v("If you want to run the curl command in the Execute Command node, you will have to build a Docker image based on the existing n8n image. The default n8n Docker image uses Alpine Linux. You will have to install the curl package.")]),e._v(" "),n("ol",[n("li",[e._v("Create a file named Dockerfile.")]),e._v(" "),n("li",[e._v("Add the below code snippet to the Dockerfile.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("FROM n8nio/n8n\nRUN apk --update add curl\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("In the same folder, execute the command below command to build the Docker image.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker build -t n8n-curl\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Replace the Docker image you used before. For example, replace "),n("code",[e._v("n8nio/n8n")]),e._v(" with "),n("code",[e._v("n8n-curl")]),e._v(".")]),e._v(" "),n("li",[e._v("Run the newly created Docker image, and you will now be able to execute ssh via the Execute Command-Node.")])]),e._v(" "),n("h2",{attrs:{id:"further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),n("FurtherReadingBlog",{attrs:{node:"Execute Command"}})],1)}),[],!1,null,null,null);t.default=a.exports},573:function(e,t,o){e.exports=o.p+"assets/img/workflow.36c5c2a2.png"},574:function(e,t,o){e.exports=o.p+"assets/img/Cron_node.ae4b5cbd.png"},575:function(e,t,o){e.exports=o.p+"assets/img/ExecuteCommand_node.50a4c352.png"},576:function(e,t,o){e.exports=o.p+"assets/img/IF_node.d85b0d42.png"},577:function(e,t,o){e.exports=o.p+"assets/img/Twilio_node.cfbcdf62.png"},578:function(e,t,o){e.exports=o.p+"assets/img/NoOp_node.90544b30.png"}}]);