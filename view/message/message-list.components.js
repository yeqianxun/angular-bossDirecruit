"use strict";
 
 angular.module("messageList").
 		component("messageList",{
 			templateUrl:"view/message/message-list.template.html",
 			controller:["messageList",function (messageList){
 				this.messages = messageList.query();
 			}]
 		})