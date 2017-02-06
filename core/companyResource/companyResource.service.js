"use strict";



angular.module("core.company")
	   .factory("companyResource",["$resource",function ($resource){

			return $resource("resource_json/:paramsId.:format",{format:"json"},{
				query :{
					method : "GET",
					params: {paramsId:"companyLists"},
					isArray:true
				}
			})
		}])
	   .factory("messageList",["$resource",function ($resource){
		   	return $resource("resource_json/:messageList.:format",{format:"json"},{
		   		query:{
		   			method:"GET",
		   			params:{messageList:"messageLists"},
		   			isArray:true
		   		}
		   	})
	   }]);