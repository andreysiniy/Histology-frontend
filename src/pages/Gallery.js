
import Snapshot from '../components/snapshot/Snapshot';

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import { GetImages, GetImageById, GetImagesByAlbumId, UploadImageToAlbum, GetAlbumName } from "../helpers/snapshotsList";


const UploadButton = ({ _albumId }) => {
	const navigate = useNavigate();

	const Upload = async () => {
		const fileInput = document.getElementById('fileInput');
		const file = fileInput.files[0];
		
		const name = file.name;
		if (!_albumId) _albumId = 0;
		console.log(name);
		console.log(file);
		console.log(_albumId);

		const response = await UploadImageToAlbum(file, name, parseInt(_albumId));
		navigate(`/snapshot/${response.imageId}`);
	}
	return (
		<div className="btnUploadContainer">
		  <input type="file" id="fileInput" ></input>
		  <button className="btn" onClick={Upload}>
			Загрузить изображения
		  </button>
		</div>
	  );
	};


const Gallery = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [imageList, setImageList] = useState([]);
	const [albumName, setAlbumName] = useState('');

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

	const getAlbumName = (id) => {
		if (isLoading) return;
		if (!id) return;
		setIsLoading(true);
		setAlbumName('');
		(async () => {
			try {
			const data = id ? await GetAlbumName(id) : '';
			console.log("AlbumName : " + data);
			setAlbumName(data ?? '');
			setIsLoading(false);
			} catch (err) {
				console.log("getAlbumName: " + err);
			}
		})();
	}

	useEffect(() => {
			loadImagesList(id);
			getAlbumName(id);
	}, [id]);

	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">{id ? `Снимки альбома ${albumName}` : 'Снимки'}</h2>
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
				{ id && (
				<div >
					<UploadButton _albumId={id}/>
				</div> ) }
			</div>
		</main>
	);
};

export default Gallery;
