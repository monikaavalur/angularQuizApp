//the function below is known as immediately invoking function expression.
//the function runs automatically when the page loads.

(function(){
    //the array contains the dependencies of the module. If the array is not specified, i.e,
    //angular.module("Facts") means go find the angular module and return it .Here we have defined our app.
    angular
       .module("dogFacts",[]); 
})();