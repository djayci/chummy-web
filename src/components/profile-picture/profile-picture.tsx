import { FC } from "react"
import Styles from './profile-picture.module.css';

interface Props {
    src: string
}

export const ProfilePicture: FC<Props> = ({ src }) => {
    return (
        <img
            alt="profile_picture"
            className={Styles.profile_picture}
            loading="lazy"
            src={src}
        />
    )
}