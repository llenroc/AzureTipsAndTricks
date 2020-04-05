(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{467:function(e,t,r){"use strict";r.r(t);var a=r(43),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=gY44IAPSXAE&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=26?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Set Up e-mail Alerts with Azure App Services "),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"setting-up-email-alerts-with-azure-app-servicess"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-email-alerts-with-azure-app-servicess","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting up Email Alerts with Azure App Servicess")]),e._v(" "),r("p",[r("strong",[e._v("Alerts")]),e._v(" allows you to receive an alert based on monitoring metric for your Azure app services. You can be notified in a variety of ways such as the Azure Portal, Webhooks or Email. In this post, we'll setup an alert based on a 404 error message and send it via email.")]),e._v(" "),r("p",[e._v("In order to take advantage of this, you'll need to log into your Azure account and go to your App Service that you created and look under "),r("strong",[e._v("Monitoring")]),e._v(" then you will see "),r("strong",[e._v("Alert")]),e._v(". Open it and select "),r("strong",[e._v("Add Alert")]),e._v(" as shown below.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/alertblog1.png")}}),e._v(" "),r("p",[e._v("Here you'll see the following options:")]),e._v(" "),r("ul",[r("li",[e._v("Resouce - selects which resource you want the alert active on.")]),e._v(" "),r("li",[e._v("Name - you'll need to give it a unique name.")]),e._v(" "),r("li",[e._v("Description (optional) - Provide a description of the alert. Though this is optional, I'd recommend adding one.")]),e._v(" "),r("li",[e._v("Alert on Metric or Events - You can trigger an alert on some metric or an event.")])]),e._v(" "),r("p",[r("strong",[e._v("Metric vs. Event")]),e._v('  A metric would be something like "If we receive 5 or more Http Server Errors over the last 5 minutes then trigger an alert". An Event would be if something Started, Stopped, Deleted or all of the above happened with our App Service than trigger an alert.')]),e._v(" "),r("p",[e._v("Go ahead and select a resource and provide a "),r("strong",[e._v("Name")]),e._v(" and "),r("strong",[e._v("Description")]),e._v(" and select "),r("strong",[e._v("Http 404")]),e._v(" for the metric with the "),r("strong",[e._v("Greater than")]),e._v(" condition set for "),r("strong",[e._v("O threshold")]),e._v(" and "),r("strong",[e._v("Over the last 5 minutes")]),e._v(". Go ahead and add a checkmark for the email and provide an additional email address as shown below.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/alertblog2.png")}}),e._v(" "),r("p",[e._v("Press "),r("strong",[e._v("OK")]),e._v(" and it will save the alert.")]),e._v(" "),r("p",[e._v("Head back to your website (*.azurewebsites.net) and enter an invalid page to trigger a 404 error. In my case, I entered http://app.azurewebsites.net/"),r("strong",[e._v("TESTING/")]),e._v(". It should throw an error unless you have a custom error page defined.")]),e._v(" "),r("div",{staticClass:"language-text line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Server Error in '/' Application.\n\nThe resource cannot be found.\n\nDescription: HTTP 404. The resource you are looking for (or one of its dependencies) could have been removed, had its name changed, or is temporarily unavailable.  Please review the following URL and make sure that it is spelled correctly. \n\nRequested URL: /TESTING/\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br")])]),r("p",[e._v("Take a look at your email and you should see an email from Azure as shown below.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/alertblog3.png")}}),e._v(" "),r("p",[e._v("Go back into the Azure Portal and search for "),r("strong",[e._v("Alerts")]),e._v(" and then the alert that you just created. You can see when it was last triggered as well as other information. If you click on the alert, then you'll see you can also do additional things such as run a logic app when this alert triggers.")])])},[],!1,null,null,null);t.default=s.exports}}]);