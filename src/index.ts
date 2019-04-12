import * as _ from 'lodash';

function message() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'World', '!!'], ' ');

    return element;
}

document.body.appendChild(message());