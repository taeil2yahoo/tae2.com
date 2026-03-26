import Link from 'next/link'
import { useState } from 'react'
import styles from './footer.module.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Footer() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  return <footer className={styles.footer}>
    <a className={styles.footerLink}>
      <CopyToClipboard text="taeil2@gmail.com"
        onCopy={() => {
          setShowTooltip(true)
          setTimeout(() => {
            setFadeOut(true)
          }, 4000)
          setTimeout(() => {
            setShowTooltip(false)
            setFadeOut(false)
          }, 5000)
        }}>
          <span>Email</span>
      </CopyToClipboard>
      <div className={`${styles.tooltip} ${showTooltip && styles.showTooltip} ${fadeOut && styles.fadeOut}`}>
        {/* <span> */}
        copied taeil2@gmail.com to clipboard
        {/* </span> */}
      </div>
    </a>
    <Link href="tel:375-949-8820">
      <a className={styles.footerLink}>Phone</a>
    </Link>
    <Link href="https://www.linkedin.com/in/taeil2/">
      <a className={styles.footerLink}>LinkedIn</a>
    </Link>
    <Link href="https://www.facebook.com/taeil2">
      <a className={styles.footerLink}>Facebook</a>
    </Link>
    {/* <Link href="https://taeil2.notion.site/Eddy-728e9e0c7a3c40a2a5b5239652cd716f">
      <a className={styles.footerLink}>Eddy</a>
    </Link> */}
    {/* <Link href="/maps">
      <a className={styles.footerLink}>Maps</a>
    </Link> */}
  </footer>
}