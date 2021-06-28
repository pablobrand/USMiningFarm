/* eslint-disable react/no-unescaped-entities */
import styles from './MessageBlurb.module.css'

const MessageBlurb = () => {
    return (
        <div className={styles.messageBlurb}>
            <h5> MESSAGE </h5>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book{' '}
            </p>
        </div>
    )
}

export default MessageBlurb
