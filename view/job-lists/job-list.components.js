"use strict"

angular.module("jobList").
		component("jobList",{

			templateUrl : "view/job-lists/job-list.template.html",
			controller:["companyResource",function (companyResource){
				this.jobs = companyResource.query(); 	
			}]
		}).
		component("jobDetail",{
			templateUrl:"view/job-lists/job-detail/job-detail.template.html",
			controller:["companyResource","$routeParams",
						function (companyResource,$routeParams){
							this.jobDetails = companyResource.get({paramsId:$routeParams.jobId},function(response){
								console.log(response);
						})
			}]
		});