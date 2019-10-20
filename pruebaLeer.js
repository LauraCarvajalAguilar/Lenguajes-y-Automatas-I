<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <LINK REL=StyleSheet HREF="diseño.css" TYPE="text/css">
    <title>Proyecto</title>
</head>

<body>
   <center>
   <h3>Tema 2. Proyecto de Lenguajes y Automatas I</h3>
   </center>
   <br>
        <center><label><strong>Paso 1: </strong>Selecciona el archivo</label></center>
        <br>
        <center>
        <input id="cuadro1" type="file" name="adjunto" accept=".java"/>
        <br>
        <textarea cols="100" rows="15" id="entrada"></textarea>
        <br> <br> <br>
            
        <button id="eliminar">Eliminar Comentarios</button><br>
        <textarea id="eliminado" rows="15" cols="100"></textarea>
        <br> <br> <br> <br>

        <button id="buscando" >Mostar Expresiones Matematicas</button><br>
        <textarea id="Buscar" rows="15" cols="100"></textarea>
        <br> <br> <br>

        <button id="mostrando" >Mostrar Expresiones Booleanas</button><br>
        <textarea id="Mostrar" rows="15" cols="100"></textarea>
        <br>
        
        <button id="Encriptar" >Encriptar Cadenas de Texto</button><br>
        <textarea id="encriptando" rows="15" cols="100"></textarea>
        <br> <br>

        <script src="leer.js" type="text/javascript"></script>
</body>
</html>
