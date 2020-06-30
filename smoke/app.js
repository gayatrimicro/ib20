'use strict';

// Make sure console.log doesn't cause problems in shitty browsers
if(!window.console)
{
	console = { 
		log: function(){}, 
		dir: function(){}
	};
}
var MOBILE_MAX_WIDTH = 767;
var TABLET_MAX_WIDTH = 1023;

// create a universal listener method to account for browser inconsistencies
var addListenerMethod = STS.browserAppropriateAddEventListener();
var removeListenerMethod = STS.browserAppropriateRemoveEventListener();



/* this global variable is set to true once an outro animation starts
then it's set to false again. This prevents angular from
loading 2 partials at once. */
var disableNav = false;

// angular.module('v3App', ['angularytics'])
// .config(function(AngularyticsProvider) {
	
// }).run(function(Angularytics) {
// 	Angularytics.init();
// });


// app
angular.module('v3App', [
	'ngRoute',
	'v3AppServices',
	'v3AppControllers',
	'v3AppDirectives',
	'v3AppFilters',
	'ui.router'
])
.run(['$rootScope','$route','$timeout', appRun]);
/*
function appCongifuration($locationProvider, $sceDelegateProvider, AngularyticsProvider)
{
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $locationProvider.hashPrefix('!');
    // AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);
    AngularyticsProvider.setEventHandlers(['GoogleUniversal']);
	$sceDelegateProvider.resourceUrlWhitelist([
		// Allow same origin resource loads.
		'self',
		// Allow loading from our assets domain.  Notice the difference between * and **.
		'http://*.vimeo.com/**',
		'https://*.vimeo.com/**',
		'http://vimeo.com/**',
		'https://vimeo.com/**',
		'http://www.youtube-nocookie.com/**',
		'https://www.youtube-nocookie.com/**',
		'http://www.youtube.com/**',
		'https://www.youtube.com/**'
	]);
}*/

var v3AppServices = angular.module('v3AppServices', []);
var v3AppControllers = angular.module('v3AppControllers', []);
var v3AppDirectives = angular.module('v3AppDirectives', []);
var v3AppFilters = angular.module('v3AppFilters', []);

// ui-router configuration by AK

/*function uiRoutes($stateProvider, $urlRouterProvider) 
{
	// for any unmatched url, show 404 page
	$urlRouterProvider.otherwise('404Page');
	
	$stateProvider
		.state('/waterEffect/', {
			url: '/waterEffect/',
			templateUrl: '/waterEffect/app/partials/home/index.html',
			controller: 'HomeCtrl'
		})
		.state('404Page', {
			url: '*path',
			templateUrl: '/waterEffect/app/partials/404/index.html',
			controller: '404Ctrl'
		})
}*/
function appRun($rootScope, $route, $timeout)
{	
	// $rootScope.pageTitle = "Super Top Secret";
	// $rootScope.pageDescription = "Super Top Secret is an independent creative agency located in Salt Lake City, UT. We make brands relevant by making things that make a difference.";
	
	$rootScope.$on("$locationChangeStart", locationStart);
	function locationStart(evt, next, current)
	{
		// if the page is transitioning don't let ANYTHING change route
		if(disableNav)
		{
			evt.preventDefault();
		}
	}
	// Angularytics.init();
	console.log('app run');
	// check for smaller screen size and denote a mobile site root variable
	window[addListenerMethod]('resize',checkForMobile);
	function checkForMobile()
	{
		$rootScope.mobileDevice = false;
		$rootScope.tabletDevice = false;
		$rootScope.desktop = false;

		if(window.innerWidth <= MOBILE_MAX_WIDTH)
		{
			$rootScope.mobileDevice = true;
		}
		else if(window.innerWidth <= TABLET_MAX_WIDTH)
		{
			$rootScope.tabletDevice = true;
		}
		else
		{
			$rootScope.desktop = true;
		}
		// console.log('mobileDevice / tabletDevice / desktop');
		// console.log($rootScope.mobileDevice, $rootScope.tabletDevice, $rootScope.desktop);
	}
	checkForMobile();
}
// var carl = function() {
// 	console.log("Woof woof woof");
// 	ga('send', 'event', 'partners', 'click', "Woof Woof Woof");
// }

v3AppControllers.controller('HomeCtrl', ['$scope', '$routeParams', '$rootScope', '$timeout', function($scope, $routeParams, $rootScope, $timeout) {
	console.log("there's some main init stuff");
	function init()
	{
		// Bring the fuild holder into view for Chrome desktop only
		if ($rootScope.desktop == true){
			
			$rootScope.showFluid = true;
			// actiavte fluid on next digest
			$timeout(function(){
                window.FluidEffect.init();
                window.FluidEffect.start();
			}, 20);
		 }
	}

	$scope.showReelContainer = function()
	{
		$scope.showHighlightReel = true;
		Howler.mute();
		$timeout(function(){
			$rootScope.soundOn = false;
		}, 1);
	}

	function destroy()
	{
		if ($rootScope.desktop == true){
			// hide the fluid
			$rootScope.showFluid = false;
			// stop the fluid animation because overhead
			window.FluidEffect.stop();
		}


		if($rootScope.userSoundChoice == "unmute")
		{
			Howler.unmute();
			$timeout(function(){
				$rootScope.soundOn = true;
			}, 1);
		}

	}
	
	$scope.$on('$viewContentLoaded', init);
	$scope.$on("$destroy", destroy);
}]);

