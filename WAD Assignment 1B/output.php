<h1>With Ajax</h1>

<?php
$name = $_POST['name'];
$email = $_POST['email'];
$username = $_POST['username'];

echo "<div>Hi, " . $name . "</div>";
echo "<div>Your email is: " . $email . "</div>";
echo "<div>Your username is: " . $username . "</div>";

// Additional lines for a more personalized output
echo "<div>Thank you for registering with us!</div>";
echo "<div>We look forward to providing you with a great experience.</div>";
echo "<div>Feel free to explore our website and discover exciting features.</div>";
?>