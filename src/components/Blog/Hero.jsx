"use client";

import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Link from "next/link";

const Hero = ({ sliders, features }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container section-top">
      <div className="row">
        <div className="col-md-8 col-lg-8 col-sm-12 p-1 col-12">
          <Carousel id="carouselHero" activeIndex={index} onSelect={handleSelect} controls={false}>
            {sliders?.map((item, i) => {
              return (
                <Carousel.Item key={i}>
                  <Link href={`/details?id=${item["id"]}`}>
                    <img alt="img" className="w-100" src={item["image_1"]} />
                    <Carousel.Caption className="caption">
                      <h4>{item["title"]}</h4>
                      <p>{item["short_description"]}</p>
                    </Carousel.Caption>
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 p-1 col-6">
          <Link href={`/details?id=${features[0]["id"]}`} id="Hero" className="card h-100">
            <img alt="" className="card-img-top w-100 rounded-2" src={features[0]["image_2"]} />
            <div className="card-img-overlay d-flex align-items-end">
              <div className="caption">
                <h4>{features[0]["title"]}</h4>
                <p>{features[0]["short_description"]}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
