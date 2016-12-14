(function(){



    /*

     * attaching results controller function to the dogFacts module 

     */

    angular

        .module("dogFacts")

        .controller("resultsCtrl", ResultsController);



    /*

     * injecting the custom service quizMetrics into the results controller 

     * using the $inject method.

     *

     * Injecting dependencies like this is done so as to avoid issues when 

     * uglifying the code. Function arguments will get shortened during the 

     * uglify process but strings will not. Therefore by injecting the argument

     * as strings in an array using the $inject method we can be sure angular 

     * still knows what we want to do.

     */

    ResultsController.$inject = ['quizMetrics','DataService'];



    /*

     * definition of the results controller function itself. Taking 

     * quizMetrics as an argument

     */

    function ResultsController(quizMetrics,DataService){

        var vm = this;



        /*

         * The pattern used in the controllers in this app puts all the 

         * properties and methods available to the view at the top of the 

         * function. Any methods are referenced as named functions which are 

         * defined at the bottom.

         *

         * This allows the interface of the controller to be seen at a glance. 

         * Which is not usually the case when defining methods as anon 

         * functions inline.

         */

        vm.quizMetrics = quizMetrics; // binding the object from factory to vm 
        vm.DataService = DataService;
        vm.getAnswerClass=getAnswerClass;
        vm.setActiveQuestion = setActiveQuestion;
        vm.reset = reset;
        vm.calculatePerc = calculatePerc;
        vm.activeQuestion =  0;

        function calculatePerc(){
            return (quizMetrics.numCorrect / DataService.quizQuestions.length) * 100;
        }
        
        function setActiveQuestion(index){
            vm.activeQuestion = index;

        }

        function getAnswerClass(index){
             if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
                 return "bg-success";
             }else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
                 return "bg-danger";
             }
        }

        function reset(){
            quizMetrics.changeState("results",false);
            quizMetrics.numCorrect = 0;

            for(var i=0;i<DataService.quizQuestions.length;i++){
                var data = DataService.quizQuestions[i];

                data.selected = null;
                data.correct = null;
            }
        }
    }


})();