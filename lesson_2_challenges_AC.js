// Exercise 1
// Create and manipulate shopping list array
var shopping_list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
shopping_list.push('fruit loops');
var coff_index = shopping_list.indexOf('coffee');
shopping_list.splice(coff_index, 1, 'fair trade coffee');
var chips_index = shopping_list.indexOf('chips');
shopping_list.splice(chips_index, 2, 'rice', 'beans');
// Move items to cart
var cart = [];
var last_item = shopping_list.pop();
cart.push(last_item);
var first_item = shopping_list.shift();
cart.push(first_item);

while (shopping_list != 0) {
  var item = shopping_list.pop(0);
  cart.push(item);
}
// Sort reverse alphabetically
cart.sort();
cart.reverse();
// Print to console
console.log(cart.toString());

//Exercise 2
var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};
// Get certain variables
course.name;
course.teachers[1];
course.students[0];
course.students[1].computer.type;
course.preReqs.equipment;
course.preReqs.equipment.OSOptions[1];
course.preReqs.equipment.OSOptions.join(' or ');
// Array of students using OSX
var osx_students = [];
var i;
for (i = 0; i < course.students.length; i++){
    var os = course.students[i].computer.OS;
    if (os == 'OSX'){
      osx_students.push(course.students[i].name);
    }
}
console.log(osx_students);
