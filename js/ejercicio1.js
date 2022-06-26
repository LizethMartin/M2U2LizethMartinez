nameU: String;
materia: Number;
papeleria = 20000;
carnet = 8000;
totalMaterias: Number;
total: Number;
descuento: Number;
totalDescuento: Number;

//Metodo para obtener número de materias    
function addMaterias() {
    //Asignación de variable nombre tomando datos del formulario
    this.nameU = $("#name").val();
    //Asignación de variable materia tomando datos del formulario
    this.materia = $("#materia").val();
    //Limpieza de la tabla donde se van a registrar los input para los datos de las materias
    $("#resultado").empty();
    //For para poner inputs en la tabla para adquirir los valores y nombres de cada materia
    for (i = 0; i < materia; i++) {
        $("#resultado").append("<tr>");
        $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + '<input type="text" class="form-control mt-1" id="nameMateria' + i + '" placeholder="MATERIA">' + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
        $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + '<input type="number" class="form-control mt-1" id="valorMateria' + i + '" placeholder="VALOR DE MATERIA">' + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
        $("#resultado").append("</tr>")
    };
}

//Metodo para registrar materias y hacer la suma para el total de las materias
function registrar() {
    this.totalMaterias = 0;
    //For para sumar los valores de cada una de las materias
    for (i = 0; i < this.materia; i++) {
        this.totalMaterias += Number($('#valorMateria' + i).val());
    };
    //Llamado a la función que realiza la factura
    this.factura();
}

function factura() {
    //Limpieza de la tabla donde se muestran los datos de las materias (Nombre y valor)
    $("#resultadoMateria").empty();

    //For para poner los datos de las materias (Nombre y valor) en la factura
    for (i = 0; i < this.materia; i++) {
        $("#resultadoMateria").append("<tr>");
        $("#resultadoMateria").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + $('#nameMateria' + i).val() + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
        $("#resultadoMateria").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + $('#valorMateria' + i).val() + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
        $("#resultadoMateria").append("</tr>")
    };

    //Operación para obtener el total sin descuento 
    this.total = this.totalMaterias + this.papeleria + this.carnet;
    //Operación para obtener el valor del descuento
    this.descuento = this.total * 0.20;
    //Operación para obtener el valor total con el descuento
    this.totalDescuento = this.total - this.descuento;

    //Limpieza del campo persona para mostrar el nombre ingresado
    $("#person").empty();
    //Asignación del nombre ingresado en el input para la factura
    $("#person").append(
        this.nameU
    );

    //Limpieza del campo factura (html)
    $("#factura").empty();
    //Asignación de los datos de la factura en el html
    $("#factura").append(
        "<br>" + "<b>Total Materias:</b>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + this.totalMaterias +

        "<br>" + "<b>Papelería:</b>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + this.papeleria +

        "<br>" + "<b>Carnet:</b>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + this.carnet +

        "<br>" + "<b>Total Matricula:</b>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + this.total +

        "<br>" + "<b> Descuento:</b>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + this.descuento +

        "<br>" + "<b> Total con Descuento:</b> " + "&nbsp;&nbsp;&nbsp;&nbsp;" + this.totalDescuento
    );
}