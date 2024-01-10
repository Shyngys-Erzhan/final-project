import { useState } from 'react';
import video1 from '../../../assets/videos/home_background.mp4';
import video2 from '../../../assets/videos/city_-_3134 (Original).mp4';
import video3 from '../../../assets/videos/night_-_28860 (Original).mp4';
import styles from './home-header.module.css';

function HomeHeader() {
  const [currentVideo, setCurrentVideo] = useState(video1);
  const [activeButton, setActiveButton] = useState('Видео 1');

  const handleVideoChange = (newVideo, buttonName) => {
    setCurrentVideo(newVideo);
    setActiveButton(buttonName);
  };

  return (
    <div className={styles.video_content}>
      <video src={currentVideo} autoPlay loop muted className={styles.video} />
      <div className={styles.video_buttons}>
        <button
          className={activeButton === 'Видео 1' ? styles.active : ''}
          onClick={() => handleVideoChange(video1, 'Видео 1')}
        >
        </button><button
          className={activeButton === 'Видео 2' ? styles.active : ''}
          onClick={() => handleVideoChange(video2, 'Видео 2')}
        >
        </button><button
          className={activeButton === 'Видео 3' ? styles.active : ''}
          onClick={() => handleVideoChange(video3, 'Видео 3')}
        ></button>
      </div>
      <div className={styles.text_content}>
        <h1>
          Добро пожаловать в наш уникальный онлайн магазин, где стиль встречается с удобством,
          а разнообразие товаров подчеркивает вашу индивидуальность!
          Исследуйте наши категории и обнаружьте мир возможностей для трансформации вашей повседневной жизни.
        </h1>
      </div>
    </div>
  );
}

export default HomeHeader;