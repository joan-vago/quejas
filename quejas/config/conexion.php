<?php
  try {
    //code...
    $conexion = mysqli_connect ('localhost', 'root', '123456789','quejas');

  } catch (\Exception $e) {
  $mensaje = "Ha ocurrido un error:";
  $respuesta = array('error' => true,'mensaje'=> $mensaje );
  echo json_encode($respuesta);
  }
?>