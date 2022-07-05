<?php
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$to      = 'ggtrfr@bk.ru';
$subject = 'Новая Заявка!';
$message = "Как связаться: ". $_POST["telephonOrSocSet"] . " \n"
					. "\n Текст: " . $_POST["soobzhenie"] . " \n ";

$headers = 'From: ggtrfr@bk.ru' . "\r\n" .
		'Reply-To: ggtrfr@bk.ru' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();


$ifSent = mail($to, $subject, $message, $headers);


}
?>