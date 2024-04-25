// import { useState } from 'react';
// import './App.css';
// import Form from './Component/Form';
// import Todolist from './useState/Todolist';
// import './style/todolist.css';
// import NavBar from './Component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiList from './useEffect/ApiList';
// import Todo from './useEffect/Todo';
// import TodoApp from './useState/TodoApp';
// import Slider from './Component/Slider';
// import { Card, CardLink } from 'react-bootstrap';
// import CardList from './Component/CardList';
// import FormContact from './Component/FormContact';
// import Footer from './Component/Footer';
// import Todolist from './useState/Todolist';
// import Product from './Component/Product';
// import Footer from './Component/Footer';
// import './img/delete.png';
// import Toggle from './Component/Toggle';

// import Product from './Component/Product';
// import Product from './Component/Product';
// import TodoList from './Component/TodoList';
// import Count from './Component/Count';
// import Youtube from './Component/Youtube';
// import Count from './Component/Count';


// function App() {
//   const tasks = ["ReactJS", "NodeJS", "Javascript"];
//   return (
//     // <section section >
//     //   <ColorBox color="red"></ColorBox>
//     //   <ColorBox color="black"></ColorBox>
//     //   <ColorBox color="green"></ColorBox>
//     // </section>
//     // <Count />
//     // <Youtube img="https://images.unsplash.com/photo-1712675003032-0b9352c77ca7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     //   title="Co sao cung danh"
//     //   channel="Tan Dung Offical"
//     //   view="345N luot xem" />

//     <div>
//       <h1>My To-Do List</h1>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// const Sum = (props) => {
//   console.log(props);
//   return (
//     <div>
//       The value is: {props.a + props.b}
//     </div>
//   )
// }

// function App() {
//   const x = 1;
//   const y = 2;
//   return (
//     <div>
//       <Sum a={x} b={y} />
//     </div>
//   )

// }
// const people = [
//   "Creola Katherine Johnson: nhà toán học",
//   "Mario José Molina-Pasquel Henríquez: nhà hóa học",
//   "Mohammad Abdus Salam: nhà vật lý",
//   "Percy Lavon Julian: nhà hóa học",
//   "Subrahmanyan Chandrasekhar: nhà thiên văn học",
// ];
// function App() {

//   const listItem = people.map((people) =>
//     <li>{people}</li>
//   )
//   return (
//     <ul>{listItem}</ul>
//   )
// }

// const people = [
//   {
//     id: 0,
//     name: "Creola Katherine Johnson",
//     profession: "nhà toán học",
//   },
//   {
//     id: 1,
//     name: "Mario José Molina-Pasquel Henríquez",
//     profession: "nhà hóa học",
//   },
//   {
//     id: 2,
//     name: "Mohammad Abdus Salam",
//     profession: "nhà vật lý",
//   },
//   {
//     id: 3,
//     name: "Percy Lavon Julian",
//     profession: "nhà hóa học",
//   },
//   {
//     id: 4,
//     name: "Subrahmanyan Chandrasekhar",
//     profession: "nhà thiên văn học",
//   },
// ];
// function App() {
//   const chemists = people.filter((people) => people.profession === "nhà hóa học")
//   const listItem = chemists.map((people) =>
//     <li key={people.id}>
//       {people.name}:{people.profession}
//     </li>
//   )
//   return (
//     <ul>{listItem}</ul>
//   )

// }

// function AlertButton({ message, children }) {
//   return <button onclick={() => alert(message)}>{children}</button>
// }

// function App() {
//   return (
//     <div>
//       <AlertButton message="Bắt đầu phát!">Phát phim</AlertButton>
//       <AlertButton message="Đang tải lên!">Tải lên hình ảnh</AlertButton>
//     </div>
//   )
// }
// let count = 0;
// const handleClick = () => {
//   count += 1;
//   console.log(count);
// }
// function App() {
//   return (
//     <div>
//       <span>{count}</span>
//       <button onclick={handleClick}>increase</button>
//     </div>
//   )
// }

// function App() {
//   return (
//     <Count />
//   )
// }

// const users = {
//   fullName: 'Tan Dung',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90
// };

// function App() {
//   return (
//     <div>
//       <h1>{users.fullName}</h1>
//       <img src={users.imageUrl} alt="avatar"
//         style={{
//           width: users.imageSize,
//           height: users.imageSize
//         }}
//       />

//     </div>
//   )
// }

// const product = [
//   {
//     id: 1,
//     title: "Dung"
//   },
//   {
//     id: 2,
//     title: "Hi"
//   },
//   {
//     id: 3,
//     title: "Nho"
//   },
//   {
//     id: 4,
//     title: "Abc"
//   }
// ];

// function App() {
//   const listItem = product.map(product =>
//     <li key={product.id}>{product.title}</li>
//   )
//   return (
//     <div>
//       <ul>{listItem}</ul>
//     </div>
//   )
// }

// function App() {
//   return (
//     <Product />
//   )
// }

// function App() {
//   const [infor, setInfor] = useState({
//     name: "Tan Dung",
//     age: 21,
//     address: "Da Nang"
//   })


//   const handleClick = () => {
//     setInfor({
//       ...infor,
//       bio: "Quang Nam"
//     })
//   }

//   return (
//     <div>
//       <h1>{JSON.stringify(infor)}</h1>
//       <button onClick={handleClick}>Update</button>
//     </div>
//   )
// }

// function App() {
//   const [cars, setCars] = useState(["Civic", "Mec", "Maxda"]);

//   const handleUpdate = () => {
//     setCars([...cars, "Brio"])
//   };


//   return (
//     <div>
//       <h1>{cars}</h1>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   )
// }

// const gifts = [
//   'CPU 19',
//   'RAM 32GB',
//   'RCB Keyboard'
// ]
// console.log(gifts);

// function App() {

//   const [gift, setGift] = useState()

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length);
//     setGift(gifts[index]);
//   }

//   return (
//     <div style={{ padding: 32 }}>
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   )
// }

// const courses = [
//   {
//     id: 1,
//     name: "HTML,CSS"
//   },
//   {
//     id: 2,
//     name: 'Javascript'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]

// function App() {
//   const [check, setCheck] = useState();
//   const handleSubmit = () => {
//     console.log({
//       id: check
//     });
//   }
//   return (
//     <div style={{ padding: 32 }}>
//       {courses.map(course =>
//         <div key={course.id}>
//           <input type="radio"
//             checked={check === course.id}
//             onChange={() => setCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       )}


//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }
function App() {
    return (

        <div>
            {/* <NavBar />
            <Slider />
            <CardList />
            <FormContact />
            <Footer /> */}
            {/* <Todolist /> */}
            {/* <Product /> */}
            {/* <Todolist /> */}
            {/* <TodoApp /> */}
            {/* <Todo /> */}
            <ApiList />
        </div>
    )
}

export default App;