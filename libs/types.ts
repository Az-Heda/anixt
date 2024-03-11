export type uuid = string;
export type AnimeList = Array<Anime>;

export type Character = {
	id: uuid;
	name: string;
	content: Array<string>;
	pics: Array<string>;
};

export type Episode = {
	id: uuid;
	number: number;
	title?: string;
	aired?: string;
	description?: Array<string> | null;
	duration?: string;
};

export type Anime = {
	aired: number;
	alternativeTitle: string | null;
	characters: Array<Character>;
	description: Array<string> | null;
	episodes: Array<Episode>;
	genres: Array<string>;
	id: uuid;
	pics: Array<string>;
	releasedSeason: string;
	studios: string;
	title: string;
	type: string;
	url: string;
	duration?: string | null;
	episodeCount?: number;
};