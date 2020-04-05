(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{344:function(e,t,a){"use strict";a.r(t);var s=a(43),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cloud-shell/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Overview of Azure Cloud Shell"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("When working with "),a("a",{attrs:{href:"http://shell.azure.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),a("OutboundLink")],1),e._v(", you sometimes need the ability to upload files to work with later. I'm going to call out the two methods that I use to accomplish this task all the time.")]),e._v(" "),a("h4",{attrs:{id:"mount-a-drive-and-upload-via-the-azure-portal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mount-a-drive-and-upload-via-the-azure-portal","aria-hidden":"true"}},[e._v("#")]),e._v(" Mount a drive and upload via the Azure Portal")]),e._v(" "),a("p",[e._v("In method one, we'll update the file share that's associated with Cloud Shell by using the "),a("code",[e._v("clouddrive mount")]),e._v(" command. Note: that you may already have a cloud drive that is created upon initial start of cloud shell. Go ahead and spin up Azure Cloud Shell and type "),a("code",[e._v("clouddrive -h")]),e._v(" to see the commands to mount and unmount a drive.")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("michael@Azure:~$ clouddrive -h\n\nGroup\n  clouddrive                  :Manage storage settings for Azure Cloud Shell.\n\nCommands\n  mount                       :Mount a file share to Cloud Shell.\n  unmount                     :Unmount a file share from Cloud Shell.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("To mount a drive, we'll type "),a("code",[e._v("clouddrive mount -h")]),e._v(" to see a help screen that is looking for the following parameters:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Arguments\n  -s | --subscription id          [Required]:Subscription ID or name.\n  -g | --resource-group group     [Required]:Resource group name.\n  -n | --storage-account name     [Required]:Storage account name.\n  -f | --file-share name          [Required]:File share name.\n  -d | --disk-size size                     :Disk size in GB. (default 5)\n  -F | --force                              :Skip warning prompts.\n  -? | -h | --help                          :Shows this usage text.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("We'll now simply call "),a("code",[e._v("clouddrive mount -s subscription-id -g your-resource-group-name -n storage-account -f storage-file-name")]),e._v(" to create our drive. Once it has completed, we'll navigate to the resource and hit the "),a("strong",[e._v("Upload")]),e._v(" button and upload a file. Again, you could have navigated to your existing resource group instead of creating a new one - but I want you to learn how to do this manually.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/cloudshellnew1.png")}}),e._v(" "),a("p",[e._v("Now type "),a("code",[e._v("cd clouddrive")]),e._v(" and "),a("code",[e._v("ls -l")]),e._v(" and you should see the file you just uploaded:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("michael@Azure:~/clouddrive$ ls -l\ntotal 53\n-rwxrwxrwx 1 root root 53385 May 29 23:55 cloudshellnew1.png\nmichael@Azure:~/clouddrive$\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h4",{attrs:{id:"upload-via-cloud-shell-button"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-via-cloud-shell-button","aria-hidden":"true"}},[e._v("#")]),e._v(" Upload via Cloud Shell button")]),e._v(" "),a("p",[e._v("The second method involves pressing the "),a("strong",[e._v("Upload")]),e._v(" button built right into Azure Cloud Shell.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/cloudshellnew2.png")}}),e._v(" "),a("p",[e._v("After you press this button and provide the file, you'll see that it is uploading it into your "),a("code",[e._v("/HOME/username")]),e._v(" folder")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/cloudshellnew3.png")}}),e._v(" "),a("p",[e._v("Now you can simply type "),a("code",[e._v("cp filename cloudrive")]),e._v(" to copy the file and have access to the file via cloud drive.")])])},[],!1,null,null,null);t.default=n.exports}}]);