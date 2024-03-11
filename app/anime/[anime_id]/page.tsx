'use client';

import { useParams } from "next/navigation";
import { getData } from '@/libs/functions';
import { Anime, AnimeList } from "@/libs/types";

export default function AnimePage() {
	const data = useParams();
	const ANIME_ID = data?.anime_id?.toString();
	const animeData : Anime | AnimeList | undefined = getData(ANIME_ID)
	if (!ANIME_ID) return ( <h1>TODO Redirect to error page</h1> );

	return (
		<div>{ JSON.stringify(animeData) }</div>
	)
}