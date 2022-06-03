import React from "react";

import Banner from "modules/components/banner";
import useMovieDetail from "./movieDetail.hooks";
import DetailContainer from "./components/detailContainer";

const MovieDetail = () => {
  const { data } = useMovieDetail();

  return (
    <>
      <div className='MovieDetail'>
        <DetailContainer
          src={data?.coverImage?.large}
          title={data?.title?.romaji}
          id={data?.id}
          description={data?.description}
        />
      </div>
    </>
  );
};

export default MovieDetail;
