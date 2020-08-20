function saveData() {
    var name = document.getElementById('name');
    var rollno = document.getElementById('rollno');

    //---------- Firebase generate key--------- //
    var key = firebase.database().ref('Student').push().key;

    // var student = {
    //     key: key,
    //     name: name.value,
    //     roll: rollno.value
    // }


    var student1 = {
        key: key,
        name: name.value,
        roll: rollno.value
    }

    var student2 = {
        key: key,
        name: name.value,
        roll: rollno.value
    }


    // --------- multiple objects------------- //
    var studentref = firebase.database().ref('Students/');
    studentref.push(student1);
    studentref.push(student2);


    // ----------write transactional data---------//
    // var ref = new firebase('https://fir-db-implementation.firebaseio.com/');
    // var updatename = ref.child('Students').child('MEMIY9cqGVQCXhRqF44').child('name');
    // updatename.transaction(function(name) {
    //     return name + " Ghani";
    // });


    //--------- manual key------------- //
    // var key = "key" + Math.round(Math.random() * 3214630);
    // firebase.database().ref('Students/' + key).set(student);



    //----------- save object in firebase------------//
    // firebase.database().ref('Student/').set(student);
    // console.log(student);

    //------------ save Student as property in firebase---------//
    // firebase.database().ref('Student').set("Ayesha");

    //---------- it will overwrite if we change input  save Student as property in firebase------------//
    // firebase.database().ref('Student/student1').set(student);

    //----------- push method will save individually and it generate a key for student--------------//
    // firebase.database().ref('Student').push(student);


    // firebase.database().ref('Student').child("student/Today").push(student);
}

function getfirebaseData() {

    //---------- getting using key--------//
    // firebase.database().ref('Students/-MEMIY9cqGVQCXhRqF44').once('value', function(data) {
    //     console.log(data.val());
    // });


    // ------get Real Time Data-------//
    firebase.database().ref('Students/-MEMIY9cqGVQCXhRqF44').on('child_added', function(data) {
        console.log(data.val());
    });


    // ----------once will return all data-------//
    // firebase.database().ref('Students').once('value', function(data) {
    //     console.log(data.val());
    // });


}

getfirebaseData();