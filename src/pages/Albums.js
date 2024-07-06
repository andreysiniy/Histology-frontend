import Snapshot from '../components/snapshot/Snapshot';
import {gallery} from "../helpers/snapshotsList"
import Gallery from './Gallery';
import testImg from "./../img/gallery/test.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetAlbumPreview, GetAlbums, CreateNewAlbum } from "../helpers/snapshotsList";
import { NavLink } from 'react-router-dom';

const Album = ({name, imageBytes, index}) => {
	return (
	<main className="section">
	<div className="container">
	<NavLink to={`/gallery/${index}`}>
		<div className="album-details">
			<h1 className="album__title">{name}</h1>
			<img
				src={imageBytes ? `data:image/jpeg;base64,${imageBytes}` : testImg}
				alt={name}
				className="album-details__cover"
			/>
		</div>
	</NavLink>
	</div>
	
</main>
	);
}

const NewAlbumForm = () => {
	const [values, setValues] = useState({
		albumName: "",
	  });
	
	const navigate = useNavigate(); 

	  const handleInputChange = (event) => {
		event.preventDefault();
	
		const { name, value } = event.target;
		setValues((values) => ({
		  ...values,
		  [name]: value
		}));
	  };
	
	  const [submitted, setSubmitted] = useState(false);
	  const [valid, setValid] = useState(false);
	
	  const handleSubmit = async (e) => {
		e.preventDefault();
		if (values.albumName) {
			setValid(true);
			const response = await CreateNewAlbum(values.albumName);
			navigate(`/gallery/${parseInt(response.albumId)}`);
		}
		setSubmitted(true);
	  };
	
	return (
		<div className="form-container">
      <form className="album-form" onSubmit={handleSubmit}>
        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Название альбома"
            name="albumName"
            value={values.albumName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.albumName && (
          <span id="name-error">Введите название альбома</span>
        )}

        {!valid && (
          <button class="form-field btn" type="submit">
            Создать альбом
          </button>
        )}
      </form>
    </div>
	);
}


const Albums = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [albumList, setAlbumList] = useState([]);

	const loadAlbumList = () => {
		if (isLoading) return;

		setIsLoading(true);
		(async () => {
			try {
				const data = await GetAlbums();
				const albumsWithPreviews = await Promise.all(
					data.map(async (album) => {
					  const preview = await GetAlbumPreview(album.albumId);
					  return { ...album, preview };
					})
				  );

				setAlbumList(albumsWithPreviews);	
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
	
		})();
	}

    useEffect(() => { 
		if (albumList.length === 0)
			loadAlbumList();
	}, [albumList]);

	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Альбомы</h2>
				<ul className="albums">
					{albumList.map((albumList, index) => {
						return (
							<Album
								key={index}
								name={albumList?.name}
								imageBytes={albumList?.preview}
								index={index + 1}
							/>
						);
					})}
				</ul>
				<NewAlbumForm />
			</div>
		</main>
	);
};

export default Albums;
