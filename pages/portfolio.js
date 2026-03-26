import { useState } from "react"
import Head from "next/head";

import Preview from "../components/portfolio/preview"
import Modal from "../components/portfolio/modal"
import projects from "../files/projects"

import styles from './portfolio.module.css'

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false)
  const [modalProject, setModalProject] = useState()

  return <div className={showModal && styles.overflowHidden}>
    <Head>
      <title>Taeil&apos;s Portfolio</title>
      <meta
        name="description"
        content="Taeil's Portfolio"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className={styles.header}>Portfolio</h1>
    <div className={styles.container}>
      {projects.map((project) => {
        return <Preview
          project={project}
          onClick={() => {
            setShowModal(true)
            setModalProject(project)
          }}
          key={project.slug}
        />
      })}
      <div></div>
      <div></div>
    </div>
    {showModal && <Modal project={modalProject} setShowModal={setShowModal} />}
  </div>
}
