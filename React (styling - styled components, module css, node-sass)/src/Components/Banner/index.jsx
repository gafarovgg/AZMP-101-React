import styles from "./index.module.scss"

import banner from "../../assets/images/banner-image.png"


const Banner = () => {
  return (
    <section>
        <div className={styles["banner"]}>
            <div className="container">

                <div className={styles["banner-inner"]}>
                    <div className={styles["slider"]}>
                        <h3>30% off</h3>
                        <h1>Handbag products</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content expound the actual teachings of the great explorer  </p>

                        <button className={styles["shop-now-btn"]}>Shop now</button>
                    </div>

                    <div className={styles["banner-image"]}>
                        <img src={banner} alt="" />
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Banner