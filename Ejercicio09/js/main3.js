let titulo = document.querySelector("title")
console.log(titulo.textContent)


//Captura los nombres del primer integrante
let nombres1 = document.getElementsByClassName("nombre-primer-integrante")
//Captura los apellidos del primer integrante
let apellidos1 = document.getElementsByClassName("apellido-primer-integrante")

//Captura los nombres del segundo integrante
let nombres2 = document.getElementsByClassName("nombre-segundo-integrante")
//Captura los apellidos del segundo integrante
let apellidos2 = document.getElementsByClassName("apellido-segundo-integrante")


//Formateo de los nombres del primer integrante
let nameIntegrante1=formatearNombre(nombres1,1)
//Formateo de los apellidos del primer integrante
let apellidoIntegrante1=formatearApellido(apellidos1)

//Formateo de los nombres del segundo integrante
let nameIntegrante2=formatearNombre(nombres2,2)
//Formateo de los apellidos del primer integrante
let apellidoIntegrante2=formatearApellido(apellidos2)


//Formateo unificado del nombre y apellido de un integrante
let fullName1 = formatearFullName(nameIntegrante1,apellidoIntegrante1)
//Formateo unificado del nombre y apellido de un integrante
let fullName2 = formatearFullName(nameIntegrante2,apellidoIntegrante2)


//Formateo final de los nombres de los dos integrantes
let listaIntegrantes=formatearIntegrantes(fullName1,fullName2)

//Muestra por consola los nombres completos de los dos integrantes en el formato solicitado
console.log(listaIntegrantes)



//Funcion que formatea el/los nombre/s de un integrante, recibe el/los nombre/s completo y el numero de integrante
function formatearNombre(names,integrante){
    let formateado='Integrante '+integrante+': "'
    for(let i=0; i<names.length;i++){
        if(i==names.length-1){
            formateado += names[i].textContent
        }else
            formateado += names[i].textContent + " "
    }
    return formateado
}

//Funcion que formatea los apellidos de un integrante, recibe el/los apellidos
function formatearApellido(lastnames){
    let formateado=""
    for(let i=0; i<lastnames.length;i++){
        if(i==lastnames.length-1){
            formateado += lastnames[i].textContent.toUpperCase()+'"'
        }else
            formateado += lastnames[i].textContent.toUpperCase() + " "
    }
    return formateado
}

//Funcion que formatea/unifica el nombre/s y apellido/s de un integrante
function formatearFullName(nombres,apellidos){
    return nombres+" "+apellidos
}

//Funcion que formatea los nombres completos de los 2 integrantes, recibe a los dos integrantes previamente formateados
function formatearIntegrantes(nya1, nya2){
    let linea="-----"
    let integrantes=linea+"\n"+nya1+"\n"+nya2+"\n"+linea
    return integrantes
}