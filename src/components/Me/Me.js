import React, { useEffect } from 'react';
import { Rating } from 'react-simple-star-rating'

function Me() {



  return (
    <main className="Me">
        <h1>Hi, I'm Ryan. 👨🏽‍💻 </h1>
        <p> I'm currentely a student at Queens College (CUNY) looking to finish my degree in December 2022!</p>
        <p> Currentely I'm over at theCoderSchool helping students learn a variety of coding languages, as well as the beauty of logic and programming!</p>

        <div className="skills">
          <p> My current skill set looks something like:</p>
          <Rating ratingValue={4} initialValue={4} />
        </div>

    </main>
  );
}

export default Me;
