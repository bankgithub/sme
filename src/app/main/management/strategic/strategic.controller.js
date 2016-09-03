(function ()
{
    'use strict';

    angular
        .module('app.management.strategic')
        .controller('StrategicManagementController', StrategicManagementController);

	var strength = {
		list: [{id:"1",checked:false, guideline:"strengthGuildLine1", factor:"strengthFactor1",weight:0.11, rating:"2"},
			   {id:"2",checked:false, guideline:"strengthGuildLine2", factor:"strengthFactor2",weight:0.12, rating:"4"},],
		ratingList: [
			{name:"Major Weakness", value:"1"},
			{name:"Minor Weakness", value:"2"},
			{name:"Minor Strength", value:"3"},
			{name:"Major Strength", value:"4"},
		
		],
		count:2,
		addStrength:function ()
		{
			this.count++;
			this.list.push({id:this.count,checked:false});
			
			
		},		
		removeStrength:function()
		{
			var len = this.list.length;
			for(var i = 0;i<len;i++){
				if(this.list[i].checked){
					console.log(i);
					this.list.splice(i,1);
					i--;
					len--;
					
				}
			}
		},
		check:function(index)
		{
			
			this.list[index].checked = !this.list[index].checked;
			console.log("check "+index+ " status:"+this.list[index].checked);
		},
	};	
	
	var weakness = {
		list: [{id:"1", guideline:"weaknessGuildLine1", factor:"weaknessFactor1",weight:0.21, rating:"4"},
			   {id:"2", guideline:"weaknessGuildLine2", factor:"weaknessFactor2",weight:0.22, rating:"3"},],
		ratingList: [
			{name:"Major Weakness", value:"1"},
			{name:"Minor Weakness", value:"2"},
			{name:"Minor Strength", value:"3"},
			{name:"Major Strength", value:"4"},
		
		],
		count: 2,
		addWeakness:function ()
		{
			this.count++;
			this.list.push({id:this.count,checked:false});
			
			
		},		
		removeWeakness:function()
		{
			var len = this.list.length;
			for(var i = 0;i<len;i++){
				if(this.list[i].checked){
					console.log(i);
					this.list.splice(i,1);
					i--;
					len--;
					
				}
			}
		},
		check:function(index)
		{
			
			this.list[index].checked = !this.list[index].checked;
			console.log("check "+index+ " status:"+this.list[index].checked);
		},
	};	
	var opportunity = {
		list: [{id:"1", guideline:"opportunityGuildLine1", factor:"opportunityFactor1",weight:0.31, rating:"3"},
			   {id:"2", guideline:"opportunityGuildLine2", factor:"opportunityFactor2",weight:0.32, rating:"1"},],
		ratingList: [
			{name:"Major Weakness", value:"1"},
			{name:"Minor Weakness", value:"2"},
			{name:"Minor Strength", value:"3"},
			{name:"Major Strength", value:"4"},
		
		],
		count: 2,
		addOpportunity:function ()
		{
			this.count++;
			this.list.push({id:this.count,checked:false});
			
		},		
		removeOpportunity:function()
		{
			var len = this.list.length;
			for(var i = 0;i<len;i++){
				if(this.list[i].checked){
					console.log(i);
					this.list.splice(i,1);
					i--;
					len--;
					
				}
			}
		},
		check:function(index)
		{
			
			this.list[index].checked = !this.list[index].checked;
			console.log("check "+index+ " status:"+this.list[index].checked);
		},
	};	
	var threat = {
		list: [{id:"1", guideline:"threatGuildLine1", factor:"threatFactor1",weight:0.41, rating:"1"},
			   {id:"2", guideline:"threatGuildLine2", factor:"threatFactor2",weight:0.42, rating:"2"},],
		ratingList: [
			{name:"Major Weakness", value:"1"},
			{name:"Minor Weakness", value:"2"},
			{name:"Minor Strength", value:"3"},
			{name:"Major Strength", value:"4"},
		
		],
		count:2,
		addThreat:function ()
		{
			this.count++;
			this.list.push({id:this.count,checked:false});
			
			
		},		
		removeThreat:function()
		{
			var len = this.list.length;
			for(var i = 0;i<len;i++){
				if(this.list[i].checked){
					console.log(i);
					this.list.splice(i,1);
					i--;
					len--;
					
				}
			}
			
		},
		check:function(index)
		{
			
			this.list[index].checked = !this.list[index].checked;
			console.log("check "+index+ " status:"+this.list[index].checked);
		},
	};	
    /** @ngInject */

	function StrategicManagementController($mdDialog)
    {
        var vm = this;
		
		vm.strength = strength;
		vm.weakness = weakness;
		vm.opportunity = opportunity;
		vm.threat = threat;
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
        vm.swot = {};
		//DEMO Data
		vm.swot.strength = strength.list;
		vm.swot.weakness = weakness.list;
		vm.swot.opportunity = opportunity.list;
		vm.swot.threat = threat.list;	
		
		
       

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