v3AppControllers.controller('404Ctrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

	function init()
	{
		console.log('404 controller running');
	}
	$scope.$on('$viewContentLoaded', init);

}]);

v3AppDirectives.directive('audioControl', ['$timeout', '$rootScope', function($timeout, $rootScope) {
	var link = function($scope, $element, $attr) {
		var sp = new MakeSpectrum('toggle_audio', 20, 25, 3, 1);
		var vol = 0;

		function fadeInEq() {
		    vol += 1;
		    sp.setVolume(vol);
		    if (vol < 1) setTimeout(fadeInEq, 60);
		}
		function fadeOutEq() {
		    vol -= 0.05;
		    sp.setVolume(vol);
		    if (vol > 0) setTimeout(fadeOutEq, 60);
		}

		$rootScope.userSoundChoice = "unmute";
		$rootScope.soundOn = true;
		$scope.sounds = {};
		Howler.iOSAutoEnable = false;

		$scope.initSound = function()
		{
			$scope.sounds.ambientBg = new Howl({
				urls: ['/audio/website_homepage_track_v2.mp3'],
				autoplay: true,
				loop: true,
				volume: 0.20
			});
			fadeInEq();
		}
		$scope.toggleAudio = function()
		{
			if($rootScope.soundOn == true)
			{
				$rootScope.userSoundChoice = "mute";
				Howler.mute();
				$rootScope.soundOn = false;
				fadeOutEq();
			}
			else
			{
				$rootScope.userSoundChoice = "unmute";
				Howler.unmute();
				$rootScope.soundOn = true;
				fadeInEq();
			}
		}
		if($rootScope.desktop)
		{
			$scope.initSound();
		}
	}

	return {
		link: link,
		scope: true
	}
}]);

v3AppDirectives.directive('pageLoader', ['$timeout', 'loadingTracker', '$rootScope', function($timeout, loadingTracker, $rootScope) {
	function link($scope, $element, $attrs)
	{
		// listen for loading events
		$scope.$on("loadingTrackerEvent", function(){
			// the animation directive has told us to begin
			if(loadingTracker.getAction() == "loadNextPage")
			{
				// tell the tracker to chill, otherwise we get an infinte loop
				loadingTracker.setAction("atRest");
				// preload the page
				$scope.loadPageAssets();
			}
		});
		$scope.$on("reloadPage", function(){
			$scope.loadPageAssets();
		})
		// fetch the assets that we want to preload

		$scope.assetEles = document.querySelectorAll("[data-preloader=image]");


		$scope.numAssets = $scope.assetEles.length; // number of assets to load
		$scope.numLoaded = 0; // assets loaded so far
		$scope.pctPerAsset = 100 / $scope.numAssets;

		$scope.vidProgressed = function()
		{
			// how much has video loaded as [0, 1.3)
			// cheat and say video is loaded at about 75%
			var loadingProgress = this.buffered.end(0) / this.duration * 1.3;
			
			if(loadingProgress >= 1)
			{
				// video loaded
				$scope.videoReady(this);

				// destroy the listener now that video has loaded
				this[removeListenerMethod]("progress", $scope.vidProgressed);
			}
			else
			{
				// pass in the progress of the element plus num loaded on update
				// this prevents loading bar from pausing in one spot for a long time
				loadingTracker.setProgress(($scope.numLoaded + loadingProgress) / $scope.numAssets);
				loadingTracker.broadcastStatus();
			}
		}
		$scope.loadPageAssets = function()
		{
			console.log("Number of assets found for preloading: " + $scope.numAssets);
			// if we found things to load, do it, otherwise play the animation as normal
			if($scope.numAssets > 0)
			{
				angular.forEach($scope.assetEles, function(asset, key){
					asset.onerror = function()
					{
						// the media borked out. We don't know why, but we don't want the whole page to stop sooo, let's just say it loaded ok?
						$scope.assetIncrement();
					}
					if(asset.dataset.preloader == "image")
					{
						var img = new Image(); // new empty image
						img.src= asset.dataset.src; // load preload src
						img.onload = function()
						{
							// attach to DOM and increment
							$scope.attachImg(asset);
						}
					}
					else if(asset.dataset.preloader == "vid")
					{
						asset[addListenerMethod]("progress", $scope.vidProgressed);
					}
				});
			}
			else
			{
				// play animation because there is nothing to load
				loadingTracker.setAction("playWorm");
				loadingTracker.broadcastStatus();
			}
		}
		$scope.attachImg = function(mediaAsset)
		{
			if(mediaAsset.dataset.attachMethod == "bg")
			{
				// attach as background
				mediaAsset.style.backgroundImage = "url(" + mediaAsset.dataset.src + ")";
			}
			else if(mediaAsset.dataset.attachMethod == "src")
			{
				// attach as src
				mediaAsset.src = mediaAsset.dataset.src;
			}
			// make sure it isn't loaded again
			mediaAsset.dataset.preloader = "loaded";

			// increase progress
			$scope.assetIncrement();
		}
		$scope.videoReady =  function(mediaAsset)
		{
			// make sure it isn't loaded again
			mediaAsset.dataset.preloader = "loaded";

			$scope.assetIncrement();
		}
		$scope.assetIncrement = function()
		{
			// an asset has been loaded and is ready to be added to completed count

			$scope.numLoaded++; // increase loaded count
			
			// update loading service with progression
			loadingTracker.setProgress($scope.numLoaded / $scope.numAssets);
			// broadcast it
			loadingTracker.broadcastStatus();
			
			// if all assets are loaded, tell EVERYONE
			if($scope.numLoaded == $scope.numAssets)
			{
				$rootScope.$broadcast("page_preloaded");
			}
		}
		
	}
	return {
		scope: true,
		restrict: 'A',
		link: link
	}
}]);

