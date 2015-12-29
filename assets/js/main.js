var app = angular.module("protoInstructions", ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider){

   $routeProvider
       .when('/', {
          templateUrl: 'assets/templates/default.html',
          controller: 'mainController'
       })
       .when('/angular', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'angController'
       })
       .when('/bootstrap', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'bootstrapController'
       })
       .when('/css', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'cssController'
       })
       .when('/html', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'htmlController'
       })
       .when('/js', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'jsController'
       })
       .when('/php', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'phpController'
       })
       .when('/html-fundamentals-1', {
          templateUrl: 'assets/templates/featureSets.html',
          controller: 'htmlFund1Controller',
          controllerAs: 'fs'
       })
       .when('/html-fundamentals-2', {
          templateUrl: 'assets/templates/featureSets.html',
          controller: 'htmlFund2Controller',
          controllerAs: 'fs'
       })
});

app.directive("instructions", function(){
   return {
      restrict: 'E',
      transclude: true,
      templateUrl: "assets/templates/instructionTemplateB.html",
      scope: {
         title: '=',
         description: '=',
         projects: '=',
         branch: '=',
         links: '='
      },
      link: function(scope, element){
         scope.repoName = "prototypes_C7";
         scope.map = {17: false, 18: false, 90: false};
         scope.view = true;



         $('body').on("keydown", function(e){
            if(e.which in scope.map){
               scope.map[e.which] = true;
               if(scope.map[17] && scope.map[18] && scope.map[90]){
                  console.log("It worked!!!");
                  scope.$apply(function(){
                     scope.view = !scope.view;
                  });
               }
            }
         }).on("keyup", function(e){
            if(e.which in scope.map){
               scope.map[e.which] = false;
            }
         });
      }
   }
});

app.controller("mainController", function($scope){

   this.angular = {};

   this.bootstrap = {};

   this.css = {};

   this.html = {};

   this.js = {};

   this.php = {};

}).controller("navController", function(){
   this.active = "";
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
   $scope.lang = 'PHP / MySQL';

});

//Prototype controllers

app.controller('htmlFund1Controller', function(){

   this.title = 'HTML Fundamentals 1';
   this.description = 'This prototype blah blah';
   this.branch = 'test_branch';

   this.links = {
      Presentation: {
         'slides 1': 'https://slides1.com',
         'slides 2': 'https://slides2.com'
      },
      Video: {
         'video 1': 'https://video1.com',
         'video 2': 'https://video2.com'
      }
   };

   this.features = {
      'Feature Set 1 - It begins': {
         html: "<ol class='left-border'><li>In PHP Storm:<ol class='nested-1'><li>Expand the lfz folder, if you haven't already<br><img src='assets/images/prototypes/html-fundamentals-1/1.png' alt=''></li><li>Go into your prototypes directory, then into your html_fundamentals_1 folder</li><li>Right click on the html_fundamentals_1 folder, click on \"new\", then on \"file\"<br><img src='assets/images/prototypes/html-fundamentals-1/2.png' alt=''></li><li>Enter the name of the file: <b>index.html</b><br><img src='assets/images/prototypes/html-fundamentals-1/3.png' alt=''> </li><li>Click <span class='label label-info'>OK</span></li></ol></li><li>Create a basic HTML skeleton, including: <ul><li>DOCTYPE</li><li>html</li><li>head</li><li>body</li></ul></li><li>Test your output: <ol class='nested-1'><li>Open a browser (preferably Chrome)</li><li>In the URL (not the search bar) type <code>localhost:8888/lfz</code>. If your MAMP port is not 8888, enter the port appropriate for your system</li><li>Navigate through the displayed links to get to your prototypes/html_fundamentals_1 folder</li><li>Your index page will now display</li><li><b>It will be blank</b></li></ol></li><li>Add content <ol class='nested-1'><li>In PHP Storm: <ol class='nested-2'><li>Between the <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code> tags add: <code>Hello, I am [your name]</code><ul><li>Don't put the quotes</li><li>Replace the <b>[your name]</b> with your name, without the brackets</li></ul></li></ol></li></ol></li><li>Check your code <ul><li>In Chrome <ol class='nested-1'><li>Refresh the page</li><li>See if your message appears <br><img src='assets/images/prototypes/html-fundamentals-1/4.png' alt=''></li></ol></li></ul></li></ol>"
      },
      'Feature Set 2': {
         html: "<ol class='left-border'><li>Surround your <code>Hello, I am [your name]</code> text with <code>&lt;h1&gt;</code> and <code>&lt;/h1&gt;</code></li><li>Add a paragraph tag, and fill it with a short description about your past career. Don't forget the closing p tag!</li><li>Add a second paragraph tag, fill it with a short description of what you want to do with your LearningFuze education.</li><li>In the second paragraph, after the text you entered above: <ol class='nested-1'><li>Nest a h3 tag inside the paragraph. The h3 tag should be the <b>child</b> of the p tag, after the text <ul><li>Please note that we <b>do not</b> normally nest headers in paragraphs</li></ul></li><li>Add the text <cdoe>Experience</cdoe> to your h3 tag</li><li>After the h3 close tag, add a break tag. The p tag should be the <b>parent</b> of the <code>&lt;h3&gt;</code> and <code>&lt;br&gt;</code> tags</li><li>Add the text <code>Todo: Fill in skills</code></li></ol></li><li>In the h3 tag, add a title <b>attribute</b>. <i>title</i> will be the <b>key</b>, and add <code>This is an example title</code> as the <b>value</b></li></ol>"
      },
      'Feature Set 3 - Got Skills?': {
         html: "<ol class='left-border'><li>Create a new h3 tag, below your existing code. Give it the text of <code>Skills</code></li><li>Add 5 skills that you have, each inside its own p tags</li></ol>"
      },
      'Feature Set 4 - Any comments?': {
         html: "<ol class='left-border'><li>Create comments before each of your paragraphs, describing the purpose of that paragraph that immediately follows</li></ol>"
      },
      'Hints': {
         html: "<ol class='left-border'><li>Test your code frequently, don't wait till you're done to test your code</li><li>Always have your console open while testing your code</li><li>Save and push to gitHub often: <ol class='nested-1'><li>Save as often as you can it's simple, quick and will save you a lot of headache</li><li>Push to Github after each feature set is successfully completed (at least)</li><li>Remember to push to your <code>" + this.branch + "</code> branch</li></ol></li><li>Don't forget to ask for help if you get stuck</li></ol>"
      }
   }
});

app.controller('htmlFund2Controller', function() {

   this.title = 'HTML Fundamentals 2';
   this.description = 'This prototype will continue where the last one left off and build your skill set even further';
   this.branch = 'html_fund_2';

   this.links = {
      Presentation2: {
         'slides 1-2': 'https://slides1.com',
         'slides 2-2': 'https://slides2.com'
      },
      Video2: {
         'video 1-2': 'https://video1.com',
         'video 22-': 'https://video2.com'
      }
   };

   this.features = {
      'Feature Set 1': {
         html: "<ol class='left-border'><li>This</li><li>Worked!</li></ol>"
      },
      'Feature Set 2': {
         html: "<ol class='left-border'><li>Here</li><li>We</li><li>GO!!!!</li></ol>"
      }
   }
});