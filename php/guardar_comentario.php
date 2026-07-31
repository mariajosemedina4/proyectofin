<?php

include("conexion.php");


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = mysqli_real_escape_string($conexion, $_POST["nombre"]);

    $correo = mysqli_real_escape_string($conexion, $_POST["correo"]);

    $comentario = mysqli_real_escape_string($conexion, $_POST["comentario"]);


    $sql = "INSERT INTO comentarios(nombre, correo, comentario)
            VALUES('$nombre','$correo','$comentario')";


    if (mysqli_query($conexion, $sql)) {

        echo "<script>

                alert('Comentario guardado correctamente.');

                window.location='../index.php';

              </script>";

    } else {

        echo "Error: " . mysqli_error($conexion);

    }

}

?>