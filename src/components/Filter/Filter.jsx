import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setFilter } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          onChange={handleChange}
          className={styles.searchInput}
          type="text"
          id="search"
          value={value}
          placeholder="Search something.."
        />
      </div>
    </div>
  );
};
