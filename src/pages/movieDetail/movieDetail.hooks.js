import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {  GET_ANILIST_DETAIL } from "modules/services/Anilist.graphql";
import { useLazyQuery } from "@apollo/client";

const useMovieDetail = () => {
    const { id } = useParams()
    const [data, setData] = useState({}) 

    const [ getMovieList, { data: resultAnimeList, error: errorAnimeList }] = useLazyQuery(GET_ANILIST_DETAIL);
    
    useEffect(()=>{
        getMovieList({variables: {id}})
    },[])

    useEffect(()=>{
        setData(resultAnimeList?.Media)
    },[resultAnimeList])

    return {data}
}

export default useMovieDetail