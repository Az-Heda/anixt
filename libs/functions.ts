import data from '../public/data.json';
import { Anime, AnimeList } from './types';

export function getData(anime_id?:string) : Anime | AnimeList | undefined {
	if (anime_id) {
		return (data as AnimeList).find(a => a.id == anime_id);
	}
	return data as AnimeList;
}