import Example from "./Header";
import SearchBar from "./Search";
import { DefaultTable } from "./Table";

export default function Homepage() {
  return (
    <div className="App font-kanit-regular">
      <Example></Example>
      <SearchBar></SearchBar>
      <DefaultTable></DefaultTable>
    </div>
  );
}