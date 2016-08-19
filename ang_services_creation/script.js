var app = angular.module('sgtApp', []);

app.provider('sgtData', function(){
    //Create a variable to hold this
<<<<<<< HEAD
    var provSelf = this;
    //Create a variable to hold your api key but set it to an empty string
    this.api_key = '';
    //Create a variable to hold the API url but set it to an empty string
    this.api_url = '';

    //Add the necessary services to the function parameter list
    this.$get = function($http, $q, $log) {
        //return an object that contains a function to call the API and get the student data
        //Refer to the prototype instructions for more help
        return {
            callApi: function() {
                var dataToSend = $.param(
                    {api_key: provSelf.api_key}
                );
                return $http({
                    url: provSelf.api_url,
                    method: 'POST',
                    data: dataToSend,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            }
        };
=======

    //Create a variable to hold your api key but set it to an empty string

    //Create a variable to hold the API url but set it to an empty string


    //Add the necessary services to the function parameter list
    this.$get = function(){
        //return an object that contains a function to call the API and get the student data
        //Refer to the prototype instructions for more help

>>>>>>> 92c6d68b0da2bccbee260893409728d9a7c7508a
    };
});

//Config your provider here to set the api_key and the api_url
<<<<<<< HEAD
app.config( function(sgtDataProvider){
    sgtDataProvider.api_key = 'L91wptvUmZ';
    sgtDataProvider.api_url = 'http://s-apis.learningfuze.com/sgt/get';
});

//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function(sgtData){
    //Create a variable to hold this, DO NOT use the same name you used in your provider
    var contSelf = this;
    //Add an empty data object to your controller, make sure to call it 'data'
    var data = {};

    //Add a function called getData to your controller to call the SGT API
    //Refer to the prototype instructions for more help
    this.getData = function() {
        sgtData.callApi()
            .then(function(data){
                //console.log(data);
                contSelf.data = data.data;
            }, function(data){
                alert(data);
            });
    };
=======


//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function(){
    //Create a variable to hold this, DO NOT use the same name you used in your provider

    //Add an empty data object to your controller, make sure to call it 'data'


    //Add a function called getData to your controller to call the SGT API
    //Refer to the prototype instructions for more help

>>>>>>> 92c6d68b0da2bccbee260893409728d9a7c7508a
});