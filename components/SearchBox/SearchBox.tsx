import css from "./SearchBox.module.css";

interface SearchBoxProps {
  search: string;
  onChange: (value: string) => void;
}

const SearchBox = ({ search, onChange }: SearchBoxProps) => {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={search}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default SearchBox;
