import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState([]);

  const getQuoteRandom = async () => {
    const data = await fetch("https://www.breakingbadapi.com/api/quote/random ");
    const quote = await data.json();
    setQuote(quote);
  };

  useEffect(() => {
    getQuoteRandom();
  }, []);
  return(
    <div className="card-quote">
      <div className="quote">
        <blockquote>
          <p className="quote-text">{quote.quote}</p>
        </blockquote>
        <p className="author">{quote.author}</p>
      </div>

      <button onClick={() => getQuoteRandom()}>Next</button>
    </div>
  )
};

export default Quotes;
