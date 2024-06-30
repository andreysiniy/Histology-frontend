import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {gallery} from "../helpers/snapshotsList"

const Snapshot = () => {
	const {id} = useParams();
	const snapshot = gallery[id];

    return (
		<main className="section">
			<div className="container">
				<div className="snapshot-details">
					<h1 className="title-1">{snapshot.title}</h1>

					<img
						src={snapshot.imgBig}
						alt={snapshot.title}
						className="snapshot-details__cover"
					/>

					<div className="snapshot-details__desc">
						<p>Класс: {snapshot.class}</p>
					</div>

					{snapshot.gitHubLink && (
						<BtnGitHub link="https://github.com" />
					)}
				</div>
			</div>
		</main>
	);
}

export default Snapshot;