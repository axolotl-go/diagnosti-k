import alliances from "../data/alliances.json";

const Alliances = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-max animate-infinite-scroll">
        <ul className="flex items-center [&_li]:mx-8 [&_img]:max-w-none">
          {alliances.data.map((alliance: any) => (
            <li key={alliance.name}>
              <img className="w-36" src={alliance.image} alt={alliance.name} />
            </li>
          ))}
        </ul>

        <ul
          className="flex items-center [&_li]:mx-8 [&_img]:max-w-none"
          aria-hidden="true"
        >
          <ul className="flex items-center [&_li]:mx-8 [&_img]:max-w-none">
            {alliances.data.map((alliance: any) => (
              <li key={alliance.name}>
                <img
                  className="w-36"
                  src={alliance.image}
                  alt={alliance.name}
                />
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Alliances;
