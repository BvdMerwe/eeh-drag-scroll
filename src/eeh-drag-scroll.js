'use strict';

angular.module('eehUi', []).directive('eehDragScroll', function () {
    return {
        restrict: 'AE',
        transclude: true,
        template: '<div class="eeh-drag-scroll"><div class="eeh-drag-scroll-top-layer"></div><div ng-transclude></div></div>',
        link: function (scope, element) {
            var topLayer = element.find('.eeh-drag-scroll-top-layer');
            topLayer.hide();
            element.mousedown(function () {
                topLayer.show();
            });
            element.mouseup(function () {
                topLayer.hide();
            });
            element.mousemove(function (event) {
                if (topLayer.is(":visible")) {
                    var mouseX = event.pageX - element.offset().left;
                    element.scrollLeft(mouseX);
                }
            });
        }
    }
});