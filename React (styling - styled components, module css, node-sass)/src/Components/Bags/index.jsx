import styles from "./index.module.scss";

import bug1 from "../../assets/images/bug-1.png";
import bug2 from "../../assets/images/bug-2.png";
import bug3 from "../../assets/images/bug-3.png";
import bug4 from "../../assets/images/bug-4.png";

const Bag = () => {
  return (
    <section>
      <div className={styles["bag"]}>
        <div className="container">
          <div className={styles["bag-inner"]}>
            <div className={styles["bag-card"]}>
              <h3>Shoulder bags</h3>
              <img src={bug1} alt="" />
            </div>

            <div className={styles["bag-card"]}>
              <h3>Shoulder bags</h3>
              <img src={bug2} alt="" />
            </div>

            <div className={styles["bag-card"]}>
              <h3>Shoulder bags</h3>
              <img src={bug3} alt="" />
            </div>

            <div className={styles["bag-card"]}>
              <h3>Shoulder bags</h3>
              <img src={bug4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bag;
