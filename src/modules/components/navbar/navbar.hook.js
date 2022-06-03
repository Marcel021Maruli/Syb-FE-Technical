import {  useContext } from "react";
import { AnilistContext } from "modules/services/AnilistProvider";
import { debounce } from 'lodash'

const useNavbar = () => {
  const { setSearch } = useContext(AnilistContext);

  const debouncedSearch = debounce(async (criteria) => {
    setSearch(await criteria);
  }, 1500);
  
  const handleChange = (e) => {
    debouncedSearch(e.target.value);
  }

  return {
    handleChange
  };
};

export default useNavbar;
