interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Albania'
};
const student2: Student = {
    firstName: 'Bob',
    lastName: 'Builder',
    age: 54,
    location: 'USA'
};

const studentList: Student[] = [student1, student2];

const tb = document.createElement('table');

studentList.forEach((student) => {
    const row = document.createElement('tr');

    const fnCell = document.createElement('td');
    fnCell.textContent = student.firstName;
    row.appendChild(fnCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tb.appendChild(row);
})

document.body.appendChild(tb);