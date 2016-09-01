(function ()
{
    'use strict';

    angular
        .module('app.member.forms', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.member_forms', {
            url      : '/member/forms',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/member/forms/forms.html',
                    controller : 'FormsController as vm'
                }
            },
            bodyClass: 'forms'
        });
    }

})();