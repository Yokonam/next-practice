import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.scss'

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {/* <Image src="/img/unnamed.png" alt="" width={288} height={288}></Image> */}
        {title}
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href="/">トップページ</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
