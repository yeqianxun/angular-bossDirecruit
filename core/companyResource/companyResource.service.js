"use strict";



angular.module("core.company")
	   .factory("companyResource",["$resource",function ($resource){

			return $resource("company_json/:companyId.:format",{format:"json"},{
				query :{
					method : "GET",
					params: {companyId:"companyLists"},
					isArray:true
				}
			})
		}])
	   .factory("messageList",["$resource",function ($resource){
		   	return $resource("company_json/:messageList.:format",{format:"json"},{
		   		query:{
		   			method:"GET",
		   			params:{messageList:"messageLists"},
		   			isArray:true
		   		}
		   	})
	   }]);