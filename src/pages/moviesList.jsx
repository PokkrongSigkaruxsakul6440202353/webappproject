import React, { useEffect, useState } from "react";
import { getmoviess } from "../connectAPI/callmovies";

function MoviesList() {
  const [moviess, setmoviess] = useState([]);

  const fetchmoviess = async () => {
    try {
      const data = await getmoviess();
      setmoviess(data);
    } catch (err) {
      console.error("โหลดข้อมูลล้มเหลว:", err);
    }
  };

  useEffect(() => {
    fetchmoviess();
  }, []);

  return (
    <div>
      <h2> รายชื่อหนัง</h2>
      {moviess.map((movies) => (
        <div key={movies.no}>
          {movies.no} {movies.name} {movies.detail} {movies.picture}
        </div>
      ))}
    </div>
  );
}

export default MoviesList;