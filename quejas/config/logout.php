<?php
  session_start();

  setcookie ('token','',time () - 1);
  session_destroy();
  $respuesta = array('mensaje' => '1');
  echo json_encode(($respuesta));
?>