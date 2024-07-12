<?php
$servername = "localhost";
$username = "root";
$password = "wernerheisenberg107";
$dbname = "cine_db";

// Conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre_usuario = $_POST['usuario'];
$contrasena = $_POST['contraseña'];

// Preparar y ejecutar la consulta SQL
$sql = "SELECT contrasena FROM usuarios WHERE nombre_usuario = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $nombre_usuario);
$stmt->execute();
$result = $stmt->get_result();

// Comprobar si hay una fila coincidente
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Verificar contraseña
    if (password_verify($contrasena, $row['contrasena'])) {
        header('Location: ../index.html'); // Redirige a la página principal
        exit;
    } else {
        echo 'Nombre de usuario o contraseña incorrectos'; // Mensaje de error
        exit;
    }
} else {
    echo 'Nombre de usuario o contraseña incorrectos'; // Mensaje de error
    exit;
}

$stmt->close();
$conn->close();
?>
