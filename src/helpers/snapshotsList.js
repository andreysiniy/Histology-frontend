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