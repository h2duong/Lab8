/**
 * @jest-environment jsdom
 */

 import {pushToHistory} from '../scripts/router.js';

 // test if the length of the history stack and the current stack object is currect
 describe('test pushToHistory', () => {

    test('test home', () => {
        let h = pushToHistory('home', 0);
        let length = h.length;
        let state = h.state.page;

        expect(length).toBe(history.length);
        expect(state).toBe(undefined);
    });

    test('test entry', () => {
        let h = pushToHistory('entry', 10);
        let length = h.length;
        let state = h.state.page;

        expect(length).toBe(history.length);
        expect(state).toBe('entry10');
    });

     test('test settings', () => {
         let h = pushToHistory('settings', 0);
         let length = h.length;
         let state = h.state.page;

         expect(length).toBe(history.length);
         expect(state).toBe('settings');
     });


 });

