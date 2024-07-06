
import Snapshot from '../components/snapshot/Snapshot';
import {gallery} from "../helpers/snapshotsList"

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import { GetImages, GetImageById, GetImagesByAlbumId } from "../helpers/snapshotsList";



const Gallery = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [imageList, setImageList] = useState([]);
	const {id} = useParams();

	const loadImagesList = (id) => {
		if (isLoading) return;
		setIsLoading(true);
		setImageList([]);

		(async () => {
			try {
			const data = id ? await GetImagesByAlbumId(id) : await GetImages();
			console.log("id : " + id);
			setImageList(data ?? []);
			setIsLoading(false);
			} catch (err) {
				console.log("loadImagelist: " + err);
			}
		})();
	}

	useEffect(() => {
			loadImagesList(id);
	}, [id]);

	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Снимки</h2>
				<ul className="snapshots">
					{imageList?.map((imageList, index) => {
						return (
							<Snapshot
								key={index + 1}
								title={imageList?.name}
								img={`data:image/jpeg;base64,${imageList?.imageBytes}`}
								index={index + 1}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};

export default Gallery;
