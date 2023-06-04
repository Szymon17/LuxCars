import "./SearchBox.styles.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const SearchBox = () => {
  return (
    <div className="searchBox">
      <motion.input whileFocus={{ size: 1.2, boxShadow: "5px 5px 5px -1px black" }} type="text" className="searchBox__input" />
      <FontAwesomeIcon className="searchBox__ico" icon={faSearch} />
    </div>
  );
};

export default SearchBox;
