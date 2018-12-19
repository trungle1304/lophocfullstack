<?php 

require('database.php');

$db = new database();
$db->connect('localhost','root','','quanlysinhvien');

	if(isset($_POST['addStudent'])){
		$fullname  = $_POST['fullname'];
		$age  = $_POST['age'];
		$phone  = $_POST['phone'];
		$address  = $_POST['address'];
		// $db->insert(
		// 		'students',
		// 		[
		// 		'fullname' => $fullname,
		// 		'age' => $age,
		// 		'phone' => $phone,
		// 		'address' => $address
		// 		]
		// 		);
			$db->update(
				'students',
				[
				'fullname' => $fullname,
				'age' => $age,
				'phone' => $phone,
				'address' => $address
				],'2'
				);
	}
$student = $db->getSingle('students', '2');
echo $student->fullname;

// $db->delete('students', '1');







// //hostname: địa chỉ server mysql
// //username: root, password:  // mặc định của xampp// username phải kết nối đc với database, và có quyền quản lý
// //database name
// 	$connection = new mysqli('localhost','root','','quanlysinhvien'); // tạo đối tượng mysqli tên connection
// // check có lết nối ko
// 	if($connection->connect_error){
// 		echo 'Không thể kết nối CSDL';
// 		exit();
// 	}

// // $connection->query("INSERT INTO students (fullname, age, phone, address) VALUES ('Anh Trung', 23, '0123456789', 'Bắc Ninh')");

// // kiểm tra nếu form đc submit
// 	if(isset($_POST['addStudent'])){
// 		$fullname  = $_POST['fullname'];
// 		$age  = $_POST['age'];
// 		$phone  = $_POST['phone'];
// 		$address  = $_POST['address'];

// 		// $sql = "INSERT INTO students (fullname, age, phone, address) VALUES ('".$fullname."', ".$age.", '".$phone."', '".$address."')";
// 		// $connection->query($sql);

// 		$sql = "INSERT INTO students (fullname, age, phone, address) VALUES(?, ?, ?, ?)";
// 		$statment = $connection->prepare($sql);  // chuẩn bị mệnh đề, trong trường hợp này là câu lệnh sql, với dữ liệu điền trong bind_param
// 		$statment->bind_param('siss', $fullname, $age, $phone, $address );  // bind_param, để thay thế phần ? bên biến $sql -fullanme-> stirng-> s, age-> integer -> i, tương tự phone, address -> s; sau dấu phẩy là các biến tương ứng
// 		$statment->execute(); // thực thi
// 	}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form method="POST" action="index.php">
		<label for="">Ho va ten</label>
		<input type="text" name="fullname" value="" placeholder=""><br>
		<label for="">Tuoi</label>
		<input type="text" name="age" value="" placeholder=""><br>
		<label for="">Điện thoại</label>
		<input type="text" name="phone" value="" placeholder=""><br>
		<label for="">Dia chi</label>
		<input type="text" name="address" value="" placeholder=""><br>
		<button type="submit" name="addStudent">Click</button>
	</form>
</body>
</html>