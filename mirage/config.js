import Mirage from 'ember-cli-mirage';

export default function() {
    this.namespace="/api";
    //TASK LIST
    let tasks=[{
                type:'tasks',
                id:'clean-your-room',
                attributes:{
                    title:'Clean your room.'
                }},
                 {
                type:'tasks',
                id:'clean-everything',
                attributes:{
                    title:'Clean Everything.'
                }}];

    //GET PÄRING
    this.get("/tasks",function(db, request){
        return{
            data:tasks
        };
    });

    this.post("/tasks",function(db,request){
         var params = JSON.parse(request.requestBody).message;
         console.log("BAAS");


      db.tasks.insert(params);

    });






  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
