import classNames from 'classnames/bind';
import styles from './Setting.module.scss';
import { BackIcon, EditIcon, HumanIcon, HouseIcon, PrivacyIcon, RingIcon } from '@/components/Icons/icons';
const cx = classNames.bind(styles);

function EditProfile() {
   return (
      <div className={cx('wrapper')}>
         <button className={cx('back-icon')}>
            <BackIcon />
         </button>
         <div className={cx('body-container')}>
            <div className={cx('title-container')}>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <HumanIcon width="3rem" height="3rem" /> <span className={cx('title')}>Manage Account</span>
               </div>
               <div className={cx('title-content')}>
                  <PrivacyIcon width="3rem" height="3rem" />
                  <span className={cx('title')}>Privacy</span>
               </div>
               <div className={cx('title-content')}>
                  <RingIcon width="3rem" height="3rem" /> <span className={cx('title')}>Push notifications</span>
               </div>
               <div className={cx('title-content')}>
                  <HouseIcon width="3rem" height="3rem" /> <span className={cx('title')}>Business account</span>
               </div>
            </div>
            <div className={cx('content-container')}>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
               <div className={cx('title-content')}>
                  <EditIcon width="3rem" height="3rem" /> <span className={cx('title')}>Edit Profile</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default EditProfile;
