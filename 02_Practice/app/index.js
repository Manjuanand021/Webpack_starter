// import { displayImageOne, displayImageTwo } from './imageDisplay';
import { displayButton } from './button';
import './hot';
import { sayGoodMorning } from './tree-shaking';

console.log('I am index file.');
console.log('Imlemented cache bursting');

let sayHello = require('./message.js');
sayHello();
//Some error while compressing and loading images.commented for time being
// displayImageOne();
// displayImageTwo();
displayButton();

//Tree-shaking only included sayGoodMorning method implementation in final bundle
//and removes sayGoodEvening from finel bundle.js file
sayGoodMorning();


//For HMR - Hot module replacement
if (module.hot) {
    module.hot.accept('./hot');
}