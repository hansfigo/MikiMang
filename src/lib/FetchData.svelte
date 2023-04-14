<script context="module" lang="ts">
	export interface MangaTitle {
		romaji: string;
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

	export interface Manga {
		title: MangaTitle;
		image: string;
		description: string;
		genres: string[];
	}
	export async function fetchData(url : string): Promise<Manga[]> {
		const data = await fetch(url).then((res) =>
			res.json()
		);

		return data.results;
	}
</script>
