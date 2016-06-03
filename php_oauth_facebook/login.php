<?php
session_start();
require_once('facebook_info.php');
require_once 'libraries/facebook-php-sdk-v4-5.0.0/src/Facebook/autoload.php';
$fb = new Facebook\Facebook([
  'app_id' => FACEBOOK_APP_ID, // Replace {app-id} with your app id
  'app_secret' => FACEBOOK_SECRET,
  'default_graph_version' => 'v2.2',
  ]);

$helper = $fb->getRedirectLoginHelper();

$permissions = ['email']; // Optional permissions
$loginUrl = $helper->getLoginUrl('https://danielpaschal.com/fb-callback.php', $permissions);
?>
<a href="<?=htmlspecialchars($loginUrl);?>">Log in with Facebook!</a>