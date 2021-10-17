import { FC } from "react";
import Styles from './ribbon.module.css';

export enum RibbonIcons {
    TRENDING = "⚡"
}

interface Props {
    text: string;
    icon: RibbonIcons
}

export const Ribbon: FC<Props> = ({ text, icon }) => {
    return (
        <div className={Styles.ribbon}>
            {text}<span>{icon}</span>
        </div>
    )
}