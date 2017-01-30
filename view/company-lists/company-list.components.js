"use strict ";

angular.module("companyList").
		component("companyList",{
			templateUrl:"view/company-lists/company-list.template.html",
			controller:["companyResource",function (companyResource){
				this.companys = companyResource.query();
			}]
		});