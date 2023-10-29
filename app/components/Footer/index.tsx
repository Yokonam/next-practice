import Link from 'next/link'
import styles from './Footer.module.scss'

type FooterProps = {
  title: string
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>© 2023</small>
    </footer>
  )
}

export default Footer
