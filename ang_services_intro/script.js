var app = angular.module('gronk', []);
app.controller('gronkControl', function($scope, $http, $log){
    this.searchTerm = '';

    this.getData = function(){
        var self = this;
        $log.log(self.searchTerm);
        $http({
            url:'https://itunes.apple.com/search?term='+ self.searchTerm +'&callback=JSON_CALLBACK',
            method:'JSONP',
            cache:false
        })
            .then(
                function(response){
                    $log.info(response);
                    self.data = response.data.results;
                },
                function(response){
                    $log.error(response); // "Failed to load";
                });
    };
});