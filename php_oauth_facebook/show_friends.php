<?php
session_start();
require_once('facebook_info.php');
require_once 'libraries/facebook-php-sdk-v4-5.0.0/src/Facebook/autoload.php';
$fb = new Facebook\Facebook([
  'app_id' => FACEBOOK_APP_ID, // Replace {app-id} with your app id
  'app_secret' => FACEBOOK_SECRET,
  'default_graph_version' => FACEBOOK_GRAPH_VERSION,
  ]);

$helper = $fb->getRedirectLoginHelper();

try {
  $accessToken = $helper->getAccessToken();
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  // When Graph returns an error
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  // When validation fails or other local issues
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}

/* handle the result */
//retrieve the user's id, name, pictures, friends count, albums with sub information of the photos, with the picture, the album, and the name
$info_to_retrieve = ['id','name','picture','friends','albums{photos{picture,album,name}}','posts.limit(5)'];
$request = new FacebookRequest(
  $session,
  'GET',
  '/me/friends'
);
$response = $request->execute();
$graphObject = $response->getGraphObject();
print_r($graphObject);
/* handle the result */