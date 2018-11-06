import Route from '@ember/routing/route';


export default Route.extend({

    model(){
     return this.store.findAll('task');
    },
    actions:{
        toggleDone(task){
            if(this.get('controller').get('task')){
                task.get('isdone') ? task.set('isdone', false) : task.set('isdone',true);
                task.save();
            }
        },
        addTask() {
            if (this.get('controller').get('task')) {
                this.get('store').createRecord("task", {
                    id:Date.now(),
                    title: this.get('controller').get('task'),
                    isdone: false
                });
            }
            this.set('task', "");
        },
         deleteTodo(task) {
            task.destroyRecord();
        }
}});

