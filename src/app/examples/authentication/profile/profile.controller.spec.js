(function() {
    'use strict';

    describe('controllers', function() {

        beforeEach(module('app'));

        it('User profile should be Nam', inject(function($controller) {
            var vm = $controller('ProfileController');

            expect(vm.user.name === 'Nam').toBeTruthy();

        }));

        it('Scope should be isolate', inject(function($controller) {
            var vm = $controller('ProfileController');
            expect(vm).toEqual(jasmine.any(Object));
        }));
    });
})();
