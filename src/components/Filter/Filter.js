import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/filter/filter-actions";
import { filtered } from "../../redux/filter/filter-selector";

// import styles from "./Filter.module.css";

export default function Filter() {
  const value = useSelector(filtered);
  const dispatch = useDispatch();

  return (
    <>
      <label>
        Find by name
        <input
          type="text"
          value={value}
          onChange={(e) => dispatch(getFilter(e.target.value))}
        ></input>
      </label>
    </>
  );
}
