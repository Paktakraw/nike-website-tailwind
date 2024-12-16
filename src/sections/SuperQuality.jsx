import React from "react";
import Button from "../assets/components/Button";
import { shoe8 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We Provide You
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            Super Quality
          </span>{" "}
          Shoes
        </h2>{" "}
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem
          aperiam illo porro hic ipsum vero officiis, velit dolore unde
          inventore distinctio, fugiat culpa delectus.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          rerum modi dolorem recusandae nihil provident.
        </p>
        <div className="mt-11">
          <Button label="View Detail" iconURL={arrowRight} />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          className="object-contain"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
