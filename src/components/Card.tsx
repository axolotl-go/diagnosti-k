import React from "react";

const Card = ({ sucursal, doctor, especialidad, image }: TypeDoctors) => {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl md:flex-row md:max-w-xl"
    >
      <img
        className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between md:p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">
          {doctor}
        </h5>
        <p className="mb-6 text-body">{especialidad}</p>
        <div>
          <button
            type="button"
            className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            {sucursal}
          </button>
        </div>
      </div>
    </a>
  );
};

export default Card;
