import { IconBank } from '../icons'
import styles from './banksitem.module.css'

const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const BanksItem = ({ item }) => {

    return (
        <div className={styles.bank}>
            <div className={styles.details}>
                <IconBank />
                <p>{item.bank}</p>
            </div>
            <div className={styles.saldo}>
                <p>Saldo</p>
                <p>{formater.format(item.balance)}</p>
            </div>
        </div>
    )
}