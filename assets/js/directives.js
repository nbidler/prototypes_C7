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
            links: '=',
            view: '='
        },
        link: function(scope, element){
            scope.repoName = "prototypes_C7";
            scope.map = {17: false, 18: false, 90: false};
            console.log("view:", scope.view);

            $('body').on("keydown", function(e){
                console.log('Press:', e.which);
                if(e.which in scope.map){
                    scope.map[e.which] = true;
                    if(scope.map[17] && scope.map[18] && scope.map[90]){
                        console.log("It worked ... somewhat");
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