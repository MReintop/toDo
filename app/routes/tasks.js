import Route from '@ember/routing/route';


export default Route.extend({

    model(){
        return this.store.findAll('task');
    },
    actions:{
        toggleDone(task){
            task.toggleProperty('isdone');
        },
        addTask() {
            this.get('store').createRecord("task", {
                id:Date.now(),
                title: this.get('controller').get('task'),
                isdone: false
            });
        },
         deleteTodo(task) {
            task.destroyRecord();
        }
}});

