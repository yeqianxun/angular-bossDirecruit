"use strict ";

angular.module("companyList").
		component("companyList",{
			templateUrl:"view/company-lists/company-list.template.html",
			controller:["companyResource",function (companyResource){
				this.companys = companyResource.query();
			}]
		}).
		component("companyDetail",{
			templateUrl:"view/company-lists/company-detail/company-detail.template.html",
			controller:["companyResource","$routeParams",
					    function (companyResource,$routeParams){
							this.companyDetails = companyResource.get({paramsId:$routeParams.companyId},function(response){
								console.log(response);
							})
			}]
});