import ReactTooltip from "react-tooltip";
import map from "../utils/map";

const Map = ({ handleClick, report, locale }) => {
  const colors = {
    1000: "#062C66",
    500: "#154794",
    200: "#2B69C7",
    100: "#3074DC",
    50: "#4B92FC",
    20: "#9BC2FD",
    10: "#C3DBFE",
    0: "#E1EDFE",
  };

  const matchColor = (total) =>
    colors[
      Math.max(...Object.keys(colors).filter((nb) => nb <= Number(total)))
    ];

  return (
    <section
      width={1010}
      height={670}
      className="hidden lg:flex w-full items-center justify-center min-h-screen relative mx-4"
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
