import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to='/'>Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Raviranjan</p>
    </header>
  );
};

export default Header;
