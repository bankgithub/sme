(function ()
{
    'use strict';

    angular
        .module('app.management.strategic', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.management_strategic', {
            url      : '/management/strategic',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/management/strategic/strategic.html',
                    controller : 'StrategicManagementController as vm'
                }
            },
            bodyClass: 'stratetic'
        });
    }

})();