import MinigameButton from "./../components/btnMiniGame/btnMiniGame"
import { useState } from 'react';


const Testing = () => {
	const [testingStarted, setTestingStarted] = useState(false);


    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Тестирование</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">{testingStarted ? 'Варианты ответа' : 'Начать Тестирование'}</h2>
							<MinigameButton
								onClick={() => setTestingStarted(true)}
							></MinigameButton>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Testing;