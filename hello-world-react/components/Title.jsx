import styles from './Title.module.css'

const Title = () => {
    return(
        <div>
            <h2 className={styles.title_style}>Título estilizado com CSS module</h2>
        </div>
    )
}

export default Title