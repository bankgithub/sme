(function ()
{
    'use strict';

    angular
        .module('app.management', [
            'app.management.strategic',
            
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {

		// Navigation
        msNavigationServiceProvider.saveItem('management', {
            title : 'Management',
            icon  : 'icon-account-multiple',
			hidden: function(){
				return false;
			},
            weight: 3
        });
        msNavigationServiceProvider.saveItem('management.strategic', {
            title: 'Strategic',
            icon : 'icon-window-restore',
            state: 'app.management_strategic',
			hidden: function(){
				return false;
			},
        });

     
    }
})();