function savetoLocalstorage(event){
                
    event.preventDefault();
    console.log(event)
    const  name = document.getElementById('name').value
    const email = document.getElementById('emailID').value
    const phone = document.getElementById('phone').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('Date', date);
    localStorage.setItem('time', time);
    }













