import Route from '@ember/routing/route';


export default Route.extend({
    model(){
        return this.store.findAll('task');
        //return server.loadFixtures();
    },
    actions:{
        addTask: function(){
            var task = this.get('controller').get('task');
            console.log(task);
            let object1={
              id:task,
                title:task
            };
            console.log(object1.title);
         //THIS IS WHERE IT GOES WRONG
            this.store.push({data:[object1]},'task');


        }
    }
});

