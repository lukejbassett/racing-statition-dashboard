type SeasonDropdownProps = {
  season: string;
  changeSeason: (season: string) => void;
};

export function SeasonDropdown({ season, changeSeason }: SeasonDropdownProps) {
  const current = new Date().getFullYear();
  const start = 1950;

  // creates an array 1950 - current
  const years = Array.from(
    { length: current - start + 1 },
    // transform index into values
    // i = 0 => current  // i = 1 => current - 1
    (_, i) => current - i,
  );
  return (
    <select
      name="season"
      value={season}
      onChange={(e) => changeSeason(e.target.value)}
    >
      {years.map((y) => (
        <option key={y} value={y}>
          {y}
        </option>
      ))}
    </select>
  );
}
