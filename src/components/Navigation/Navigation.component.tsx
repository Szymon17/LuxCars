import "./Navigation.styles.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CustomLink from "../CustomLink/CustomLink.component";
import SearchBox from "../SearchBox/SearchBox.component";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <CustomLink animationType="bounce" to="/" cssClass="navigation__link">
          <FontAwesomeIcon icon={faHouse} />
        </CustomLink>
        <SearchBox />
        <div className="navigation__right-container">
          <CustomLink to="/oferts" cssClass="navigation__link">
            Oferty
          </CustomLink>
          <CustomLink animationType="bounce" to="/sumary" cssClass="navigation__link">
            <FontAwesomeIcon icon={faCartShopping} />
          </CustomLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
