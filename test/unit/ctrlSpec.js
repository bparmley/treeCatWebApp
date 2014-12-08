'use strict';

/* jasmine specs for controllers go here */
describe('TreeApp controllers', function() {

  beforeEach(module('treeApp'));

  describe('ListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('js/treelist.json').
          respond([{cname: 'Baby'}]);

      scope = $rootScope.$new();
      ctrl = $controller('PhoneListCtrl', {$scope: scope});
    }));


    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.trees).toBeUndefined();
      $httpBackend.flush();

      expect(scope.trees).toEqual([{cname: 'Baby Blue Eyes Blue Spruce'}]);
    });

    
  });
});