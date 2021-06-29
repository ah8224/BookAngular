var app = angular.module("BookApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/authors", {
            templateUrl: "authors.html"
        })
        .when("/books", {
            templateUrl: "books.html"
        })
        .when("/popular", {
            templateUrl: "popularbooks.html"
        })
        .when("/contact", {
            templateUrl: "contact.html"
        })
        .when("/popular/react", {
            templateUrl: "popular/react.html"
        })
        .when("/popular/angular", {
            templateUrl: "popular/angular.html"
        })
        .when("/popular/vue", {
            templateUrl: "popular/vue.html"
        })
        ;
});
app.controller('movieCtrl', function ($scope) {
    $scope.MovieList = [
        {
            "name": "Movie1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget.",
            "language": "English"
        },
        {
            "name": "Movie2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget.",
            "language": "Spanish"
        },
        {
            "name": "Movie3",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget.",
            "language": "French"
        },
    ]
    $scope.add = () => {
        alert(" " + $scope.mname + " ");
    }
});
