import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const SearchInput = () => {
  return (
    <div>
      <input type="text" placeholder="search words" />
      <PrimaryButton>Search</PrimaryButton>
    </div>
  );
};
