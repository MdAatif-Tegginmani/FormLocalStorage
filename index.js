const url = "https://crudcrud.com/api/0c094035f6ac4083ba4d0eb75afbff1c/data"

async function savetoLocalstorage(event) {

    event.preventDefault();
    console.log(event)
    const name = document.getElementById('name').value
    const email = document.getElementById('emailID').value
    const phone = document.getElementById('phone').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value


    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phone', phone);
    // localStorage.setItem('Date', date);
    // localStorage.setItem('time', time);


    let myObj = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time
    }
    // localStorage.setItem(myObj.email, JSON.stringify(myObj))
    const data = await axios.post(url , myObj)
    console.log(data);
    saveNewUserOnScreen(myObj)

    document.getElementById('name').value = ""
    document.getElementById('emailID').value =""
    document.getElementById('phone').value = ""
    
}

// function saveNewUserOnScreen(user) {

    
    
    



//     // const d = document.getElementById('listOfUsers');
//     // const li = `<li id=${user.email}>  ${user.name} - ${user.email} - ${user.phone} - ${user.date} - ${user.time} 
//     //                   <button onclick=deleteUser('${user.email}')>Delete </button>
//     //                   <button onclick="editUser('${user.email}','${user.name}','${user.phone}')"> Edit </button> 
//     //               </li>`

//     d.innerHTML = d.innerHTML + li;

// }




function editUser(emailId, name, Id, phone) {
    // console.log(emailId, name, phone)
    document.getElementById('emailID').value = emailId;
    document.getElementById('name').value = name;
    document.getElementById('phone').value = phone;
    deleteUser(Id)
}


async function deleteUser(Id) {
    try{

        const deleteToday =await axios.delete(`${url}/${Id}`)
        removeUserFromScreen(Id)
    }
    catch(error){
        console.log(error)
    }

}

function removeUserFromScreen(emailID) {
    let parentNode = document.getElementById('listOfUsers');
    let childNodeToBeDeleted = document.getElementById(emailID);
    if (childNodeToBeDeleted) {

        parentNode.removeChild(childNodeToBeDeleted);
    }

}


window.addEventListener(`DOMContentLoaded` , async () => {
    try {
        const response = await axios.get(url)
        console.log(response.data)
        const d = document.getElementById('listOfUsers');
        let li =""

        for(let i=0 ; i<response.data.length;i++){
             li += `<li id=${response.data[i]._id}>  ${response.data[i].name} - ${response.data[i].email} - ${response.data[i].phone} - ${response.data[i].date} - ${response.data[i].time} 
            <button onclick=deleteUser('${response.data[i]._id}')>Delete </button>
            <button onclick="editUser('${response.data[i].email}','${response.data[i].name}','${response.data[i]._Id}','${response.data[i].phone} ' )"> Edit </button> 
            </li>`
            
        }
            
        d.innerHTML = d.innerHTML + li;
    }
    catch(error){
        console.log(error)
    }
    
}  )

























