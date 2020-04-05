(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{428:function(e,t,s){"use strict";s.r(t);var n=s(43),a=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("📺 Watch the video : "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=9dl84ttYR70&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=67?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to work with the Azure billing and cost management API"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://aka.ms/att/azure-invoice-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Invoice API operations"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://aka.ms/att/azure-billing-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Billing REST API documentation"),s("OutboundLink")],1)])]),e._v(" "),s("h4",{attrs:{id:"working-with-the-azure-billing-and-cost-management-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-the-azure-billing-and-cost-management-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Working with the Azure billing and cost management API")]),e._v(" "),s("p",[e._v("A big part of working with Azure, is understanding and managing your costs. In the cloud, this is especially important, since a lot of services are billed by usage and costs are made up by many aspects, like service cost, data storage and outgoing data.\nAzure provides a lot of mechanisms to gain insights into costs and billing though the Azure portal and external tools. You can also get these insights programmatically, by using the Azure Billing and Cost Management APIs. Let's take a look at these APIs to see what they are and how you can use them.")]),e._v(" "),s("h4",{attrs:{id:"azure-billing-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-billing-apis","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Billing APIs")]),e._v(" "),s("p",[e._v("The Billing APIs are a group of APIs that you can use to pull usage and resource data from Azure to use in your own analytic tools. They also allow you to predict and manage costs. There are several Azure Billing APIs:")]),e._v(" "),s("ul",[s("li",[e._v("Azure Invoice Download API\n"),s("ul",[s("li",[e._v("Allows you to download invoices")])])]),e._v(" "),s("li",[e._v("Azure Resource Usage API\n"),s("ul",[s("li",[e._v("You can use this to get your estimated Azure consumption data")])])]),e._v(" "),s("li",[e._v("Azure Resource RateCard API\n"),s("ul",[s("li",[e._v("Allows you to get the list of available Azure resources and estimated pricing information for those resources")])])])]),e._v(" "),s("p",[e._v("Let's try out the Azure Invoice Download API. We'll use this to download invoices from our Azure subscription. This API is for instance useful to to automatically send the invoices to the accounting department on the 15th of the every month.")]),e._v(" "),s("ol",[s("li",[e._v("Before you can download invoices with the Invoice API, you need to grant permissions to users to do so. You can do that in the Azure portal:\n"),s("ol",[s("li",[e._v("In the Azure portal, navigate to your "),s("strong",[e._v("subscription")]),e._v(" (search for subscriptions and open the one you want to grant permissions to)")]),e._v(" "),s("li",[e._v("In the subscription, click on te "),s("strong",[e._v("Invoices")]),e._v(" menu")]),e._v(" "),s("li",[e._v("In the invoices blade, click on the "),s("strong",[e._v("Access to invoices")]),e._v(" button")]),e._v(" "),s("li",[e._v("Now switch the button to "),s("strong",[e._v("On")]),e._v(" and click "),s("strong",[e._v("Save")]),e._v(" to enable users to download invoices with the API")])])])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/EnableAccessToinvoices.png")}}),e._v(" "),s("p",[e._v("(Enable access to download invoices in the Azure portal)")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("We'll use the invoice API through PowerShell in the Azure Cloud Shell (https://shell.azure.com). Open the Cloud Shell")]),e._v(" "),s("li",[e._v("In the Cloud Shell, use the following commands to get the latest invoice, download it to the Cloud Shell Home drive and download it to your local machine")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$invoice = Get-AzureRmBillingInvoice -Latest\nInvoke-WebRequest -Uri $invoice.DownloadUrl -OutFile ($home + '\\' + $invoice.Name + '.pdf')\n\nCd $home\ndownload 201901-418250150656335.pdf //make sure to use your specific invoice name. You can find this by looking through the home directory with the **dir** command\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("You'll end up with the invoice as a PDF file on your local machine. The invoice will contain all of the detailed information that you need, like the snippet in the image below")])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/GetInvoices.png")}}),e._v(" "),s("p",[e._v("(The invoice as PDF)")]),e._v(" "),s("p",[e._v("You can now use the URL in the output to download the API. The API has "),s("a",{attrs:{href:"https://docs.microsoft.com/rest/api/billing/invoices?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("more operations"),s("OutboundLink")],1),e._v(", like listing all invoices and getting a specific invoice.")]),e._v(" "),s("h4",{attrs:{id:"azure-cost-management-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-cost-management-apis","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Cost Management APIs")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://azure.microsoft.com/services/cost-management?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cost Management"),s("OutboundLink")],1),e._v(" is a new service in Azure that allows you to identify and manage costs using things like budgets and cost recommendations. The service has accompanying APIs: "),s("a",{attrs:{href:"https://docs.microsoft.com/rest/api/cost-management'",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Azure Cost Management APIs"),s("OutboundLink")],1),e._v('">. There are several APIs:')]),e._v(" "),s("ul",[s("li",[e._v("Dimensions\n"),s("ul",[s("li",[e._v("Using the Dimensions API, you can retrieve a list of dimensions that can be used as inputs for generating queries with the Query API")])])]),e._v(" "),s("li",[e._v("Query\n"),s("ul",[s("li",[e._v("Provides operations to get aggregated cost and usage data based on the query you supply. Using the Query API, you can specify your desired filtering, sorting and grouping on all available dimensions")])])])]),e._v(" "),s("p",[e._v("Note that these APIs are currently only available for Enterprise subscriptions.")]),e._v(" "),s("p",[e._v("Let's take a look at how to call the Query API to get the usage of a resource group for a certain period in time.")]),e._v(" "),s("ol",[s("li",[e._v("We'll try the API from the documentation. This is a very cool feature that you see more and more in Microsoft docs. Go to https://docs.microsoft.com/rest/api/cost-management/query/usagebyscope and click the "),s("strong",[e._v("Try it")]),e._v(" button")])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/TryItButton.png")}}),e._v(" "),s("p",[e._v("(Try it button in Microsoft docs)")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Under "),s("strong",[e._v("parameters")]),e._v(", fill in the "),s("strong",[e._v("name of the Resource group")]),e._v(" that you want to query the usage for")])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/TryTheQueryAPI.png")}}),e._v(" "),s("p",[e._v("(Fill in the query parameters in Microsoft docs)")]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("In the "),s("strong",[e._v("Body")]),e._v(", fill in something like this:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n\ttimeframe: "MonthToDate",\n\ttype: "Usage",\n    "dataset": {\n        "granularity": "Daily"    \n    } \n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("Click "),s("strong",[e._v("OK")]),e._v(" to execute the request against your subscription")]),e._v(" "),s("li",[e._v("This should result in something like this:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "value": [\n    {\n      "id": "subscriptions/55312978-ba1b-415c-9304-c4b9c43c0481/resourcegroups/Azureoverview/providers/Microsoft.CostManagement/Query/9af9459d-441d-4055-9ed0-83d4c4a363fb",\n      "name": "9af9459d-441d-4055-9ed0-83d4c4a363fb",\n      "type": "microsoft.costmanagement/Query",\n      "properties": {\n        "nextLink": null,\n        "columns": [\n          {\n            "name": "PreTaxCost",\n            "type": "Number"\n          },\n          {\n            "name": "ResourceGroup",\n            "type": "String"\n          },\n          {\n            "name": "UsageDate",\n            "type": "Number"\n          },\n          {\n            "name": "Currency",\n            "type": "String"\n          }\n        ],\n        "rows": [\n          [\n            2.10333307059661,\n            "Azureoverview",\n            20180417,\n            "USD"\n          ],\n          [\n            20.103333070596609,\n            "Azureoverview",\n            20180418,\n            "USD"\n          ]\n        ]\n      }\n    }\n  ]\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br")])]),s("h4",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),s("p",[e._v("Getting detailed insights in your Azure costs and being able to manage your costs is very important. Azure provides lots of ways to do that. Azure also provides many APIs like the Billing and Cost Management APIs, so that you can get even more control over your costs and analyze them in your favorite tools.")]),e._v(" "),s("p",[e._v("All of these APIs are REST APIs. This means that you can call them using your favorite tools and that you can sometimes call them using PowerShell cmdlets, if they are available for the specific service. Because the APIs are REST APIs, you can use them from any application, regardless of which programming language you use. Go and check them out!")])])},[],!1,null,null,null);t.default=a.exports}}]);