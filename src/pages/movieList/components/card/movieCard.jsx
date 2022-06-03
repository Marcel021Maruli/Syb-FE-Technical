import React, { memo } from "react";
import Card from "modules/components/card";
import { Col, Row } from "antd";

const MovieCard = memo(({ movies }) => {
  return (
    <>
      <div className='MovieCard'>
        <Row>
          {movies ? (
            movies.map((movie, idx) => {
              const {
                id,
                coverImage,
                title,
                seasonYear,
                episodes,
                duration,
                genres,
                averageScore,
              } = movie;
              const { romaji } = title;
              const alt = `${romaji} - ${id}`;
              const shortDescription = `
                Title : ${romaji}
                Season Year : ${seasonYear}
                Episodes : ${episodes} 
                Average Score : ${averageScore}
                Genres : ${genres}
                Duration : ${duration}
              `;

              return (
                <Col sm={24} md={12} lg={8} xl={6} key={idx}>
                  <Card
                    img={coverImage.large}
                    alt={alt}
                    avatar={coverImage.medium}
                    title={romaji}
                    description={shortDescription}
                    id={id}
                  />
                </Col>
              );
            })
          ) : (
            <h1>No Data Found</h1>
          )}
        </Row>
      </div>
    </>
  );
});

export default MovieCard;
