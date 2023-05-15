let user_input_el = document.querySelector('#user_input');
let todo_add_btn = document.querySelector('#todo_action_add');
let list_container = document.querySelector('.list');

let modal = document.querySelector('.modal');
let close_model_btn = document.querySelector('.close_model');
let edit_value = document.querySelector('#edit_value');
let save_btn = document.querySelector('#save');

let todos = [];
let model_open = false;
let edit_data = {};

let show_todo = (todos) => {
    let html = '';

    todos.map((element, index) => {
        html += `<div class="list_item">
            <span style="font-weight: bold;" id="todo_text">${index + 1}: ${element.text}</span>
            <div class="action_container">
                <button data-action="edit" data-id="${element.id}">Edit</button>
                <button data-action="delete" data-id="${element.id}" style="color:${ element.deleted ? 'yellow' : 'red' }" >${ element.deleted ? 'Deleted' : 'Delete' }</button>
            </div>
        </div>`;
    });

    list_container.innerHTML = html;
}

let add_todo = () => {
    
    //get the value from user input
    let user_input = user_input_el.value;

    //store the input value
    let todo = {
        id: Math.round((Math.random()) * 100000000),
        text: user_input,
        deleted: false
    }

    todos.push(todo);

    console.log('todos : ', todos);
    show_todo(todos);
    user_input_el.value = '';
}

let close_modal = () => {
    model_open = false;
    modal.classList.remove('show');
}

todo_add_btn.addEventListener('click', add_todo);

let edit_todo = (todo_id) => {
    if(!todo_id) {
        alert('please select a todo to edit');
        return;
    }

    let todo_to_edit = todos.filter((todo) => {
        if(todo.id === parseInt(todo_id))
            return todo;
    })



    edit_data = {...todo_to_edit[0]};
    

    if(!model_open) {
        model_open = true;
        modal.classList.add('show');
    }
    edit_value.value = edit_data.text;
}

let decide_action = (event) => {
    event.stopPropagation();

    //find element
    let todo_id = event.target.getAttribute('data-id');
    let action = event.target.getAttribute('data-action');

    if(!todo_id || !action) return;

    if(action === 'edit') {
        edit_todo(todo_id);
    }

}

list_container.addEventListener('click', decide_action);

let save_edited_value = () => {
    todos.map((todo) => {
        if(todo.id === edit_data.id) {
            todo.text = edit_value.value;
        }
    });

    show_todo(todos);
    close_modal();

}

save_btn.addEventListener('click', save_edited_value);
close_model_btn.addEventListener('click', close_modal);