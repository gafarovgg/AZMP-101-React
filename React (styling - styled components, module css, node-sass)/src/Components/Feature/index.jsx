import styles from "./index.module.scss";

import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

import bug1 from "../../assets/images/bug-1.png";
import bug2 from "../../assets/images/bug-2.png";
import bug3 from "../../assets/images/bug-3.png";
import bug4 from "../../assets/images/bug-4.png";
import { useEffect, useState } from "react";
import getAllProducts from "../../Services/service";

const Feature = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <section>
      <div className={styles["feature"]}>
        <div className="container">
          <div className={styles["feature-inner"]}>
            <h1>Featured Products</h1>

            <div className={styles["cards"]}>
              <div className={styles["card"]}>
                <div className={styles["card-image"]}>
                  <span className={styles["new"]}>NEW</span>
                  <span className={styles["wish"]}>
                    <FaRegHeart />
                  </span>
                  <img src={bug1} alt="" />
                </div>

                <div className={styles["card-text"]}>
                  <div className={styles["stars"]}>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                  </div>
                  <h3>
                    Shoulder Bag Leather Bag Leather undertakes laborious
                    physical physical{" "}
                  </h3>

                  <div className={styles["price"]}>
                    <h4 className={styles["current-price"]}>$130.00</h4>
                    <span>from $340.00</span>
                  </div>

                  <button className={styles["add-cart-btn"]}>
                    Add To Card
                  </button>
                </div>
              </div>

              <div className={styles["card"]}>
                <div className={styles["card-image"]}>
                  <span className={styles["new"]}>NEW</span>
                  <span className={styles["wish"]}>
                    <FaRegHeart />
                  </span>
                  <img src={bug2} alt="" />
                </div>

                <div className={styles["card-text"]}>
                  <div className={styles["stars"]}>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                  </div>
                  <h3>
                    Shoulder Bag Leather Bag Leather undertakes laborious
                    physical physical{" "}
                  </h3>

                  <div className={styles["price"]}>
                    <h4 className={styles["current-price"]}>$130.00</h4>
                    <span>from $340.00</span>
                  </div>

                  <button className={styles["add-cart-btn"]}>
                    Add To Card
                  </button>
                </div>
              </div>

              <div className={styles["card"]}>
                <div className={styles["card-image"]}>
                  <span className={styles["new"]}>NEW</span>
                  <span className={styles["wish"]}>
                    <FaRegHeart />
                  </span>
                  <img src={bug3} alt="" />
                </div>

                <div className={styles["card-text"]}>
                  <div className={styles["stars"]}>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                    <span>
                      <FaStar className={styles["rating"]} />
                    </span>
                  </div>
                  <h3>
                    Shoulder Bag Leather Bag Leather undertakes laborious
                    physical physical{" "}
                  </h3>

                  <div className={styles["price"]}>
                    <h4 className={styles["current-price"]}>$130.00</h4>
                    <span>from $340.00</span>
                  </div>

                  <button className={styles["add-cart-btn"]}>
                    Add To Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
