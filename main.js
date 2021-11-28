'use strict'
window.addEventListener('load',function()
{
    const form=document.querySelector('#new-task-form');
    const input=document.querySelector('#new-task-input');
    const list_el=document.querySelector('#tasks');

    form.addEventListener('submit',function(e){
        e.preventDefault();
        const task=input.value;
        if(!task){
            //alert('Please enter a task');
            return 
        }
        //task div
        const task_el=document.createElement('div');
        task_el.classList.add('task');
        //content div
        const task_content=document.createElement('div')
        task_content.classList.add('content');
        task_el.appendChild(task_content);
        //input
        const taskInput=document.createElement('input')
        taskInput.value=task;
        taskInput.setAttribute('readonly','readonly')
        taskInput.classList.add('text')
        task_content.appendChild(taskInput)
        //actions div
        const tskActions=document.createElement('div')
        tskActions.classList.add('action')
        task_el.appendChild(tskActions)
        //edit button
        const editBtn=document.createElement('button')
        editBtn.classList.add('edit')
        editBtn.innerHTML='Edit'
        tskActions.appendChild(editBtn)
        //delete btn
        const deleteBtn=document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML='Delete'
        tskActions.appendChild(deleteBtn)
        //
        list_el.appendChild(task_el)
        //remove input after adding
        input.value='';
        //delete task
        deleteBtn.addEventListener('click',function(e){
            e.preventDefault();
            list_el.removeChild(task_el)
        })
        //edit task
        editBtn.addEventListener('click',function(e){
            e.preventDefault();
            if(taskInput.readOnly===true){
                taskInput.removeAttribute('readonly');
                taskInput.focus();
                editBtn.innerText='Save'
            }
            else{
                taskInput.setAttribute('readonly','readonly')
                editBtn.innerText='Edit'
            }
        })
    })
})
