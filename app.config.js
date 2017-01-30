"use strict";

angular.module("bossWebApp")
	   .config(["$routeProvider","$locationProvider",
			function config($routeProvider,$locationProvider){
				// 定义hash的前缀为#！
				$locationProvider.hashPrefix("!");
				// 定义路由的展示内容
				$routeProvider.when("/job",{
					template :"<job-list></job-list>"
				}).
				when("/job/:jobId",{
					template:"<job-detail></job-detail>"
				}).
				when("/company",{
					template :"<company-list></company-list>"
				}).
				when("/company/:companyId",{
					template: "<compan-detail></company-detail>"
				}).
				when("/message",{
					template:"<message-list></message-list>"
				}).
				when("/userInfo",{
					template :"<user-info></user-info>"
				}).
				otherwise("/job");


		}]);