import ReactTooltip from "react-tooltip";
import map from "../utils/map";

const Map = ({ handleClick, report, locale }) => {
  const colors = {
    1000: "#800026",
    500: "#BD0026",
    200: "#E31A1C",
    100: "#FC4E2A",
    50: "#FD8D3C",
    20: "#FEB24C",
    10: "#FED976",
    0: "#FFEDA0",
  };

  const matchColor = (total) =>
    colors[
      Math.max(...Object.keys(colors).filter((nb) => nb <= Number(total)))
    ];

  return (
    <section
      width={1010}
      height={670}
      className="hidden lg:flex w-full items-center justify-center min-h-screen relative"
    >
      <svg className="block" width={1010} height={670}>
        {map.map((country) => (
          <path
            d={country?.path}
            data-tip={`${country?.country} - ${
              report?.countries?.find((c) => c?.code === country?.code)
                ?.total || 0
            } ${locale?.total}`}
            key={country?.code}
            title={country?.country}
            onClick={() => handleClick(country?.code)}
            fill={matchColor(
              report?.countries?.find((c) => c?.code === country?.code)
                ?.total || 0
            )}
            stroke="#ccc"
            style={{ cursor: "pointer", outline: "none" }}
          />
        ))}
      </svg>
      <div className="absolute bottom-0 left-0 m-4">
        <div className="flex flex-col items-start">
          {Object.keys(colors).map((i) => (
            <div className="flex flex-row items-center" key={i}>
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: colors[i] }}
              />
              <div className="ml-2 text-sm">{i}+</div>
            </div>
          ))}
        </div>
      </div>

      <ReactTooltip />
    </section>
  );
};

export default Map;
