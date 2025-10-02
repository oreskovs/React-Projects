import { useEffect, useState } from "react";

export default function Main() {
  const [content, setContent] = useState({
    imgUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "Kaj ste be",
    bottomText: "Nuznici",
  });

  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  function getImage() {
    const randomNum = Math.floor(Math.random() * memes.length);
    const newMemeUrl = memes[randomNum].url;
    setContent((prevMeme) => ({
      ...prevMeme,
      imgUrl: newMemeUrl,
    }));
  }

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setContent((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={content.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={content.bottomText}
            onChange={handleChange}
          />
        </label>
        <button onClick={getImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={content.imgUrl} />
        <span className="top">{content.topText}</span>
        <span className="bottom">{content.bottomText}</span>
      </div>
    </main>
  );
}
