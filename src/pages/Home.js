import Header from './../components/header/Header'
import UploadButton from "./../components/btnUpload/BtnUpload"

const Home = () => {
    return (
		<>

			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Сервис для анализа гистологических снимков</h2>
							<p>
							Представляем сервис, который использует технологии машинного обучения 
							для быстрого и точного анализа гистологических снимков. 
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Наша платформа позволяет:</h2>
							<p>
							Анализировать гистологические снимки на основе обученной модели машинного обучения
							</p>
							<p>
							Просматривать галерею гистологических снимков
							</p>
							<p>
							Проверить знания обучающихся 
							</p>
							<p>
							Загружать другие обученные модели машинного обучения 
							</p>
						</li>
						<UploadButton />
					</ul>

				</div>
			</main>
		</>
	);
}

export default Home;