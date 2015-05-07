(function() {
  var app = angular.module('store-directives', []);

  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict: "A",
      templateUrl: "product-specs.html"
    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  app.directive("productGallery", function() {
    return {
      restrict: "E",
      templateUrl: "product-gallery.html",
      controller: function($scope) {
        $scope.current = 0;
        $scope.setCurrent = function(images, selectedImage) {
          var selected = images.indexOf(selectedImage);
          $scope.current = selected;


        };
      },
      controllerAs: "gallery"
    };
  });
})();

/*  
  //template incase something goes wrong
  this.setCurrent = function(imageNumber){
    this.current = imageNumber || 0;
  };
          
          
// previous code that worked before refactor  in this products.js file          
app.controller('GalleryController', function($scope){
  $scope.current = 3;  
  $scope.setCurrent = function(images, selectedImage) {
    var selected = images.indexOf(selectedImage);
    $scope.current = selected;
    };
  });
  
  
*/