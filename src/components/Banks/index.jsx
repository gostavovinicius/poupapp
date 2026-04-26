import { IconWallet } from "../icons"
import { BanksItem } from "../BanksItem"
import styles from './banks.module.css'
import { Button } from "../Button"

export const Banks = () => {
    const banks = [
        { "bank": "Anybank", "balance": 1200 },
        { "bank": "Bytebank", "balance": 800 },
        { "bank": "Switch Bank", "balance": 1800 }
    ]

    return (
        <>

            <ul className={styles.list}>
                {banks.map((banksItem, index) => {
                    return (
                        <li key={index}>
                            <BanksItem item={banksItem} />
                        </li>
                    )
                })}
            </ul>

            <div className={styles.actions}>
                <Button>
                    <IconWallet />Adicionar conta
                </Button>
            </div>

        </>
    )
}