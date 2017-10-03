(function() {
    'use strict';

    angular
        .module('app')
        .config(translateConfig);

    /* @ngInject */
    function translateConfig(triSettingsProvider, triRouteProvider) {
        var now = new Date();
        // set app name & logo (used in loader, sidemenu, footer, login pages, etc)
        triSettingsProvider.setName('Lead Renew');
        triSettingsProvider.setCopyright('&copy;' + now.getFullYear() + ' leadrenew.com');
        triSettingsProvider.setLogo('assets/images/logo.png');
        // set current version of app (shown in footer)
        triSettingsProvider.setVersion('Alpha 1.0');
        // set the document title that appears on the browser tab
        triRouteProvider.setTitle('Lead Renew');
        triRouteProvider.setSeparator('|');
    }
})();
