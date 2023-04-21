export interface MangaTitle {
	romaji: string;
}

export interface Manga {
	id: string,
	title: MangaTitle;
	image: string;
	description: string;
	genres: string[];
}

export interface MangaDetail {
	id: string;
	title: string[];
	malId: number;
	trailer: {
		id: string;
		site: string;
		thumbnail: string;
	};
	image: string;
	popularity: number;
	color: string;
	description: string;
	status: string;
	releaseDate: number;
	startDate: {
		year: number;
		month: number;
		day: number;
	};
	endDate: {
		year: number;
		month: number;
		day: number;
	};
	rating: number;
	genres: string[];
	season: string;
	studios: string[];
	type: string;
}

export async function fetchData(url: string): Promise<Manga[]> {
	try {
		const data = await fetch(url).then((res) => res.json());
		return data.results;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export async function fetchMangaDetail(id: string): Promise<MangaDetail> {
	try {
		const url = `https://api.consumet.org/meta/anilist-manga/info/${id}?provider=mangareader`
		const data = await fetch(url).then((res) => res.json());
		return data;
	} catch (error) {
		console.log(error);
		throw new Error("error Has Ocurred");
	}

}

const mangaTitles = [
	'Naruto',
	'One Piece',
	'Attack on Titan',
	'Death Note',
	'Fullmetal Alchemist',
	'Dragon Ball',
	'Bleach',
	"Jojo's Bizarre Adventure",
	'My Hero Academia',
	'Tokyo Ghoul',
	'One Punch Man',
	'Black Butler',
	'Fairy Tail',
	'Sailor Moon',
	'Yu-Gi-Oh!',
	'Berserk',
	'Akira',
	'Hunter x Hunter',
	'Detective Conan (Case Closed)',
	'Slam Dunk',
	'Yotsuba&!',
	'Barakamon',
	'A Silent Voice',
	'Silver Spoon',
	'My Neighbor Seki',
	'Non Non Biyori',
	'Bunny Drop',
	"Natsume's Book of Friends",
	'Flying Witch',
	'March Comes in Like a Lion',
	'Honey and Clover',
	'Azumanga Daioh',
	'K-On!',
	'Usagi Drop (Bunny Drop)',
	'Aria',
	'Genshiken',
	'Kimi to Boku',
	'Nana',
	'Beck',
	'Chihayafuru'
];
