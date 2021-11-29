import Header from 'components/Header';
import Slider from 'components/Slider';
import Guestroom from 'components/Guestroom';
import Amenities from 'components/Amenities';
import Review from 'components/Review';
import HotelInfo from 'components/HotelInfo';
import { Main } from 'styles/commonStyle';

function App() {
  return (
    <>
      <Header />
      <Main>
        <div style={{ width: '100%', maxWidth: '976px', display: 'flex', padding: '20px' }}>
          <div style={{ flex: 3, background: '#e8e8e8' }}>
            <Slider />
            <Guestroom />
            <Amenities />
            <Review />
          </div>
          <div style={{ flex: 2, marginLeft: '10px' }}>
            <HotelInfo />
          </div>
        </div>
      </Main>
    </>
  );
}

export default App;
