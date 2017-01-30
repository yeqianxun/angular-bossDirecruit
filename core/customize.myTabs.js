"use strict";

angular.module("bossWebApp").
		directive("myTabs",function (){
			return {
				restrict:"A",
				replace:true,
				scope:true,
				templateUrl:"view/myTabs/tabs.html"
			}
		});