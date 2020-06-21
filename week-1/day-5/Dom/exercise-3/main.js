const validateForm = () => {
    const container = document.getElementById('form');
    const errorParaId = document.getElementById('error');
    container.removeChild(errorParaId)
    
    const name = document.getElementById('name');
    const salary = document.getElementById('salary');
    const birthday = document.getElementById('birthday');
    const phone = document.getElementById('phone');

    const errorPara = document.createElement('p')
    errorPara.setAttribute('id', 'error');
    
    if (name.value.length < 3) {
        errorPara.innerHTML = 'name more than 2 characters';
        container.appendChild(errorPara);
    }
    else if (Number(salary.value) < 10000 || Number(salary.value) > 16000)  {
        errorPara.innerHTML = 'salary must be between 10,000 and 16,000';
        container.appendChild(errorPara);
    }
    else if (phone.value.length < 10) {
        errorPara.innerHTML = 'phone must be atleast 10 digits long';
        container.appendChild(errorPara);
    }
    else {
        container.style.display = 'none';
        errorPara.id = 'welcomeMsg';
        errorPara.innerHTML = `Welcome ${name.value}`
        document.body.appendChild(errorPara);
    }
}

document.getElementById('btn').addEventListener('click', validateForm);