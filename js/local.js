function checkOpenedOnce(){
    return localStorage.getItem('openedOnce');
}    

function saveLocal(){
    localStorage.setItem('openedOnce', true);
}
