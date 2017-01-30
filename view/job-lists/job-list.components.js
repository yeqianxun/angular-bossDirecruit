"use strict"

angular.module("jobList").
		component("jobList",{

			templateUrl : "view/job-lists/job-list.template.html",
			controller:["companyResource",function (companyResource){
				this.jobs = companyResource.query(); 	
			}]
		});