const api = process.env.REACT_APP_API_URL;
const randomImgApi = 'https://picsum.photos/v2/list?page=3';

// 호텔 정보 api 불러오기
const fetchHotelInfo = async () => {
  let res = await fetch(api + '/hotel', { method: 'GET' });
  res = await res.json();
  return res;
};

// 객실 정보 api 불러오기
const fetchRooms = async () => {
  let res = await fetch(api + '/rooms', { method: 'GET' });
  res = await res.json();
  return res;
};

// 리뷰 api 불러오기
const fetchReviews = async () => {
  let res = await fetch(api + '/reviews', { method: 'GET' });
  res = await res.json();
  return res;
};

// 호텔 이미지 정보 api 불러오기
const fetchHotelImg = async () => {
  let res = await fetch(randomImgApi, { method: 'GET' });
  res = await res.json();
  return res.map((data) => data.download_url);
};

export { fetchHotelInfo, fetchRooms, fetchReviews, fetchHotelImg };
