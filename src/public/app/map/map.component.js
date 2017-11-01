angular.module('app').component('map',{
    controller: mapCtrl,
    templateUrl: 'app/map/map.component.html'
})

function mapCtrl(mapService) {
    var vm = this;

    vm.$onInit = function() {
        mapService.init();

        mapService.addMarker(31.783333, 35.216667);
    }
}