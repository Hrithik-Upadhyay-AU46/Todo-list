window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const list_el = document.querySelector('#tasks')
    const dltAll = document.querySelector('#delAll')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const task = input.value;
        if(!task){
            alert('please fill task ')
            return
        }
        else{
            console.log(task)
          const task_el = document.createElement('div')
          task_el.classList.add('task')

          const task_content_el= document.createElement('div')
          task_content_el.classList.add('content')
          
          
          task_el.appendChild(task_content_el)
          

          const task_input_el= document.createElement("input")
          task_input_el.type="text"
          task_input_el.value=task
          task_input_el.classList.add("text")
          task_input_el.setAttribute('readonly','readonly')

          task_content_el.appendChild(task_input_el)

          const btnsdiv = document.createElement('div')
           btnsdiv.classList.add('action')

           const done =document.createElement('button')
           done.innerText='DONE'
           done.classList.add('checked')
         
        const edit = document.createElement('button')
        edit.classList.add('edit')
        edit.innerText="EDIT"

        const dlt = document.createElement('button')
        dlt.classList.add('delete')
        dlt.innerText="DELETE"

        btnsdiv.appendChild(edit)
        btnsdiv.appendChild(done)
        btnsdiv.appendChild(dlt)
        task_el.appendChild(btnsdiv)
        

          list_el.appendChild(task_el)

          input.value=""

          edit.addEventListener('click',()=>{
           if(edit.innerText == "EDIT"){
            task_input_el.removeAttribute('readonly')
            task_input_el.focus()
            edit.innerText='SAVE'
           }
           else{
            task_input_el.setAttribute('readonly','readonly')
            edit.innerText='EDIT'
          }

          })

          dlt.addEventListener('click',()=>{
            list_el.removeChild(task_el)
          })
          dltAll.addEventListener('click',()=>{
            list_el.removeAllChildNodes(task_el)
            console.log('kar le kar lr')
            
          })

          done.addEventListener('click',()=>{
            task_input_el.style.textDecoration="line-through"
            task_input_el.style.color="greenyellow"
            btnsdiv.removeChild(edit)
            btnsdiv.removeChild(done)

          })
        
        }
    })
})