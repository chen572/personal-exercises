const checkIfReserved = () => {
    
    const reservations = {
        bob: { claimed: false },
        ted: { claimed: true }
    }
    
    const name = document.getElementById('name').value;
    
    if (reservations[name.toLowerCase()]) {
        if (!reservations[name.toLowerCase()].claimed) {
            document.getElementById('para').innerHTML = `Welcome ${name}`;
        }
        else {
            document.getElementById('para').innerHTML = `Im sorry ${name} but it seems that someone claimed the reservation already`;
        }
    }
    
    else {
        reservations[name.toLowerCase()] = { claimed: true };
        document.getElementById('para').innerHTML = `Welcome ${name}`;
    }

}


document.getElementById('btn').addEventListener('click', checkIfReserved);