import styles from "./index.module.scss"

import { FiTruck } from "react-icons/fi";
import { IoMdExit } from "react-icons/io";
import { MdOutlineLock } from "react-icons/md";
import { MdPayment } from "react-icons/md";




const Payment = () => {
  return (
    <section>
        <div className={styles["payment"]}>
            <div className="container">
                <div className={styles["payment-inner"]}>
                    <span>
                        <FiTruck className={styles["payment-icon"]} />
                        <p>Guaranteed delivery</p>
                    </span>
                        
                    <span>
                        <IoMdExit className={styles["payment-icon"]} />
                        <p>Do not come back</p>
                    </span>
                   
                    <span>
                        <MdOutlineLock className={styles["payment-icon"]} />
                        <p>Safe and secure shopping</p>
                    </span>

                    <span>
                        <MdPayment className={styles["payment-icon"]} />
                        <p>Payment at the door or online</p>
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Payment