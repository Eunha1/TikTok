import classNames from 'classnames/bind';
import styles from './Setting.module.scss';
import { BackIcon, EditIcon, HumanIcon, HouseIcon, PrivacyIcon, RingIcon } from '@/components/Icons/icons';
import Image from '../Images';
import Button from '../Button';
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
               <div className={cx('edit-profile')}>
                  <div className={cx('label-content')}>Edit your profile</div>
                  <div className={cx('edit-profile-container')}>
                     <div className={cx('edit-avatar')}>
                        <Image src="#" className={cx('image')} />
                        <div className={cx('edit-icon')}>
                           <EditIcon />
                        </div>
                     </div>
                     <div className={cx('edit-content')}>
                        <div className={cx('edit-name')}>
                           <span className={cx('subtitle')}>Nickname</span>
                           <input />
                        </div>
                        <div className={cx('edit-name')}>
                           <span className={cx('subtitle')}>Name</span>
                           <input />
                        </div>
                        <div className={cx('edit-bio')}>
                           <span className={cx('subtitle')}>Bio</span>
                           <textarea />
                        </div>
                        <div className={cx('submit-button')}>
                           <Button outline>Cancel</Button>
                           <Button primary>Save</Button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={cx('manage-account')}>
                  <div className={cx('label-content')}>Manage Account</div>
                  <div className={cx('sublabel')}>Account control</div>
                  <div className={cx('delete-account')}>
                     <span>Delete account</span> <button>Delete</button>
                  </div>
               </div>
               <div className={cx('privacy')}>
                  <div className={cx('label-content')}>Privacy</div>
                  <div className={cx('sublabel')}>Discoverability</div>
                  <div className={cx('active-private')}>
                     <span>Private account</span>
                     <button></button>
                  </div>
                  <div className={cx('note')}>
                     With a private account, only users you approve can follow you and watch your videos. Your existing
                     followers won't be affected.
                  </div>
               </div>
               <div className={cx('notifications')}>
                  <div className={cx('label-content')}>Push notifications</div>
                  <div className={cx('sublabel')}>Desktop notifications</div>
                  <div className={cx('allow-browser')}>
                     <span>Allow in browser</span>
                  </div>
                  <div className={cx('note')}>
                     Stay on top of notifications for likes, comments, the latest videos, and more on desktop. You can
                     turn them off anytime.
                  </div>
               </div>
               <div className={cx('business-account')}>
                  <div className={cx('label-content')}>Business account</div>
                  <div className={cx('sublabel')}>Business account</div>
                  <div className={cx('active-account')}>
                     <span> Active account</span>
                  </div>
                  <div className={cx('note')}>
                     Access marketing tools & exclusive features through your business account to better connect with
                     viewers.
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default EditProfile;
