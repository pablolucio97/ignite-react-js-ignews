import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SignInButton() {

    const isLogged = true;

    return isLogged ? (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color='#04d361' />
            Pablo Silva
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color='#eda417' />
            SignIn with GitHub
        </button>
    )
}