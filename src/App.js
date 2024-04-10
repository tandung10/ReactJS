import './App.css';

import Count from './Component/Count';
import Youtube from './Component/Youtube';
// import Count from './Component/Count';


function App() {
  return (
    // <section section >
    //   <ColorBox color="red"></ColorBox>
    //   <ColorBox color="black"></ColorBox>
    //   <ColorBox color="green"></ColorBox>
    // </section>
    // <Count />
    <Youtube img="https://images.unsplash.com/photo-1712675003032-0b9352c77ca7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Co sao cung danh"
      channel="Tan Dung Offical"
      view="345N luot xem" />
  );
}
export default App;