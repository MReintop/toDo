import Component from '@ember/component';

export default Component.extend({
    isDone:false,
    actions:{
        toggleDone(){
            this.toggleProperty('isDone');
        },
        model(){

    }
    }
});
