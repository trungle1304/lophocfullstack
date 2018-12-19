<?php 
/**
*	Database class
*	Author: Trung
**/


class database {
	private $connection = null;

	public function connect($hostname, $username, $password, $databaseName){
		$this->connection = new mysqli($hostname, $username, $password, $databaseName);

		if($this->connection->connect_error){
			echo 'Không thể kết nối CSDL';
			exit();
		}
	}

	public function insert($table, $data){
		// $fields = array_keys($data);
		// $keys = implode(',', $fields);

		$fields = implode(',', array_keys($data));
		
		$questionMarks = str_repeat('?,', count($data));
		$questionMarks = substr($questionMarks, 0, -1); // cắt str
		$sql = "INSERT INTO $table($fields) VALUES ($questionMarks)";
		$types = str_repeat('s', count($data));
		$values = array_values($data);

		$statment = $this->connection->prepare($sql);
		$statment->bind_param($types, ...$values);
		$statment->execute();
	}

	public function getSingle($table, $id){
		$sql = "SELECT * FROM $table WHERE id = ?";
		$statment = $this->connection->prepare($sql);
		$statment->bind_param('i', $id);
		$statment->execute();
		$result = $statment->get_result();
		if($result->num_rows == 0){
			return null;
		}
		return $result->fetch_object();

	}

	public function update($table, $data, $id){
		$fields = implode(',',array_keys($data));
		$keyList = explode(',', $fields); // lấy mảng tên của key từ chuỗi $fields
		$updateList = ''; 					// Tạo thành chuỗi VD như: fullname = ?
		foreach ($keyList as $value) {
			$updateList.= $value. "= ?,";
		}
		$updateList = substr($updateList,0, -1);    // Xóa dấu ',' ở cuối chuỗi $updateList
		$sql="UPDATE $table SET $updateList WHERE id= ?";
		$types = str_repeat('s', count($data));
		$types = $types."".'i';   // nối chuỗi thêm i: integer => sssi
		$values = array_values($data);
		$values[] = $id;   // thêm phần tử id vào cuối mảng

		$statment = $this->connection->prepare($sql);
		$statment->bind_param($types, ...$values);
		$statment->execute();
	}

	public function delete($table, $id){
		$sql = "DELETE FROM $table WHERE id = ?";
		$statment = $this->connection->prepare($sql);
		$statment->bind_param('i', $id);
		$statment->execute();
	}

}

?>