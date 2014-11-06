'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'view1/view1.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', ['$scope', function($scope) {
	$scope.trees = [
	{
		"type": "Boulevard",
		"cname": "Columnar Hornbeam",
		"sname": "Carpinus betula ‘Fastigata’",
		"size":	"35' X 15'",
		"tolerance": "Average",
		"native": "No",
		"fcolor": "Golden Yellow",
		"fruit": "No",
		"growth": "Moderate",
		"comments": "The Columnar Hornbeam is a little more narrow than the common European variety. It starts branching at the base. It has a very formal appearance and does not require very much pruning. The golden fall color is spectacular.",
		"link": "http://www.robertsonlandscaping.com/",
		"image": "images/b1.jpg"
	},
	{
		"type": "Boulevard",
		"cname": "Columnar Sergeant Cherry",
		"sname": "Prunus sargentii ‘Columnaris’",
		"size":	"35' X 15'",
		"tolerance": "Average",
		"native": "No",
		"fcolor": "Yellow and Orange Red",
		"fruit": "No",
		"growth": "Moderate",
		"comments": "The Columnar Sergeant Cherry has an upright, narrow, growth habit. It has beautiful, white spring flowers.",
		"link": "http://www.projectnoah.org/",
		"image": "images/b2.jpg"
	},
	{
		"type": "Boulevard",
		"cname": "Dawyck Purple Beech",
		"sname": "Fagus sylvatica ‘Dawyck Purple’",
		"size":	"30' X 12'",
		"tolerance": "Low",
		"native": "No",
		"fcolor": "Reddish Bronze",
		"fruit": "Yes",
		"growth": "Average",
		"comments": "The Columnar Sergeant Cherry has an upright, narrow, growth habit. It has beautiful, white spring flowers.",
		"link": "http://nursery.artknappsurrey.com/",
		"image": "images/b3.jpg"
	},
	{
		"type": "Boulevard",
		"cname": "Lavelle Hawthorn",
		"sname": "Crataegus lavallei ‘Lavalle Hawthorn’",
		"size":	"28' X 20'",
		"tolerance": "High",
		"native": "No",
		"fcolor": "Coppery Red",
		"fruit": "Fruit is edible, seeds are poisonous",
		"growth": "Moderate",
		"comments": "It is a shorter tree, so may block some views. The spring flowers are white and it does form fruit on the ends of the branches. The leaves are small and leathery and the bark is a lighter color. It is a hardy, beautiful tree that can stand many diverse conditions.",
		"link": "http://lamgonline.org/PlantDetails.php?PlantId=45",
		"image": "images/b4.jpg"
	},
	{
		"type": "Boulevard",
		"cname": "Flowering Pear",
		"sname": "Pyrus calleryana ‘Capital’, ‘Cleveland Select’",
		"size":	"40' X 15'",
		"tolerance": "Average",
		"native": "No",
		"fcolor": "Orange-red",
		"fruit": "No",
		"growth": "Fast to Moderate",
		"comments": "This is the only pear I would consider for a boulevard tree. It is a little more disease resistant, and has stronger branches. The white flowers in the spring are beautiful but odiferous, and the fall color is spectacular.",
		"link": "http://www.thetreefarm.com/pear-chanticleer-flowering",
		"image": "images/b5.jpg"
	},
	{
		"type": "Boulevard",
		"cname": "Mushashino Columnar Zelkova",
		"sname": "Zelkova serrata ‘Mushashino Columnar Zelkova’",
		"size":	"45' X 15'",
		"tolerance": "High",
		"native": "No",
		"fcolor": "Purple-Red",
		"fruit": "No",
		"growth": "Moderate",
		"comments": "Zelkova trees are beautiful, disease-resistant trees with great fall color. Watch for weak, narrow branches while the tree is young, in this variety, to avoid breakage during storms. This is a very hardy and narrow tree.",
		"link": "http://grobenursery.com/newest_trees",
		"image": "images/b6.jpg"
	},
	{
		"type": "Boulevard",
		"cname": "Crimson Century Maple",
		"sname": "Acer platanoides ‘Crimson Sentry’",
		"size":	"25' X 15'",
		"tolerance": "Average",
		"native": "No",
		"fcolor": "Reddish-Purple",
		"fruit": "No",
		"growth": "Moderate",
		"comments": "The Crimson Century Maple is a very narrow maple tree with great color. It can tolerate a wide variety of conditions but the trunk needs to be wrapped for protection from sun scald in the winter while the tree is young.",
		"link": "http://www.steinbrinklandscaping.com/proddetail.php?prod=trees-00012",
		"image": "images/b7.jpg"
	},
	{
		"type": "Boulevard",
		"cname": "Princeton Sentry Ginko",
		"sname": "Ginko biloba ‘Princeton Sentry’",
		"size":	"40' X 15'",
		"tolerance": "High",
		"native": "No",
		"fcolor": "Bright Yellow",
		"fruit": "Female trees have edible but stinky fruit",
		"growth": "Moderate",
		"comments": "This variety of Ginko is highly recommended as a street tree. It is a very hardy and narrow tree.",
		"link": "http://www.na.fs.fed.us/spfo/pubs/uf/uts/section1/sect1-slide74.htm",
		"image": "images/b8.jpg"
	},
	{
		"type": "Boulevard",
		"cname": "Columnar Norway Maple",
		"sname": "Acer platanoides ‘Columnare’",
		"size":	"35' X 15'",
		"tolerance": "Average",
		"native": "No",
		"fcolor": "Bright Yellow",
		"fruit": "No",
		"growth": "Moderate",
		"comments": "Columnar Norway Maples are narrow, hardy trees. They have a yellow fall color. The trunks need protection from sun scald in the winter by wrapping them while they are young.",
		"link": "http://www.breezyhillnursery.com/plantcatalog.html",
		"image": "images/b9.jpg"
	},
	{
		"type": "Boulevard",
		"cname": "Amanogawa Flowering Cherry",
		"sname": "Acer platanoides ‘Columnare’",
		"size":	"20' X 6'",
		"tolerance": "Average",
		"native": "No",
		"fcolor": "Orange-Red",
		"fruit": "No",
		"growth": "Moderate",
		"comments": "The Amanogawa Flowering Cherry is also known as the flagpole cherry because it is so narrow. It has beautiful spring flowers and great fall color.",
		"link": "http://www.landscapedesign.co.nz/landscapedetails_miniex.asp?id=3341",
		"image": "images/b10.jpg"
	}
]
}]);