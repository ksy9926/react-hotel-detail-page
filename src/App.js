import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHotelInfo } from 'redux/actions/hotelInfoAction';
import { getRooms } from 'redux/actions/roomsAction';
import { getReviews } from 'redux/actions/reviewsAction';
import Header from 'components/Header';
import Carousel from 'components/Carousel';
import Guestroom from 'components/Guestroom';
import Amenities from 'components/Amenities';
import Review from 'components/Review';
import HotelInfo from 'components/HotelInfo';
import { Main, Div } from 'styles/commonStyle';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotelInfo());
    dispatch(getRooms());
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main>
        <Div style={{ width: '100%', maxWidth: '976px', display: 'flex', padding: '20px' }}>
          <Div style={{ flex: 3, background: '#e8e8e8' }}>
            <Carousel />
            <Guestroom />
            <Amenities />
            <Review />
          </Div>
          <Div style={{ flex: 2, marginLeft: '10px' }}>
            <HotelInfo />
          </Div>
        </Div>
      </Main>
    </>
  );
}

export default App;
