import Route from '@ember/routing/route';


export default Route.extend({

    model(){

     return this.store.findAll('task');


    },
    actions:{
        toggleDone(taskid){
            this.store.findRecord('task', taskid).then(function(task) {
            task.get('isdone');
                if(task.get('isdone')){
                    task.set('isdone', false);
                }else{
                    task.set('isdone',true);
                }

        task.save();
            });
        },
        addTask: function(){
            var task = this.get('controller').get('task');
            console.log(task);
            let object1={
              id:task,
                title:task,
                isdone:false
            };
            console.log(object1.title);

         //THIS IS WHERE IT GOES WRONG
            this.store.createRecord('task',object1);


        }

}});

