(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{463:function(e,t,a){"use strict";a.r(t);var o=a(43),r=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=uQXDkW1pCzs&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=23?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Configure a Backup for Your Azure App Service"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"configure-a-backup-for-your-azure-app-service-and-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-a-backup-for-your-azure-app-service-and-database","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure a Backup for your Azure App Service and Database")]),e._v(" "),a("p",[e._v("Most folks don't realize how easy it is to configure a backup copy of your Azure App Service to ensure you have restorable archive copies of your app and database. In order to take advantage of this, you'll need to log into your Azure account and go to your App Service that you created and look under "),a("strong",[e._v("Settings")]),e._v(" then you will see "),a("strong",[e._v("Backup")]),e._v(".")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/backupazure1.png")}}),e._v(" "),a("p",[e._v("Open it and select "),a("strong",[e._v("Configure")]),e._v(" and you'll see the following screen.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/backupazure2.png")}}),e._v(" "),a("p",[e._v("You'll want to configure the "),a("strong",[e._v("Backup Storage")]),e._v(" first as that sets the container that you'll use to store your backup.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/backupazure3.png")}}),e._v(" "),a("p",[e._v("I simply gave it a name, used stardard performance and setup replication and location.")]),e._v(" "),a("p",[e._v("Now you'll need to configure a container to store your backup.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/backupazure4.png")}}),e._v(" "),a("p",[e._v("Next, you'll want to make sure that "),a("strong",[e._v("Scheduled backup")]),e._v(" is set to "),a("strong",[e._v("On")]),e._v(". You'll want to configure the Days and Hours and then the current schedule that it should backup from. I set mine to backup every "),a("strong",[e._v("7")]),e._v(" days and starting from now. You'll also want to set the retention and by default it will keep as least one backup. If you have a database, then you can also add it with just a checkmark.")]),e._v(" "),a("p",[e._v("Once everything is set, you can see whatn the next backup is configured and can either force it manually or restore from an existing backup with just a visit to the Azure Portal.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/backupazure5.png")}}),e._v(" "),a("p",[e._v("Once it completed, you can click on the backup and see a feature called "),a("strong",[e._v("Snapshot")]),e._v(" which automatically create periodic restore points of your app when hosted in a Premium App Service plan. You can even download a zip of the app.")])])},[],!1,null,null,null);t.default=r.exports}}]);