v3AppServices.service('animationTracker', ['$rootScope', trackAnimations]);

function trackAnimations($rootScope)
{
	this.animationStatus = "still";
	this.animationAction = "";
	this.mostRecentStatus = "";

	this.setAnimationStatus = function(status)
	{
		this.mostRecentStatus = this.animationStatus;
		this.animationStatus = status;
	}
	this.setAnimationAction = function(action)
	{
		this.animationAction = action;
	}
	this.broadcastStatus = function()
	{
		$rootScope.$broadcast("animationUpdate");
	}
	this.getAnimationStatus = function()
	{
		return {
			action: this.animationAction,
			status: this.animationStatus,
			recent: this.mostRecentStatus
		};
	}
}
v3AppServices.service('loadingTracker', ['$rootScope', trackLoading]);

function trackLoading($rootScope)
{
	this.progress = 0;
	this.action = false;

	this.setProgress = function(loadProgress)
	{
		this.progress = loadProgress;
	}
	this.getProgress = function(loadProgress)
	{
		return this.progress;
	}
	this.setAction = function(desiredAction)
	{
		this.action = desiredAction;
	}
	this.getAction = function(desiredAction)
	{
		return this.action;
	}
	this.broadcastStatus = function()
	{
		$rootScope.$broadcast("loadingTrackerEvent");
	}
}

angular.module('v3App').animation('.sts_transition', ['$timeout', '$rootScope', 'animationTracker', pageTransitions]);

function pageTransitions($timeout, $rootScope, animationTracker) {
	return {
		enter: function(element, done)
		{
			element[0].style.position = "fixed"; // "Freeze" the content
			disableNav = true;
			// tell the global tracker to cue up worm animation
			animationTracker.setAnimationAction("run_worm");
			// tell the global tracker to run the worm animation
			animationTracker.broadcastStatus();
			var enterAnimationUpdate = $rootScope.$on("animationUpdate", animationUpdated);

			function animationUpdated(){
				if(animationTracker.getAnimationStatus().action == "worm_squirmed")
				{
					// hide footer
					$timeout(function(){
						$rootScope.showFooter = false;
					}, 0);
					// fade in the page from 0 opacity to 1 after a certain percent of the worm has run
					TweenLite.fromTo(element, 1.8, { opacity: 0}, { opacity: 1, onComplete: function() {

						window.scrollTo(0,0); // bring browser to top coincide with making header at top
						element[0].style.position = "static"; // "Unfreeze" the content
						element[0].style.zIndex = 1; // set on top of outro
						disableNav = false; // let people click again
						animationTracker.setAnimationAction("at_rest"); // clear cue
						animationTracker.broadcastStatus(); // broadcast cue
						done(); // tell angular we're done

					}});
					enterAnimationUpdate(); // remove root scope listener
				}
			}
		},
		leave: function(element, done)
		{
			disableNav = true;
			function animationEnded()
			{
				done();
			}
			var exitAnimationUpdate = $rootScope.$on("animationUpdate", animationUpdated);
			function animationUpdated()
			{
				if(animationTracker.getAnimationStatus().action == "at_rest")
				{
					// $scope.$apply(function(){
					// 	$rootScope.showFooter = true;
					// });
					$timeout(function(){
						$rootScope.showFooter = true;
					}, 0);
					// remove the old view once the new one is fully visible. No animation needed
					animationEnded();
					exitAnimationUpdate(); // remove root scope listener

					// show footer
					
				}
				
			}
		}
	}
}


angular.module('v3App').animation('.work-panels-view', ['$timeout', '$rootScope', 'animationTracker', animateTiles]);

function animateTiles($timeout, $rootScope, animationTracker) {
	return {
		enter: function(element, done)
		{
			// console.log('Entering Panel: ' + element);
			done();
		},
		leave: function(element, done)
		{
			// console.log('Exiting Panel: ' + element);
			done();
		}
	}
}