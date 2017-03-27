import imgOne from '../assets/1.jpg';
import imgTwo from '../assets/2.jpg';
import $ from 'jquery';

const body = $('body');

const displayImageOne = () => {
    const one = $('<img></img>', src = imgOne);
    one.appendTo(body);
}
const displayImageTwo = () => {
    const two = $('<img></img>', src = imgTwo);
    two.appendTo(body);
}

module.exports = {
    displayImageOne,
    displayImageTwo
}