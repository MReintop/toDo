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

            if (this.get('controller').get('task')) {
                this.get('store').createRecord("task", {
                    id:Date.now(),
                    title: this.get('controller').get('task'),
                    isdone: false
                });
            }
            this.get('controller').set('task', "");

        },
         deleteTodo(task) {
            task.destroyRecord();
        }
}});

