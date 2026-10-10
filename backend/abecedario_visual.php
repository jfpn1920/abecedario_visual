<?php
require_once "conexion.php";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $letra = trim($_POST["letra"] ?? "");
    $palabra = trim($_POST["palabra"] ?? "");
    //-----------------------//
    //--|validar_los_datos|--//
    //-----------------------//
    if ($letra === "" || $palabra === "") {
        $mensaje = "Error: debes completar todos los campos.";
    } 
    elseif (mb_strlen($letra) !== 1) {
        $mensaje = "Error: la letra no es válida.";
    } 
    elseif (mb_strlen($palabra) > 100) {
        $mensaje = "Error: la palabra no puede superar 100 caracteres.";
    } 
    else {
        //-----------------------------------------//
        //--|guardar_palabra_en_la_base_de_datos|--//
        //-----------------------------------------//
        $consulta = $conexion->prepare("INSERT INTO palabras (letra, palabra) VALUES (?, ?)");
        if ($consulta) {
            $consulta->bind_param("ss", $letra, $palabra);
            if ($consulta->execute()) {
                $mensaje = "La palabra " . htmlspecialchars($palabra, ENT_QUOTES, "UTF-8") . " se ha registrado con éxito en la base de datos.";
            } 
            else {
                $mensaje = "Error al registrar la palabra.";
            }
            $consulta->close();
        } 
        else {
            $mensaje = "Error al preparar el registro.";
        }
    }
} else {
    $mensaje = "Envía una palabra mediante el formulario.";
}
//---------------------------//
//--|mostrar_los_resultado|--//
//---------------------------//
echo htmlspecialchars($mensaje, ENT_QUOTES, "UTF-8");
$conexion->close();
?>