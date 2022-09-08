var CourseApi = "http://localhost:3000/course";



function start () {
    getCourse(renderCourses);
    handleCreateForm();
}

start();

//Function

function getCourse (callback) {
    fetch(CourseApi)
        .then((response) => response.json())
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }
    fetch(CourseApi, options)
        .then((response) => response.json())
        .then(callback)
}

function handledeleteCource(id) {
    var options = {
        method: "DELETE",
        headers: {'Content-Type':'application/json'},
       
    }
    fetch(CourseApi + '/' + id, options)
        .then((response) => response.json())
        .then( function () {
           var courseItem = document.querySelector(".course-item-"+id);
           if (courseItem) {
                courseItem.remove();
           }
        })
}


function handleUpdateCource(id, data, callback) {
    var options = {
        method: "PUT",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
       
    }
    fetch(CourseApi + '/' + id, options)
        .then((response) => response.json())
        .then( function () {
            getCourse(renderCourses);
        })
}


function renderCourses(courses) {
    var listCourseBlock = document.querySelector("#list-course");
    var html = courses.map(course => (
        `
            <li class = "course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick = "handledeleteCource(${course.id})">Xóa</button>
                <button onclick = "handleEditCource(${course.id})">Sửa</button>
            </li>
        `
    ));
    listCourseBlock.innerHTML = html.join("");
}

function handleCreateForm () {
    var createBtn = document.querySelector("#create");
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        
        var formData = {
            name: name,
            description: description
        }
        createCourse(formData, () => getCourse(renderCourses));
    }
}



function handleEditCource(id) {
    var nameOfCourse = document.querySelector(".course-item-"+id +' h4').innerText;
    var descriptionOfCourse = document.querySelector(".course-item-"+id + ' p').innerText;

    document.querySelector('input[name="name"]').value = nameOfCourse;
    document.querySelector('input[name="description"]').value = descriptionOfCourse;

    

    var editBtn = document.querySelector("#edit");
    editBtn.onclick = () => {

        var newName = document.querySelector('input[name="name"]').value;
        var newDescription = document.querySelector('input[name="description"]').value;
        var data = {
            name: newName,
            description: newDescription
        }
        handleUpdateCource(id,data)
    }
}



