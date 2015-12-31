app.controller("mainController", function($rootScope, $scope){
    this.subActive = '';
    this.view = true;

    $scope.sideNav = {
        'HTML': [
            'HTML-Fundamentals-1',
            'HTML-Fundamentals-2',
            'HTML-Fundamentals-3'
        ]
    };

}).controller("navController", function($scope){
    this.active = "";

    this.objKeys = function(obj){
        return Object.keys(obj);
    }

}).controller("angController", function($scope){

    $scope.logoUrl = 'assets/images/logos/AngularJS-large.png';
    $scope.lang = 'AngularJS';

}).controller("bootstrapController", function($scope){

    $scope.logoUrl = 'assets/images/logos/bootstrap.png';
    $scope.lang = 'Bootstrap';

}).controller('cssController', function($scope){

    $scope.logoUrl = 'assets/images/logos/css.png';
    $scope.lang = 'CSS';

}).controller('htmlController', function($scope){

    $scope.logoUrl = 'assets/images/logos/html.png';
    $scope.lang = 'HTML';

}).controller('jsController', function($scope){

    $scope.logoUrl = 'assets/images/logos/js.png';
    $scope.lang = 'JavaScript'

}).controller('phpController', function($scope){

    $scope.logoUrl = 'assets/images/logos/php.png';
    $scope.lang = 'php';

});