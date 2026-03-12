import { useSeasonData } from "../api/hooks";
export function Test() {
  const { data } = useSeasonData("2025");

  console.log(data);
  return <></>;
}
