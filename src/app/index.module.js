(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [
			// Common 3rd Party Dependencies
            
            'textAngular',
            'xeditable',

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick Panel
            'app.quick-panel',
			
			
			//Pages
			'app.pages',
			//Member
			'app.member',
            // Sample
            'app.sample'
        ]);
})();