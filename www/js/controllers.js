angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


$scope.openBrowser = function (url) {
cordova.ThemeableBrowser.open('http://www.' + url, '_blank', {
          statusbar: {
              color: '#ffffff'
          },
          toolbar: {
              height: 44,
              color: '#56ad9b'
          },
          title: {
              color: '#ffffff',
              showPageTitle: true
          },
          "browserProgress": {
            "showProgress": true,
            "progressBgColor": "#016585",
            "progressColor": "#FFAA16"
          },
          closeButton: {
              image: 'ic_chevron_right_white_36dp',
              imagePressed: 'close_pressed.png',
              align: 'right',
              event: 'closePressed'
          },
          backButtonCanClose: true
        }).addEventListener('backPressed', function(e) {
            alert('back pressed');
        }).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
            console.error(e.message);
        }).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
            console.log(e.message);
        });
}


}])
   
.controller('facebookCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  // window.open('http://www.facebook.com','_self');

}])
   
.controller('twitterCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    