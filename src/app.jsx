import React, { useEffect, useState } from 'react';
import Videolist from './components/video_list/video_list';

function App() {
  // state 할당
  const [videos, setVideos] = useState([]); // 초기값은 빈 배열

  // mount가 되었거나 update 되었을때 호출
  useEffect(() => {
    // request 옵션 전달
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAty9Y5UdibfQEFMnOC4eQdksXf0Gbe8xE',
      requestOptions
    )
      .then((response) => response.json()) // fetch가 정상적으로 받아지면 json으로 반응을 받고

      .then((result) => setVideos(result.items)) // 변환된 text를 setVideos에 할당하고
      .catch((error) => console.log('error', error)); // 에러가 발생하면 출력
  }, []); // 컴포넌트가 mount 됐을때(처음 나타났을때) 렌더링 한다

  return <Videolist videos={videos} />;
}

export default App;
