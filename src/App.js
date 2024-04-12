import './App.css';
import Product from './Component/Product';
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

function App() {
  return (
    <Product />
  )
}

export default App;