<?php
require 'PHPMailerAutoload.php';

$mailToSend = 'illusion3@wp.pl';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $regulation = $_POST['regulation'];
    $errors = Array();
	$return = Array();
    if (empty($name)) {
        array_push($errors, 'name');
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($errors, 'email');
    }
    if (empty($message)) {
        array_push($errors, 'message');
    }
    if (empty($regulation)) {
        array_push($errors, 'regulation');
    }
    if (count($errors) > 0) {
        $return['errors'] = $errors;
    } else {

      $mail = new PHPMailer;

      $mail->isSMTP();                                      // Set mailer to use SMTP
      $mail->Host = 'smtp.wp.pl';  // Specify main and backup SMTP servers
      $mail->SMTPAuth = true;                               // Enable SMTP authentication
      $mail->Username = 'illusion3@wp.pl';                 // SMTP username
      $mail->Password = '20042004f';                           // SMTP password
      $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
      $mail->Port = 465;                                    // TCP port to connect to
      $mail->setFrom('illusion3@wp.pl', 'efichtner.xyz');
      $mail->addAddress('illusion3@wp.pl');               // Name is optional

      $message  = "
          <html>
              <head>
                  <meta charset=\"utf-8\">
              </head>
              <style type='text/css'>
                  body {font-family:sans-serif; color:#222; padding:20px;}
                  div {margin-bottom:10px;}
                  .msg-title {margin-top:30px;}
              </style>
              <body>
                  <div>Imię: <strong>$name</strong></div>
                  <div>Email: <a href=\"mailto:$email\">$email</a></div>
                  <div class=\"msg-title\"> <strong>Wiadomość:</strong></div>
                  <div>$message</div>
              </body>
          </html>";

          $mail->isHTML(true);
          $mail->Subject = 'Wiadomość ze strony efichtner.xyz';
          $mail->Body    = $message;

          if(!$mail->send()) {
                      $return['status'] = 'error';
                      $return['error_info'] = $mail->ErrorInfo;
          } else {
                              $return['status'] = 'ok';
          }

              header('Content-Type: application/json');
              echo json_encode($return);
          }
          }
