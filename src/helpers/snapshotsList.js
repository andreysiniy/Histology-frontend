import snapshot01 from "./../img/gallery/01.jpg";
import snapshot01Big from "./../img/gallery/01-big.jpg";

import snapshot02 from "./../img/gallery/02.jpg";
import snapshot02Big from "./../img/gallery/02-big.jpg";

import snapshot03 from "./../img/gallery/03.jpg";
import snapshot03Big from "./../img/gallery/03-big.jpg";

import snapshot04 from "./../img/gallery/04.jpg";
import snapshot04Big from "./../img/gallery/04-big.jpg";

import snapshot05 from "./../img/gallery/05.jpg";
import snapshot05Big from "./../img/gallery/05-big.jpg";

import snapshot06 from "./../img/gallery/06.jpg";
import snapshot06Big from "./../img/gallery/06-big.jpg";

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


const gallery = [
	{
		title: 'Снимок 1',
		class: 'А',
		img: snapshot01,
		imgBig: snapshot01Big,
		
	},
	{
		title: 'Снимок 2',
		img: snapshot02,
		imgBig: snapshot02Big,
		class: 'А',

	},
	{
		title: 'Снимок 3',
		img: snapshot03,
		imgBig: snapshot03Big,
		class: 'Б',

	},
	{
		title: 'Снимок 4',
		img: snapshot04,
		imgBig: snapshot04Big,
		class: 'Ъ',
	},
	{
		title: 'Снимок 5',
		img: snapshot05,
		imgBig: snapshot05Big,
		class: 'Ь',
	},
	{
		title: 'Снимок 6',
		img: snapshot06,
		imgBig: snapshot06Big,
		class: 'Г',
	},
	{
		title: 'Снимок Test',
		img: testImg,
		imgBig: testImg,
		class: 'Г',
	},
];

export {gallery}