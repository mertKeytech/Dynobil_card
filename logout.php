<?php
session_start();
$_SESSION = array();
session_unset();
session_destroy();
?>
<script>
    window.location.href = "login.php";
</script>