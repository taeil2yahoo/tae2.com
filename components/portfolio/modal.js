import styles from "./modal.module.scss"

import ProjectLink from "./projectLink"

export default function Modal(props) {
  const { project, setShowModal } = props

  return <div className={styles.container}>
    <div className={styles.background}  onClick={() => setShowModal(false)} />
    <div className={styles.modal}>
      <div className={styles.content}>
        <div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          {project.tags.map((tag) => <div className={styles.tag} key={styles.tag}>{tag}</div> )}
        </div>
        <div>
          <ProjectLink link={project.link} />
          {project.screenshots.map((screenshot) => <img src={screenshot} key={screenshot} />)}
        </div>
      </div>
      <div className={styles.closeButton} onClick={() => setShowModal(false)}>&times;</div>
    </div>
  </div>
}