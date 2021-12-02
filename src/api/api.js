const api = process.env.REACT_APP_API_URL;

// 호텔 정보 api 불러오기
const fetchHotelInfo = async () => {
  let res = await fetch(api + '/hotel', { method: 'GET' });
  res = res.json();
  return res;
};

// 객실 정보 api 불러오기
const fetchRooms = async () => {
  let res = await fetch(api + '/rooms', { method: 'GET' });
  res = res.json();
  return res;
};

// 리뷰 api 불러오기
const fetchReviews = async () => {
  let res = await fetch(api + '/reviews', { method: 'GET' });
  res = res.json();
  return res;
};

export { api, fetchHotelInfo, fetchRooms, fetchReviews };
