import styles from "./Banner.module.css"

const Banner = (props) => {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>  
            <span className={styles.title1}>Coffee</span>
            <span className={styles.title2}>Connoisseuir</span>
        </h1>
        <p className={styles.subTitle}>Discover your best Coffee shops</p>
        <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
    
    </div>
    )
        
}

export default Banner;