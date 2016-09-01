(function ()
{
    'use strict';

    angular
        .module('app.member', [
            'app.member.forms',
            
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {

		// Navigation
        msNavigationServiceProvider.saveItem('member', {
            title : 'Member',
            icon  : 'icon-account-multiple',
            weight: 2
        });
        msNavigationServiceProvider.saveItem('member.forms', {
            title: 'Forms',
            icon : 'icon-window-restore',
            state: 'app.member_forms'
        });

     
    }
})();