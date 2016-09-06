(function ()
{
    'use strict';

    angular
        .module('app.management')
        .controller('TowsDialogController', TowsDialogController);

  var solution = {
		text: "",
		s_dependency: [],
		w_dependency: [],
		o_dependency: [],
		t_dependency:[],
		selected: false,
		type: 0,  //1 = SO, 2 = WO, 3 = ST, 4 = WT, 5 = Cooperate
		clear: function(){
			this.text = "";
			this.selected = false;
			this.s_dependency = [];
			this.w_dependency = [];
			this.o_dependency = [];
			this.t_dependency = [];
		
		},
		toggleSelected: function(){
			this.selected = !this.selected;
			//console.log(this);
		},
		toggle: function (id,type){
				//console.log("toggle");
			if(type.localeCompare('s')==0){
				var index = this.s_dependency.indexOf(id);
				//console.log("Strength dependency");
				
				if(index<0){
					this.s_dependency.push(id);
				}else{
					this.s_dependency.splice(index,1);
				}
				//console.log(this.s_dependency);
				
			}else if(type.localeCompare('w')==0){
				index = this.w_dependency.indexOf(id);
				
				if(index<0){
					this.w_dependency.push(id);
				}else{
					this.w_dependency.splice(index,1);
				}
			}else if(type.localeCompare('o')==0){
				index = this.o_dependency.indexOf(id);
				//console.log("Opportunity dependency");
				if(index<0){
					this.o_dependency.push(id);
				}else{
					this.o_dependency.splice(index);
				}
				//console.log(this.o_dependency);
			}else if(type.localeCompare('t')==0){
				index = this.t_dependency.indexOf(id);
				if(index<0){
					this.t_dependency.push(id);
				}else{
					this.t_dependency.splice(index);
				}
			}
		},
		
	};	
	/** @ngInject */
    function TowsDialogController($mdDialog, Task, Tasks, Solutions, event, newSolution)
    {
        var vm = this;

        // Data
        vm.title = 'New Solution';
       // vm.swot = angular.copy(Task);
        vm.swot = Tasks;
        vm.newSolution = newSolution;
		//vm.solution = angular.copy(solution);
		vm.towsolutions = Solutions;
		vm.solution = solution;

        

        // Methods
        vm.addNewSolution = addNewSolution;
        vm.saveTask = saveTask;
        vm.deleteTask = deleteTask;
        vm.newTag = newTag;
        vm.closeDialog = closeDialog;
		

        //////////

        /**
         * Add new task
         */
        function clone(obj) {
			if (null == obj || "object" != typeof obj) return obj;
			var copy = obj.constructor();
			for (var attr in obj) {
				if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
			}
			return copy;
}
		function addNewSolution(type)
        {
           
			vm.solution.type = type;
			var obj = clone(vm.solution);
			vm.towsolutions.unshift(obj);
			vm.solution.clear();
			console.log("Solution added");
            closeDialog();
        }

        /**
         * Save task
         */
        function saveTask()
        {
            // Dummy save action
            for ( var i = 0; i < vm.tasks.length; i++ )
            {
                if ( vm.tasks[i].id === vm.task.id )
                {
                    vm.tasks[i] = angular.copy(vm.task);
                    break;
                }
            }

            closeDialog();
        }

        /**
         * Delete task
         */
        function deleteTask()
        {
            var confirm = $mdDialog.confirm()
                .title('Are you sure?')
                .content('The Task will be deleted.')
                .ariaLabel('Delete Task')
                .ok('Delete')
                .cancel('Cancel')
                .targetEvent(event);

            $mdDialog.show(confirm).then(function ()
            {
                // Dummy delete action
                for ( var i = 0; i < vm.tasks.length; i++ )
                {
                    if ( vm.tasks[i].id === vm.task.id )
                    {
                        vm.tasks[i].deleted = true;
                        break;
                    }
                }
            }, function ()
            {
                // Cancel Action
            });
        }


        /**
         * New tag
         *
         * @param chip
         * @returns {{label: *, color: string}}
         */
        function newTag(chip)
        {
            var tagColors = ['#388E3C', '#F44336', '#FF9800', '#0091EA', '#9C27B0'];

            return {
                name : chip,
                label: chip,
                color: tagColors[Math.floor(Math.random() * (tagColors.length))]
            };
        }

        /**
         * Close dialog
         */
        function closeDialog()
        {
            $mdDialog.hide();
        }
    }
})();