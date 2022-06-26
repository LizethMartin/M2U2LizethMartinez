numberA: Number;
numberB: Number;
numberC: Number;
numberD: Number;
numeros = [];
numeroMenor: Number;
numeroMayor: Number;

//Metodo para obtener números ingresados por el usuario   
function addNumeros() {
    //Asignación de variables números tomando datos del formulario
    this.numberA = $("#numberA").val();
    this.numberB = $("#numberB").val();
    this.numberC = $("#numberC").val();
    this.numberD = $("#numberD").val();

    //Limpiar el arreglo en caso de usar por segunda vez
    this.numeros = [];

    //Validación para que no se repita el número ingresado
    if (this.numberA == this.numberB || this.numberA == this.numberC || this.numberA == this.numberD || this.numberB == this.numberC || this.numberB == this.numberD || this.numberC == this.numberD) {
        //Alert con diseño
        Swal.fire({
            title: 'Se encuentran números repetidos',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    } else {
        //Operación para agregar los números ingresados por el usuario al arreglo
        this.numeros.push(this.numberA, this.numberB, this.numberC, this.numberD);
        //Operación para obtener el número menor del arreglo
        this.numeroMenor = Math.min(...this.numeros);
        //Operación para obtener el número mayor del arreglo
        this.numeroMayor = Math.max(...this.numeros);
        //console.log("Nada repetido", this.numeros, this.numeroMayor, this.numeroMenor)
        this.resultados();
    }
}

function resultados() {
    //Limpieza del campo factura donde se muestran los resultados (html)
    $("#factura").empty();
    //Asignación de los datos de la factura en el html
    $("#factura").append(
        "<br>" + "<b>Número mayor:</b>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + this.numeroMayor +

        "<br>" + "<b>Número menor:</b>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + this.numeroMenor
    );
}