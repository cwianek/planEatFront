(function () {
    "use strict";

    angular.module('uplication')
        .directive('recipes', function () {
            return {
                templateUrl: 'front/recipes/recipes.html',
                controller: recipesController,
                controllerAs: 'ctrl'
            }
        });

    function recipesController($scope, $state,$location) {

        $scope.recipes=[
            {
                title: 'Bigos',
                description: 'Sekret pysznego bigosu tkwi w "przegryzieniu" się wszystkich smaków. Dlatego im dłużej bigos się gotuje lub odgrzewa, tym jest smaczniejszy!',
                img: 'https://i.ytimg.com/vi/BQrs4yJx1M4/maxresdefault.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Grochowka',
                description: 'Pyszna grochówka, przypomni nam dawno zapomniany smaki zachwyci, bo taka grochówka jak moja zasmakuje każdemu :) Bo grochówka Ewy jest najlepsza',
                img: 'http://bi.gazeta.pl/im/b2/17/e9/z15275954Q,Zupa-jarzynowa.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },{
                title: 'Bigos',
                description: 'Sekret pysznego bigosu tkwi w "przegryzieniu" się wszystkich smaków. Dlatego im dłużej bigos się gotuje lub odgrzewa, tym jest smaczniejszy!',
                img: 'https://i.ytimg.com/vi/BQrs4yJx1M4/maxresdefault.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Grochowka',
                description: 'Pyszna grochówka, przypomni nam dawno zapomniany smaki zachwyci, bo taka grochówka jak moja zasmakuje każdemu :) Bo grochówka Ewy jest najlepsza',
                img: 'http://bi.gazeta.pl/im/b2/17/e9/z15275954Q,Zupa-jarzynowa.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Bigos',
                description: 'Sekret pysznego bigosu tkwi w "przegryzieniu" się wszystkich smaków. Dlatego im dłużej bigos się gotuje lub odgrzewa, tym jest smaczniejszy!',
                img: 'https://i.ytimg.com/vi/BQrs4yJx1M4/maxresdefault.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Grochowka',
                description: 'Pyszna grochówka, przypomni nam dawno zapomniany smaki zachwyci, bo taka grochówka jak moja zasmakuje każdemu :) Bo grochówka Ewy jest najlepsza',
                img: 'http://bi.gazeta.pl/im/b2/17/e9/z15275954Q,Zupa-jarzynowa.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Bigos',
                description: 'Sekret pysznego bigosu tkwi w "przegryzieniu" się wszystkich smaków. Dlatego im dłużej bigos się gotuje lub odgrzewa, tym jest smaczniejszy!',
                img: 'https://i.ytimg.com/vi/BQrs4yJx1M4/maxresdefault.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Grochowka',
                description: 'Pyszna grochówka, przypomni nam dawno zapomniany smaki zachwyci, bo taka grochówka jak moja zasmakuje każdemu :) Bo grochówka Ewy jest najlepsza',
                img: 'http://bi.gazeta.pl/im/b2/17/e9/z15275954Q,Zupa-jarzynowa.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },{
                title: 'Bigos',
                description: 'Sekret pysznego bigosu tkwi w "przegryzieniu" się wszystkich smaków. Dlatego im dłużej bigos się gotuje lub odgrzewa, tym jest smaczniejszy!',
                img: 'https://i.ytimg.com/vi/BQrs4yJx1M4/maxresdefault.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Grochowka',
                description: 'Pyszna grochówka, przypomni nam dawno zapomniany smaki zachwyci, bo taka grochówka jak moja zasmakuje każdemu :) Bo grochówka Ewy jest najlepsza',
                img: 'http://bi.gazeta.pl/im/b2/17/e9/z15275954Q,Zupa-jarzynowa.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Bigos',
                description: 'Sekret pysznego bigosu tkwi w "przegryzieniu" się wszystkich smaków. Dlatego im dłużej bigos się gotuje lub odgrzewa, tym jest smaczniejszy!',
                img: 'https://i.ytimg.com/vi/BQrs4yJx1M4/maxresdefault.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Grochowka',
                description: 'Pyszna grochówka, przypomni nam dawno zapomniany smaki zachwyci, bo taka grochówka jak moja zasmakuje każdemu :) Bo grochówka Ewy jest najlepsza',
                img: 'http://bi.gazeta.pl/im/b2/17/e9/z15275954Q,Zupa-jarzynowa.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Bigos',
                description: 'Sekret pysznego bigosu tkwi w "przegryzieniu" się wszystkich smaków. Dlatego im dłużej bigos się gotuje lub odgrzewa, tym jest smaczniejszy!',
                img: 'https://i.ytimg.com/vi/BQrs4yJx1M4/maxresdefault.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Grochowka',
                description: 'Pyszna grochówka, przypomni nam dawno zapomniany smaki zachwyci, bo taka grochówka jak moja zasmakuje każdemu :) Bo grochówka Ewy jest najlepsza',
                img: 'http://bi.gazeta.pl/im/b2/17/e9/z15275954Q,Zupa-jarzynowa.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },{
                title: 'Bigos',
                description: 'Sekret pysznego bigosu tkwi w "przegryzieniu" się wszystkich smaków. Dlatego im dłużej bigos się gotuje lub odgrzewa, tym jest smaczniejszy!',
                img: 'https://i.ytimg.com/vi/BQrs4yJx1M4/maxresdefault.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Grochowka',
                description: 'Pyszna grochówka, przypomni nam dawno zapomniany smaki zachwyci, bo taka grochówka jak moja zasmakuje każdemu :) Bo grochówka Ewy jest najlepsza',
                img: 'http://bi.gazeta.pl/im/b2/17/e9/z15275954Q,Zupa-jarzynowa.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Bigos',
                description: 'Sekret pysznego bigosu tkwi w "przegryzieniu" się wszystkich smaków. Dlatego im dłużej bigos się gotuje lub odgrzewa, tym jest smaczniejszy!',
                img: 'https://i.ytimg.com/vi/BQrs4yJx1M4/maxresdefault.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            },
            {
                title: 'Grochowka',
                description: 'Pyszna grochówka, przypomni nam dawno zapomniany smaki zachwyci, bo taka grochówka jak moja zasmakuje każdemu :) Bo grochówka Ewy jest najlepsza',
                img: 'http://bi.gazeta.pl/im/b2/17/e9/z15275954Q,Zupa-jarzynowa.jpg',
                ingredients: ['tomato','potato','paper','rise','cheese','full gluten']
            }
        ];

        $scope.goToDetailsRecipe = function (recipe) {
            $state.go('list.details',{recipe: recipe, recipes: $scope.recipes});
        };

    }


})();
