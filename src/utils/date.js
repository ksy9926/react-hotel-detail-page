const getFreeCancelDate = () => {
  const dayToKorean = ['일', '월', '화', '수', '목', '금', '토'];

  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate() + 7).padStart(2, '0');

  return `${month}월 ${day}일 (${dayToKorean[date.getDate()]})`;
};

export { getFreeCancelDate };
