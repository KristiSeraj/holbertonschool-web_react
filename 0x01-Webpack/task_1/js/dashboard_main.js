import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append(`<p id='count'></p>`);
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

$('button').on('click', function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
})


