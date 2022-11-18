import ReactTooltip from "react-tooltip";
import map from "../utils/map";

const Map = ({ handleClick, report, locale }) => {
  const matchColor = (total) => {
    if (total > 1000) return "#800026";
    if (total > 500) return "#BD0026";
    if (total > 200) return "#E31A1C";
    if (total > 100) return "#FC4E2A";
    if (total > 50) return "#FD8D3C";
    if (total > 20) return "#FEB24C";
    if (total > 10) return "#FED976";
    return "#FFEDA0";
  };

  return (
    <section className="hidden lg:flex w-full items-center justify-center min-h-screen">
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
      <ReactTooltip />
    </section>
  );
};

export default Map;
