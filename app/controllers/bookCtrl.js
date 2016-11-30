"use strict";

app.controller("bookCtrl", ($scope)=>{
	$scope.books = [];
	let guides = new Promise( (resolve, reject)=>{
		$.ajax({
			url: "../../data/guides.json"
		}).done((data)=>{
			resolve(data);
		}).fail((error)=>{
			reject(error);
		});
	});
	guides.then((data)=>{
		let books = data.guides;
		$scope.books = books;
		$scope.$apply();
	});
});