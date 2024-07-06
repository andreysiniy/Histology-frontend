import testImg from "./../img/gallery/test.jpg";

import { GetAPI  } from "./misc";
import axios from "axios";


export async function GetImages() {
	const response = await axios.get(`${GetAPI()}api/Image`);
	return response.data;
}

export async function GetImageById(id) {
	const response = await axios.get(`${GetAPI()}api/Image/${id}`);
	return response.data;
}

export async function GetImagesByAlbumId(id) {
	try {
		const images = await GetImages(); 
		const filteredImages = images.filter((image) => image.album.albumId === parseInt(id));
		return filteredImages;
	  } catch (err) {
		console.error(err);
		return []; 
	  }
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
  }

export async function GetRandomImage() {
	try {
	const response = await GetImages();
	const rand = getRandomInt(1, response.length);
	const randImage = await GetImageById(rand);
	console.log("rand ", rand);
	console.log(randImage);
	return randImage; 
	} catch (err) {
		console.log(err);
	}
}

export async function GetAlbums() {
	const response = await axios.get(`${GetAPI()}api/Album`);
	return response.data;
}

export async function GetAlbumPreview(id) {
	try {
		const response = await GetImagesByAlbumId(id);
		return response[0].imageBytes; 
		} catch (err) {
		console.log('GetAlbumPreview : ' + err);
		return null;
	}
}

export async function GetAlbumName(id) {
	const intId = parseInt(id);
	const response = await axios.get(`${GetAPI()}api/Album/${intId}`);
	return response.data.name;
}

export async function CreateNewAlbum(albumName) {
	try {
		const response = await axios.post(`${GetAPI()}api/Album/`, 
		  { name: albumName },
		  {
			headers: {
			  'Content-Type': 'application/json'
			}
		  }
		);
		return response.data;
	} catch (err) {
		console.log('CreateNewAlbum : ' + err);
		return null;
	}
}


export async function UploadImageToAlbum(file, name, albumId) {
    const formData = new FormData();
    formData.append('file', file); 
    formData.append('Name', name); 
    formData.append('AlbumId', albumId); 

    try {
        const response = await axios.post(`${GetAPI()}api/Image/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', 
            },
        });
        console.log('Response from UploadImageToAlbum:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error uploading image:', error);
        return null;
    }
}
