<?php

function ejemplo_hola_mundo() {
    echo "¡Hola Mundo!";
}

function ejemplo_imprimir() {
    echo "Hola mundo (con echo)<br>";
    echo "Hola mundo (con print)";
}

function ejemplo_variables() {
    $nombre = "María";
    $edad = 30;
    $altura = 1.65;
    $es_estudiante = true;
    $hobbies = ["leer", "nadar", "viajar"];
    
    echo "Mi nombre es <strong>$nombre</strong> y tengo <strong>$edad</strong> años<br>";
    echo "Mido <strong>$altura</strong> metros<br>";
    echo "¿Es estudiante? <strong>" . ($es_estudiante ? "Sí" : "No") . "</strong><br>";
    echo "Mis hobbies: <strong>" . implode(", ", $hobbies) . "</strong>";
}


function ejemplo_if_else() {
    $edad = 18;
    echo "Edad: $edad años<br>";
    if ($edad >= 18) {
        echo "Eres mayor de edad";
    } else {
        echo "Eres menor de edad";
    }
}

function ejemplo_else_if() {
    $nota = 85;
    echo "Nota: $nota<br>";
    if ($nota >= 90) {
        echo "Excelente";
    } elseif ($nota >= 70) {
        echo "Aprobado";
    } else {
        echo "Reprobado";
    }
}

function ejemplo_switch() {
    $dia = "lunes";
    echo "Día: $dia<br>";
    switch($dia) {
        case "lunes":
            echo "Inicio de semana";
            break;
        case "viernes":
            echo "Fin de semana";
            break;
        default:
            echo "Otro día";
    }
}

function ejemplo_ternario() {
    $edad = 20;
    echo "Edad: $edad años<br>";
    $mensaje = ($edad >= 18) ? "Mayor de edad" : "Menor de edad";
    echo $mensaje;
}

function ejemplo_calculadora() {
    function sumar($a, $b) {
        return $a + $b;
    }
    $a = 5;
    $b = 3;
    $resultado = sumar($a, $b);
    echo "$a + $b = <strong>$resultado</strong>";
}

function ejemplo_array() {
    $frutas = ["Manzana", "Banana", "Naranja"];
    echo "Lista de frutas:<br>";
    foreach($frutas as $fruta) {
        echo "• $fruta<br>";
    }
}

$accion = isset($_GET['accion']) ? $_GET['accion'] : '';

switch($accion) {
    case 'hola_mundo': ejemplo_hola_mundo(); break;
    case 'imprimir': ejemplo_imprimir(); break;
    case 'variables': ejemplo_variables(); break;
    case 'if_else': ejemplo_if_else(); break;
    case 'else_if': ejemplo_else_if(); break;
    case 'switch_ejemplo': ejemplo_switch(); break;
    case 'ternario': ejemplo_ternario(); break;
    case 'calculadora': ejemplo_calculadora(); break;
    case 'array_ejemplo': ejemplo_array(); break;
    default: 
        if ($accion != '') {
            echo "Ejemplo no encontrado";
        }
        break;
}
?>