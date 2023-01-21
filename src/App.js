import styled from 'styled-components';
import Header from './components/Header.js';
import Card1 from './Card1';
import Card2 from './Card2';
import Services from './Services';
import HomeWorkout from './components/Illustrations/HomeWorkout.js';
import HealthTips from './components/Illustrations/HealthTips.js';
import Footer from './components/Illustrations/Footer.js';
function App() {
  return (
    <AppContainer>
      <Header />
      <Card1/>
      <Card2 />
      <Services />
      <HomeWorkout/>
      <HealthTips/>
      <Footer />
    </AppContainer>
  );
}
const AppContainer=styled.div`
  text-align: center;
  background-color: #FFFFFF;
`;
export default App;
