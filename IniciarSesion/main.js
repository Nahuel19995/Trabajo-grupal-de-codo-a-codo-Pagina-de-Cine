document.getElementsByClassName("formulario").addEvenListener("submit", function(event){
    event.preventDefault();
    if (validar(this)){
        this.submit()
    }
})

function limpiarError(){
    document.getElementById("errorUsuario").innerHTML = "";
}

function validar(formulario){

    limpiarError();

    //USUARIO

    if(formulario.usuario.value.length == 0){
        document.getElementById("errorUsuario").innerText = "*Completar campo";
        formulario.usuario.focus();
        return false
    }

    if(formulario.usuario.value.length < 3){
        document.getElementById("errorUsuario").innerText = "*El nombre del ususario debe ser de mínimo 4 caracteres";
        formulario.usuario.focus();
        return false
    }

    if(formulario.usuario.value === formulario.usuario.value.toLowerCase()){
        document.getElementById("errorUsuario").innerText = "*El nombre del ususario debe tener mínimo una mayúscula";
        formulario.usuario.focus();
        return false
    }

    //CONTRASEÑA

    if(formulario.contraseña.value.trim().length == 0){
        document.getElementById("errorContraseña").innerText = "*Completar campo";
        formulario.contraseña.focus();
        return false
    }

    if(formulario.contraseña.value.trim().length < 8){
        document.getElementById("errorContraseña").innerText = "*La contraseña debe ser de mínimo 8 caracteres";
        formulario.contraseña.focus();
        return false
    }

    if(formulario.contraseña.value === formulario.contraseña.value.toLowerCase()){
        document.getElementById("errorContraseña").innerText = "*La contraseña debe tener mínimo una mayúscula";
        formulario.contraseña.focus();
        return false
    }
} 