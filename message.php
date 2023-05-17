<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)){
  if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    $receiver = "barbarakovacs@mail.ch";
    $subject = "From: $name <$email>";
    $body = "Name: $name\nEmail: $email\nMobile: $mobile\nSubject: $subject\n\nMessage:  $message:\n\nRegards,\n$name";
    $sender = "From: $email";
    if(mail($receiver, $subject, $body, $sender)){
      echo "Your message has been sent.";
    } else{
      echo "Sorry, failed to send your message!";
    }
  } else{
    echo "Enter a valid email address!";
  }
} else{
  echo "Email and message fields are required!";
}
?>