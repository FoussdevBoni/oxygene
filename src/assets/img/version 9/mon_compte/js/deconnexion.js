
function  logOut(){

    if (confirm('Voulez-vous vous deconnecter ? ').valueOf()==false) {
        console.log('Je confirme pas')
    }else{
        console.log('Je confirme ')
        window.open('../index.php')
        localStorage.removeItem('userCreated');
        localStorage.clear();
    }
    }
    
    