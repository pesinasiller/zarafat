
import styles from "./page.module.scss";

export default function Posts() {   
    return (    
        <div className={styles.posts}>      
            <h1 className={styles["posts__title"]}>Posts</h1>
            <p className={styles["posts__subtitle"]}>Latest stories and product updates will appear here.</p>
        </div>    
    );  
}