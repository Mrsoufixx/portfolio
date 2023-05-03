import React from "react";
import Slider from "react-slick";
import LineHead from "../../components/reusable/LineHead";
import { design, frontend, backend, outils } from "../../data/technologiesData";
import CardSkill from "../../components/reusable/CardSkill";

export default function Skills() {
  const sliderSettings = {
    className: "center",
    dots:true,
    centerMode: true,
    infinite: true,
    centerPadding: "5px",
    slidesToShow: 3,
    speed: 500,
  };
  //
  return (
    <section>
      <LineHead title="__.Skills" />
      <div className="skills-slider mt-20">
        <Slider {...sliderSettings}>
          <div key="backend-slide ">
            <CardSkill
              title="Backend"
              items={backend}
              keyprop="backend-slide"
            />
          </div>
          <div key="frontend-slide">
            <CardSkill
              title="Frontend"
              items={frontend}
              keyprop="frontend-slide"
            />
          </div>
          <div key="design-slide ">
            <CardSkill title="Design" items={design} keyprop="design-slide" />
          </div>
          <div key="outils-slide">
            <CardSkill title="Outils" items={outils} keyprop="outils-slide" />
          </div>
        </Slider>
      </div>
    </section>
  );
}
