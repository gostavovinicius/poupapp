import { IconSavings } from '../icons'
import { ProgressBar } from '../ProgressBar'
import styles from './savingstats.module.css'

export const SavingStats = ({ percent }) => {
    return (
        <div className={styles.container}>
            <p>
                <IconSavings /> Economizar
            </p>
            <ProgressBar percent={percent} />
        </div>
    )
}