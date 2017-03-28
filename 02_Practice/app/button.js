import $ from 'jquery';

module.exports = {
    displayButton: () => {
        console.log('I am in button.js file');
        let body = $('body');
        const button = $('<button></button>', { text: 'Dont click me.' });
        button.click(() => {
            System.import('./some-file');
        });
        button.appendTo(body);
    }
}