import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="/post.png" alt='' fill className={styles.img} /> 
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius animi hic, doloribus harum impedit nam asperiores consectetur, eligendi perferendis totam error eum similique dolorum, at blanditiis debitis consequatur quos architecto!</p>
            <Link href="../blog/post" className={styles.link}>READ MORE</Link>
        </div>
    </div>
  )
};

export default PostCard;