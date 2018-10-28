import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list tasks', function(hooks) {
  setupApplicationTest(hooks);


     test('should show tasks as homepage', async function(assert){
        await visit('/');
        assert.equal(currentURL(),'/tasks','Should redirect automatically');
     });

    test('should talk about this app', async function(assert){
        await visit('/');
        await click(".task-to-about");
        assert.equal(currentURL(),'/about','Link to about should work.');
    })
        /*
     test('should show all tasks', async function(assert){

     });

      test('should filter tasks by isDOne', async function(assert){

     });

    */


});
