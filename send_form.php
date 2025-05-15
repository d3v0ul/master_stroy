<?
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$emailTo = 'zakaz@ms-cement.ru';
$subject = "Заявка с сайта"; // Тема письма

// Тело письма
$body = "Имя: $name \n\n $phone \n\nEmail: $email \n\nСообщение: $message";

// Заголовки с правильной кодировкой
$headers = "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= "From: MySite <$emailTo>\r\n"; // От кого
$headers .= "Reply-To: $email\r\n"; // Ответить на email отправителя

// Отправка письма
if (mail($emailTo, $subject, $body, $headers)) {
    $emailSent = true;
    echo "Письмо успешно отправлено!";
} else {
    $emailSent = false;
    echo "Ошибка при отправке письма.";
}
?>