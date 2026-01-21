import React, { useState, useEffect } from "react";

function CountryFlag() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("https://xcountries-backend.labs.crio.do/all");
        const data = await res.json();
        setCountry(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchdata();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Country Flags</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "10px"
        }}
      >
        {country.map((item) => (
          <div key={item.code} style={{ border: "1px solid black", padding: "8px" }}>
            <h4>{item.name}</h4>
            <img
              src={item.flag}
              alt={item.name}
              style={{ width: "100%", height: "100px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryFlag;
