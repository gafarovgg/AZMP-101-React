import styles from "./index.module.scss"
import { MdOutlinePhone } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";



const Header = () => {
  return (
    <header>
        <div id={styles["header-top"]}>
            <div className="container">
                <div className={styles["header-top-inner"]}>
                    <div className={styles["header-contact"]}>
                        <span>
                        <MdOutlinePhone style={{fontSize:"14px", color:"#fff"}} />
                        </span>
                        <a href="tel:+748 383 23 14">+748 383 23 14</a>
                    </div>

                    <nav>
                        <ul>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Customer service</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <div className={styles["header-middle"]}>
            <div className="container">
                <div className={styles["middle-inner"]}>
                    <div className={styles["logo"]}>
                        <a href="#">ChicCharry</a>
                    </div>

                    <div className={styles["search"]}>
                        <input type="text" name="" id={styles["search-input"]} placeholder="Search all product" />
                        <IoIosSearch className={styles["search-icon"]}/>
                    </div>

                    <div className={styles["header-basket"]}>
                        <span>
                            <FaUser className={styles["basket-icon"]} />
                            <a href="#">Sign Up</a>
                        </span>

                        <span>
                            <FaHeart className={styles["basket-icon"]}/>
                            <a href="#">Wishlist</a>
                        </span>

                        <span>
                            <GiShoppingBag className={styles["basket-icon"]}/>
                            <a href="#">Basket</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles["header-bottom"]}>
            <div className="container">
            <nav>
                <ul>
                    <li><a href="#">Evening bags</a></li>
                    <li><a href="#">Shoulder bag</a></li>
                    <li><a href="#">Backpack</a></li>
                    <li><a href="#">Handbag</a></li>
                    <li><a href="#">Postman bag</a></li>
                    <li><a href="#">Belt bags</a></li>
                </ul>
            </nav>
            </div>
        </div>
    </header>
  )
}

export default Header

