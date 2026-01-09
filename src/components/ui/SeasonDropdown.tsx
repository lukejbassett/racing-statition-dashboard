interface SeasonDropdownProps {
  season: number;
  changeSeason: (season: number) => void;
  startYear?: number;
}

export default function SeasonDropdown({
  season,
  changeSeason,
  startYear = 1950,
}: SeasonDropdownProps) {
  const thisYear = new Date().getFullYear();
  const years = Array.from(
    { length: thisYear - startYear + 1 },
    (_, i) => startYear + i
  );

  return (
    <>
      <div>
        <label htmlFor="season">Season:</label>
        <select
          id="season"
          value={season}
          onChange={(e) => changeSeason(Number(e.target.value))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
