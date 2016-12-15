(function(){
    angular
        .module("dogFacts")
        .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics', 'DataService'];

    function ListController(quizMetrics, DataService){
        var vm = this;

        vm.quizMetrics = quizMetrics; 
        vm.data = DataService.dogsData; 
        vm.activedog = {}; 
        vm.changeActivedog = changeActivedog; 
        vm.activateQuiz = activateQuiz; 
        vm.search = ""; 


        function changeActivedog(index){
            vm.activedog = index;
        }



        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }

    }
})();