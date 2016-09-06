(function ()
{
    'use strict';

    angular
        .module('app.management.strategic')
        .controller('StrategicManagementController', StrategicManagementController);

	var strength = {
		list: [{id:"1",relatedSolutionSelected: false, checked:false, guideline:"strengthGuildLine1", factor:"strengthFactor1",weight:0.11, rating:"2"},
			   {id:"2", relatedSolutionSelected: false,checked:false, guideline:"strengthGuildLine2", factor:"strengthFactor2",weight:0.12, rating:"4"},],
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
			this.list.push({id:this.count,checked:false,relatedSolutionSelected: false});
			
			
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
		check:function(index) //   add/remove swot
		{
			
			this.list[index].checked = !this.list[index].checked;
			console.log("check "+index+ " status:"+this.list[index].checked);
		},
		
	};	
	
	var weakness = {
		list: [{id:"1",relatedSolutionSelected: false,checked:false, guideline:"weaknessGuildLine1", factor:"weaknessFactor1",weight:0.21, rating:"4"},
			   {id:"2",relatedSolutionSelected: false,checked:false, guideline:"weaknessGuildLine2", factor:"weaknessFactor2",weight:0.22, rating:"3"},],
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
			this.list.push({id:this.count,checked:false,relatedSolutionSelected: false});
			
			
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
		list: [{id:"1",relatedSolutionSelected: false,checked:false, guideline:"opportunityGuildLine1", factor:"opportunityFactor1",weight:0.31, rating:"3"},
			   {id:"2",relatedSolutionSelected: false,checked:false, guideline:"opportunityGuildLine2", factor:"opportunityFactor2",weight:0.32, rating:"1"},],
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
			this.list.push({id:this.count,checked:false,relatedSolutionSelected: false});
			
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
		list: [{id:"1", relatedSolutionSelected: false,checked:false,guideline:"threatGuildLine1", factor:"threatFactor1",weight:0.41, rating:"1"},
			   {id:"2", relatedSolutionSelected: false,checked:false,guideline:"threatGuildLine2", factor:"threatFactor2",weight:0.42, rating:"2"},],
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
			this.list.push({id:this.count,checked:false,relatedSolutionSelected: false});
			
			
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

	
	function StrategicManagementController($document,$mdDialog)
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
		vm.solutions = [];
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
		vm.openTOWSDialog = openTOWSDialog;
		
		//vm.openSTDialog = openSTDialog;
		//vm.openWTDialog = openWTDialog;
		vm.deleteSolutions = deleteSolutions;
		vm.checkRelatedSwot = checkRelatedSwot;

        //////////
		function checkRelatedSwot(){ //Union set of all dependency
			console.log("check related swot");
			var s_dep_set = new Set();
			var w_dep_set = new Set();
			var o_dep_set = new Set();
			var t_dep_set = new Set();
			var solution_len = vm.solutions.length;
			for(var i = 0 ;i<solution_len;i++){
				if(vm.solutions[i].selected){
					var str_len = vm.solutions[i].s_dependency.length;
					var weak_len = vm.solutions[i].w_dependency.length;
					var opt_len = vm.solutions[i].o_dependency.length;
					var threat_len = vm.solutions[i].t_dependency.length;
					for(var j =0;j<str_len;j++){
					
						s_dep_set.add(vm.solutions[i].s_dependency[j]);
					}
					for(var j =0;j<weak_len ;j++){
						w_dep_set.add(vm.solutions[i].w_dependency[j]);
					}
					for(var j =0;j<opt_len ;j++){
						o_dep_set.add(vm.solutions[i].o_dependency[j]);
					}
					for(var j =0;j<threat_len ;j++){
						t_dep_set.add(vm.solutions[i].t_dependency[j]);
					}
				}
			}
			//console.log(s_dep_set);
			var len = vm.swot.strength.length;
			for(var i=0;i<len;i++){
				vm.swot.strength[i].relatedSolutionSelected = false;
				if(s_dep_set.has(vm.swot.strength[i].id)){
					vm.swot.strength[i].relatedSolutionSelected = true;
				}
			}
			len = vm.swot.weakness.length;
			for(var i=0;i<len;i++){
				vm.swot.weakness[i].relatedSolutionSelected = false;
				if(w_dep_set.has(vm.swot.weakness[i].id)){
					vm.swot.weakness[i].relatedSolutionSelected = true;
				}
			}
			len = vm.swot.opportunity.length;
			for(var i=0;i<len;i++){
				vm.swot.opportunity[i].relatedSolutionSelected = false;
				if(o_dep_set.has(vm.swot.opportunity[i].id)){
					vm.swot.opportunity[i].relatedSolutionSelected = true;
				}
			}
			len = vm.swot.threat.length;
			for(var i=0;i<len;i++){
				vm.swot.threat[i].relatedSolutionSelected = false;
				if(t_dep_set.has(vm.swot.threat[i].id)){
					vm.swot.threat[i].relatedSolutionSelected = true;
				}
			}
			
			
			/* change all of it to "false" before going through it. It should work too
			var solution_len = vm.solutions.length;
			var str_len = vm.swot.strength.length;
			var weak_len = vm.swot.strength.length;
			var opt_len = vm.swot.strength.length;
			var threat_len = vm.swot.strength.length;
			for(var i =0 ;i<solution_len;i++)//for each solution
			{
		//------------------ Str check-------------------------
				for(var j = 0;j<str_len;j++)//for each str dependency of solution[i]
				{
					var s_dependency = vm.solutions[i].s_dependency;
					var dstr_len = s_dependency.length;
					
					for(var k =0;k<dstr_len;k++)
					{
						if(vm.swot.strength[j].id==s_dependency[k]){
							vm.swot.strength[j].relatedSolutionSelected=vm.solutions[i].selected;
							break;
						}
					}
				}
		//------------------ weakness check-------------------------
				for(var j = 0;j<weak_len;j++)//for each weakness dependency of solution[i]
				{
					var w_dependency = vm.solutions[i].w_dependency;
					var dweak_len = w_dependency.length;
					
					for(var k =0;k<dweak_len;k++)
					{
						if(vm.swot.weakness[j].id==w_dependency[k]){
							vm.swot.weakness[j].relatedSolutionSelected=vm.solutions[i].selected;
							break;
						}
					}
				}		
		//------------------ opportunity check-------------------------
				for(var j = 0;j<opt_len;j++)//for each opportunity dependency of solution[i]
				{
					var o_dependency = vm.solutions[i].o_dependency;
					var dopt_len = o_dependency.length;
					
					for(var k =0;k<dopt_len;k++)
					{
						if(vm.swot.opportunity[j].id==o_dependency[k]){
							vm.swot.opportunity[j].relatedSolutionSelected=vm.solutions[i].selected;
							break;
						}
					}
				}
		//------------------ threat check-------------------------
				for(var j = 0;j<threat_len;j++)//for each threat dependency of solution[i]
				{
					var t_dependency = vm.solutions[i].t_dependency;
					var dthreat_len = t_dependency.length;
					
					for(var k =0;k<dthreat_len;k++)
					{
						if(vm.swot.threat[j].id==t_dependency[k]){
							vm.swot.threat[j].relatedSolutionSelected=vm.solutions[i].selected;
							break;
						}
					}
				}		
			}
			//console.log(vm.swot);*/
		}
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
		
		function openTOWSDialog(ev, task,type)
        {
           
			console.log("OpenTaskDialog: "+type);
			var template  = '';
			switch(type) {
				case 1:
					template = 'app/main/management/strategic/dialogs/tows/tows-so-dialog.html';
					break;
				case 2:
					template = 'app/main/management/strategic/dialogs/tows/tows-wo-dialog.html';
					break;
				case 3:
					template = 'app/main/management/strategic/dialogs/tows/tows-st-dialog.html';
					break;
				case 4:
					template = 'app/main/management/strategic/dialogs/tows/tows-wt-dialog.html';
					break;
				default:
					template = '';
			}
			
			$mdDialog.show({
                controller         : 'TowsDialogController',
                controllerAs       : 'vm',
                templateUrl        : template,
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    Task : task,
                    Tasks: vm.swot,
					Solutions: vm.solutions,
                    event: ev,
					newSolution: true
                }
            });
        }
		
		function deleteSolutions(type){
			var len = vm.solutions.length;
			for(var i = 0;i<len;i++){
				if(vm.solutions[i].selected&&vm.solutions[i].type == type){
					vm.solutions.splice(i,1);
					len--;
					i--;
				}
			}
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