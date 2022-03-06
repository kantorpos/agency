import React from 'react'
import styles from "../styles/Navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/">AV0CAD0 </Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/product/design">Design</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/product/design">Development</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/product/design">Photography</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/product/design">Production</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/product/design">Contact</Link>
                </li>

            </ul>
        </div>
    )
}

export default Navbar