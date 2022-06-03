import { useContext, useEffect, useState } from "react"
import { useLazyQuery } from "@apollo/client";
import { GET_ANILIST } from "modules/services/Anilist.graphql";
import { AnilistContext } from "modules/services/AnilistProvider";
import { scrollView } from "modules/utilities/scroll-view.util";

const useMovieList = () => {
    const { search } = useContext(AnilistContext);

    const [page, setPage] = useState({ page: 1, perPage: 20 })
    const [movieList, setMovieList] = useState([])
    const [oldSearch, setOldSearch] = useState("")
    const [ getMovieList, { data: resultAnimeList, error: errorAnimeList }] = useLazyQuery(GET_ANILIST);

    const handleScrollView = (depth) => {
        if (scrollView(depth)) {
            search ?  setPage({page: page.page + 1, perPage: 20, search}) : setPage({page: page.page + 1, perPage: 20}) 
        }
    }

    useEffect(()=>{
        getMovieList({variables: {...page}})
    },[page])

    useEffect(()=>{
        if ((search != oldSearch) && search) {
            setMovieList([])
            setPage({ page: 1, perPage: 20, search })
        } else if ((search != oldSearch) && !search) {
            setMovieList([])
            setPage({ page: 1, perPage: 20 })
        }
        setOldSearch(search)
    },[search])

    useEffect(()=>{
        let list = resultAnimeList?.Page?.media
        if (list && movieList?.length == 0) {
            setMovieList(list)
        } else if (list && movieList?.length != 0) {
            setMovieList([...movieList, ...list])
        }
    },[resultAnimeList])

    return {movieList, errorAnimeList, handleScrollView}
}

export default useMovieList

