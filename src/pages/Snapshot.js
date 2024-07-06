import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import { GetImageById } from "../helpers/snapshotsList";

const Snapshot = () => {
	const [image, setImage] = useState(null);
	const {id} = useParams();
	const [isLoading, setIsLoading] = useState(false);

	const loadImage = (id) => {
		if (isLoading) return;
		setIsLoading(true);
		(async () => {
			try {
				const data = await GetImageById(id);
				setImage(data);	
			} catch (err) {
				console.log(err);
			}
	
		})();
	};

	useEffect(() => {
		if (id) {
			loadImage(id);
		}
	}, [id]);

    return (
		<main className="section">
			<div className="container">
				<div className="snapshot-details">
					<h1 className="title-1">{image?.name}</h1>

					<img
						src={`data:image/jpeg;base64,${image?.imageBytes}`}
						alt={image?.name}
						className="snapshot-details__cover"
					/>

					<div className="snapshot-details__desc">
						<p>Класс: {image?.category}</p>
					</div>

				</div>
			</div>
		</main>
	);
}

export default Snapshot;