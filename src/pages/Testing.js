
import { useState, useEffect, useCallback } from 'react';
import {optionBtn} from "../helpers/miniGameBtns"

import Snapshot from '../components/snapshot/Snapshot';
import { GetRandomImage } from "../helpers/snapshotsList";


const MinigameContainer = () => {
	
	const [score, setScoreCounter] = useState(0);
	const [imageCount, setImageCounter] = useState(0);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
	const [randImage, setRandImage] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isGameStarted, setGameStarted] = useState(false);


	const handleStartButtonClick = () => {
		//loadRandomImage();
		setGameStarted(true);
		setIsButtonClicked(true);
	  };

    const loadRandomImage  = useCallback(() => {
		console.log("handle click");
		if (isLoading) return;
		setIsLoading(true);
		(async () => {
			try {
				const data = await GetRandomImage();
				console.log("data : ", data);
				setRandImage(data);	
				setIsLoading(false);
				setIsButtonClicked(false);
			} catch (err) {
				console.log(err);
			}
		})();

		
    },  [isLoading, isGameStarted, imageCount]);



	const handleMinigameButtonClick = (selectedOption) => {
		if (selectedOption === randImage.category.replace(/['"]+/g, '')) {
		  setScoreCounter(score + 1);
		}
		setImageCounter(imageCount + 1);
		//loadRandomImage();
		setIsButtonClicked(true);
	  };
	

	useEffect(() => {
		if (isButtonClicked) {
		  loadRandomImage();
		}
	  }, [isButtonClicked]);


return (
	<ul className="content-list">
		<li className="content-list__item">
			<h2 className="title-2">{isGameStarted? 'Определите тип опухоли' : 'Начать Тестирование'}</h2>
    	<div>
			<div  className='minigame-img'>
		{isGameStarted && (
				<Snapshot 
				key={0}
				title={"Счет " + score + "\/" + imageCount}
				img={`data:image/jpeg;base64,${randImage?.imageBytes}`}
				index={0}
				/>
		)}
			</div>
      	{!isGameStarted && (
        	<a href="#!" className="btn" onClick={handleStartButtonClick}>
          		Начать Тестирование
        	</a>
      	)}
      	{isGameStarted && (
		
        <div className='minigame-btns'>
          {optionBtn.map((option, index) => (
            <button key={index} className="btn" onClick={() => handleMinigameButtonClick(option.class)}>
              {option.title}
            </button>
          ))}
        </div>
      )}
    	</div>					
		</li>
	</ul>
  );
};


const Testing = () => {

    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Тестирование</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<MinigameContainer/>

					</li>
				</ul>
			</div>
		</main>
	);
}

export default Testing;