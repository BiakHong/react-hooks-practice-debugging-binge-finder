import React from "react";

function Episode({eachEpisode}) {
  let { myEpisode } = eachEpisode;

  return (
    <div>
      Episode {myEpisode.number} - {myEpisode.name}
    </div>
  );
}

export default Episode;
