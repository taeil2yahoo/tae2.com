import styles from "./preview.module.scss";

export default function Preview(props) {
  const { project, onClick } = props;

  return <div className={styles.preview}>
      <div className={`${styles.imageContainer} ${project.previewBorder && styles.bordered}`}>
        <img
          src={project.previewImage}
          onClick={onClick}
        />
      </div>
      <p onClick={props.onClick}>{project.name}</p>
    </div>
}
