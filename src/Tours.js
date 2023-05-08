import { useEffect, useState } from "react";
import Title from "./Title";
import { toursFunc } from "./data";
const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    (async () => {
      var data = await toursFunc();
      console.log({ data });
      setTours(data);
    })();
  }, []);

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle={"tours"} />

      <div className="section-center featured-center">
        {tours.map((tour) => (
          <article className="tour-card" key={tour.id}>
            <div className="tour-img-container">
              <img src={tour.image.default} className="tour-img" alt="" />
              <p className="tour-date">{tour.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{tour.title}</h4>
              </div>
              <p>{tour.info}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {tour.location}
                </p>
                <p>{tour.duration}</p>
                <p>{tour.cost}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Tours;
