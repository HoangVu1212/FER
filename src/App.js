import logo from './logo.svg';
import './App.css';

function App() {
  // Khai báo họ tên và tuổi
  const hoTen = "Nguyen Truong Hoang Vu 0";
  const tuoi = 25;

  // Khai báo một đối tượng person
  const person = { name: "Nguyen Truong Hoang Vu 0", age: 25 };

  // Khai báo một mảng gồm 5 đối tượng person
  const people = [
    { name: "Nguyen Truong Hoang Vu 1", age: 26 },
    { name: "Nguyen Truong Hoang Vu 2", age: 27 },
    { name: "Nguyen Truong Hoang Vu 3", age: 28 },
    { name: "Nguyen Truong Hoang Vu 4", age: 29 },
    { name: "Nguyen Truong Hoang Vu 5", age: 30 }
  ];

  return (
    <div>
      {/* Yêu cầu 1: In Hello world, họ tên và tuổi */}
      <h1>Hello world, Tôi là {hoTen}, Năm nay tôi {tuoi} tuổi.</h1>

      {/* Yêu cầu 2: In mảng people dưới dạng danh sách */}
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            Name: {person.name}, Age: {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
