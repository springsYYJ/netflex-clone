import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';

//1. 홈, 무비, 디테일 3개의 페이지로 구성
//2. 홈은 배너를 보여준다
//3. 3가지 섹션의 영화를 볼 수 있다(popular, top rated, upcoming)
//4. 마우스 오버시 영화 제목, 장르, 평점, 인기도, 청불여부를 나타낸다
//5. 영화를 슬라이드로 넘기면서 볼 수 있다.
//6. 영화 디테일 페이지에는 포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 이익, 러닝타임, 등등의 정보를 볼수있다.
//7. trailer를 누르면 trailer를 보여준다.
//8. 리뷰를 보여준다
//9. 과련된 영화를 볼수있다.
//10. 영화 검색 기능
//11. 영화 정렬 기능
//12. 영화 피러링 기능

function App() {
  return (
    <div className='root'>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
