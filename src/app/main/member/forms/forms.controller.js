(function ()
{
    'use strict';

    angular
        .module('app.member.forms')
        .controller('FormsController', FormsController);

    /** @ngInject */
    var educations = {
		list: [{id:"0"},],
		addEducation:function ()
		{
			var newEducationID = this.list.length;
			this.list.push({id:newEducationID});
			console.log("Add education"+newEducationID);
			
		},		
		removeEducation:function()
		{
			this.list.pop();
		},
	};
	 var jobs = {
		list:[{id:"0"}],
		addJob: function ()
		{
			var newJobID = this.list.length;
			this.list.push({id:newJobID});

		},
		removeJob: function ()
		{
			this.list.pop();	
		},
		
	};
	 var trainings = {
		list: [{id:"0"},],
		trainingResults: [
			{name:"Project improved", value:"1"},
			{name:"Job improved", value:"2"},
			{name:"Not improved", value:"3"},
		],
		addTraining: function ()
		{
			var id = this.list.length;
			this.list.push({id:id});
		},
		removeTraining:function ()
		{
			this.list.pop();
		},
		
	};
	
	
	 var projects = {
		list: [{id:"0"},],	
		projectFunctions : [
			{name:"Leader", value:"1"},
			{name:"Main supporter", value:"2"},
			{name:"Supporter", value:"3"},
		],
		addProject: function ()
			{
				var newProjectID = this.list.length;
				this.list.push({id:newProjectID});
	
			},
		removeProject: function ()
		{
			this.list.pop();
			
		},
	};
	
	 var skills = {
		list: [{id:"0"},],	
		levels : [
			{name:"Excellent", value:"5"},
			{name:"Good", value:"4"},
			{name:"Fair", value:"3"},
			{name:"Poor", value:"2"},
			{name:"Very poor", value:"1"},
		],
		types : [
			{name:"Basic Work", value:"1"},
			{name:"Management", value:"2"},
			{name:"Technical Skill", value:"3"},
			{name:"Monitoring Skill", value:"4"},
			{name:"Improvement SKll", value:"5"},
		],
		addSkill: function ()
			{
				var newId = this.list.length;
				this.list.push({id:newId});
	
			},
		removeSkill: function ()
		{
			this.list.pop();	
		},
		
	};
	
	var performanceRecords = {
		list: [{id:"0"},],	
		levels : [
			{name:"Excellent", value:"5"},
			{name:"Good", value:"4"},
			{name:"Fair", value:"3"},
			{name:"Poor", value:"2"},
			{name:"Very poor", value:"1"},
		],
		
		addPerformance: function ()
			{
				var newId = this.list.length;
				this.list.push({id:newId});
	
			},
		removePerformance: function ()
		{
			this.list.pop();	
		},
		
	};
	function FormsController($mdDialog)
    {
        var vm = this;
		
		vm.educations = educations;
		vm.jobs = jobs;
		vm.projects = projects;
		vm.trainings = trainings;
		vm.skills = skills;
		vm.performanceRecords = performanceRecords;

        // Data
        vm.horizontalStepper = {
            step1: {},
            step2: {},
            step3: {},
            step4: {},
            step5: {}
        };

        vm.verticalStepper = {
            step1: {},
            step2: {},
            step3: {},
            step4: {},
            step5: {}
        };

        vm.basicForm = {};
        vm.formWizard = {};
        vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function (state)
        {
            return {abbrev: state};
        });

        // Methods
        vm.sendForm = sendForm;

		vm.testSubmit = testSubmit;
        vm.showDataDialog = showDataDialog;
        vm.submitHorizontalStepper = submitHorizontalStepper;
        vm.submitVerticalStepper = submitVerticalStepper;

        //////////

        /**
         * Submit horizontal stepper data
         * @param event
         */
        function submitHorizontalStepper(event)
        {
            // Show the model data in a dialog
            vm.showDataDialog(event, vm.horizontalStepper);

            // Reset the form model
            vm.horizontalStepper = {
                step1: {},
                step2: {},
                step3: {},
                step4: {},
                step5: {}
            };
        }

        /**
         * Submit vertical stepper data
         *
         * @param event
         */
        function submitVerticalStepper(event)
        {
            // Show the model data in a dialog
            vm.showDataDialog(event, vm.verticalStepper);

            // Reset the form model
            vm.verticalStepper = {
                step1: {},
                step2: {},
                step3: {},
                step4: {},
                step5: {}
            };
        }

        /**
         * Submit stepper form
         *
         * @param ev
         */
        function showDataDialog(ev, data)
        {
            // You can do an API call here to send the form to your server

            // Show the sent data.. you can delete this safely.
            $mdDialog.show({
                controller         : function ($scope, $mdDialog, formWizardData)
                {
                    $scope.formWizardData = formWizardData;
                    $scope.closeDialog = function ()
                    {
                        $mdDialog.hide();
                    };
                },
                template           : '<md-dialog>' +
                '  <md-dialog-content><h1>You have sent the form with the following data</h1><div><pre>{{formWizardData | json}}</pre></div></md-dialog-content>' +
                '  <md-dialog-actions>' +
                '    <md-button ng-click="closeDialog()" class="md-primary">' +
                '      Close' +
                '    </md-button>' +
                '  </md-dialog-actions>' +
                '</md-dialog>',
                parent             : angular.element('body'),
                targetEvent        : ev,
                locals             : {
                    formWizardData: data
                },
                clickOutsideToClose: true
            });
        }

		function testSubmit(){
			console.log(vm.formWizard);
		}
		
        /**
         * Send form
         */
        function sendForm(ev)
        {
            // You can do an API call here to send the form to your server
			console.log("send form");
            // Show the sent data.. you can delete this safely.
            $mdDialog.show({
                controller         : function ($scope, $mdDialog, formWizardData)
                {
                    $scope.formWizardData = formWizardData;
                    $scope.closeDialog = function ()
                    {
                        $mdDialog.hide();
                    };
                },
                template           : '<md-dialog>' +
                '  <md-dialog-content><h1>You have sent the form with the following data</h1><div><pre>{{formWizardData | json}}</pre></div></md-dialog-content>' +
                '  <md-dialog-actions>' +
                '    <md-button ng-click="closeDialog()" class="md-primary">' +
                '      Close' +
                '    </md-button>' +
                '  </md-dialog-actions>' +
                '</md-dialog>',
                parent             : angular.element('body'),
                targetEvent        : ev,
                locals             : {
                    formWizardData: vm.formWizard
                },
                clickOutsideToClose: true
            });

            // Clear the form data
            vm.formWizard = {};
        }
    }
})();