import { FC } from 'react';
import { HostsSchema } from '../../services/hosts/hosts-schema';
import { ProfilePicture } from '../profile-picture/profile-picture';
import { Ribbon, RibbonIcons } from '../ribbon/ribbon';
import Styles from './catalog.module.css';

interface Props {
  entries: HostsSchema
}

export const Catalog: FC<Props> = ({
  entries
}) => {
  return (
    <ul className={Styles.catalog}>
      {entries.map(({ _id, firstName, isAvailableToday, lastName, profession, profilePicture }) => {
        return (
          <li key={_id} className={Styles.entry}>
            <div className={Styles.profile_picture_container}>
              <ProfilePicture src={profilePicture} />
              {isAvailableToday && (
                <Ribbon icon={RibbonIcons.TRENDING} text="disponível hoje" />
              )}
            </div>
            <h3 className={Styles.name}>
              {firstName} {lastName}
            </h3>
            <p className={Styles.profession}>{profession}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Catalog;
