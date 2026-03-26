import styles from "./projectLink.module.scss"

export default function ProjectLink(props) {
  const { link } = props

  return <div className={styles.container}>
    {link.image && <div className={styles.imageContainer}>
      <a href={`https://www.${link.url}`} target="_blank" rel="noreferrer"><img src={link.image} /></a>
    </div>}
    <div>
      <a href={`https://www.${link.url}`} target="_blank" rel="noreferrer"><h4>{link.title}</h4></a>
      <p>{link.description}</p>
      <p className={styles.link}>{link.url}</p>
    </div>
  </div>
}