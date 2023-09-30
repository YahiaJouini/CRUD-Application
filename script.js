const username =document.getElementById('name');
const age =document.getElementById('age');
const adress =document.getElementById('adress');
const email =document.getElementById('email');
const Alldata=[username,age,adress,email];
const tbody=document.querySelector('tbody');
const addBtn=document.querySelector('.add');


addBtn.addEventListener('click',addData)


function addData(){
    if(verifierInputs()){
    let tr=document.createElement('tr');
    for(i=0;i<4;i++){
        let td=document.createElement("td");
        td.appendChild(document.createTextNode(Alldata[i].value));
        tr.appendChild(td);
    }

    let deleteBtn=document.createElement('button')
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.classList.add('action','delete');


    let editBtn=document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.classList.add('action','edit');

    let td=document.createElement("td");
    td.style.width="300px";
    td.appendChild(deleteBtn);
    td.appendChild(editBtn);

    tr.appendChild(td);
    tbody.appendChild(tr)
    clearInputs()    
    tr.addEventListener('click',actions)}
    else {
        alert('Please fill out all required fields.')
    }
}


function actions(e){
    let clk=e.target;
    const btnZone=document.querySelector('.btn');


    if(clk.classList.contains('delete')){
        clk.parentElement.parentElement.remove()
        if(btnZone.children[0].classList.contains('update')){
            clearInputs()
            btnZone.children[0].remove();
            btnZone.appendChild(addBtn);
        }
    }else if(clk.classList.contains('edit')){
        let tr=Array.from(clk.parentElement.parentElement.children);
        fillInputs(tr)

        
        let updateBtn=document.createElement('button');
        updateBtn.appendChild(document.createTextNode('Update'));
        updateBtn.classList.add('update');

        if(!btnZone.children[0].classList.contains('update')){
            addBtn.remove();
            btnZone.appendChild(updateBtn);
        }
        updateBtn.addEventListener('click',()=>{
            for(i=0;i<tr.length-1;i++){
                tr[i].innerText=Alldata[i].value;
            };
            clearInputs()
            btnZone.children[0].remove();
            btnZone.appendChild(addBtn);
        });
    }
}

/* clearing the input zones */
function clearInputs(){
    for(i=0;i<Alldata.length;i++){
        Alldata[i].value=null
    }
}


/* filling the input zones with selected data */
function fillInputs(tr){
    for(i=0;i<tr.length-1;i++){
        Alldata[i].value=tr[i].textContent;
    }
}


/* verify the inputs */

function verifierInputs(){
    return (username.value!="" && age.value!="" && adress.value!="" && email.value!="")
}
