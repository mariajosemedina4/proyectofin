<?php

include("conexion.php");

$sql = "SELECT * FROM comentarios ORDER BY fecha DESC";

$resultado = mysqli_query($conexion, $sql);

if(mysqli_num_rows($resultado) > 0){

    while($fila = mysqli_fetch_assoc($resultado)){

?>

<div class="card shadow-sm mb-3">

    <div class="card-body">

        <h5>

            <?php echo htmlspecialchars($fila["nombre"]); ?>

        </h5>

        <small class="text-muted">

            <?php echo htmlspecialchars($fila["correo"]); ?>

            <br>

            <?php echo $fila["fecha"]; ?>

        </small>

        <hr>

        <p>

            <?php echo nl2br(htmlspecialchars($fila["comentario"])); ?>

        </p>

    </div>

</div>

<?php

    }

}else{

?>

<p class="text-center">

Todavía no hay comentarios.

</p>

<?php

}

?>