function savetoLocalstorage(event) {

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
    localStorage.setItem(myObj.email, JSON.stringify(myObj))
    saveNewUserOnScreen(myObj)

    document.getElementById('name').value = ""
    document.getElementById('emailID').value =""
    document.getElementById('phone').value = ""
    
}

function saveNewUserOnScreen(user) {
    
    



    const d = document.getElementById('listOfUsers');
    const li = `<li id=${user.email}>  ${user.name} - ${user.email} - ${user.phone} - ${user.date} - ${user.time} 
                      <button onclick=deleteUser('${user.email}')>Delete </button>
                      <button onclick="editUser('${user.email}','${user.name}','${user.phone}')"> Edit </button> 
                  </li>`

    d.innerHTML = d.innerHTML + li;

}




function editUser(emailId, name, phone) {
    // console.log(emailId, name, phone)
    document.getElementById('emailID').value = emailId;
    document.getElementById('name').value = name;
    document.getElementById('phone').value = phone;
    deleteUser(emailId)
}


function deleteUser(emailId) {
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId)

}

function removeUserFromScreen(emailID) {
    let parentNode = document.getElementById('listOfUsers');
    let childNodeToBeDeleted = document.getElementById(emailID);
    if (childNodeToBeDeleted) {

        parentNode.removeChild(childNodeToBeDeleted);
    }

}



























