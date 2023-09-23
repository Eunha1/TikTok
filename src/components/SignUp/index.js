import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button';
import { FaceBookIcon, GoogleIcon, TwitterIcon, WhatsAppIcon } from '../Icons/icons';
import { routesConfig } from '@/config';
import { useAuth } from '@/Service/Authentication';
const cx = classNames.bind(styles);
function SignUp() {
   const { login } = useAuth();
   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [rePassword, setRePassword] = useState('');
   const [userInfo, setUserInfo] = useState([]);
   return (
      <div className={cx('wrapper')}>
         <div className={cx('signup-container')}>
            <div className={cx('title')}>Sign up for TikTok</div>
            <div>
               <form>
                  <div className={cx('signup-content')}>
                     <div className={cx('input-title')}>Email</div>
                     <div className={cx('input-content')}>
                        <input
                           placeholder="Enter your email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className={cx('signup-content')}>
                     <div className={cx('input-title')}>Password</div>
                     <div className={cx('input-content')}>
                        <input
                           type="password"
                           placeholder="Enter your password"
                           value={rePassword}
                           onChange={(e) => setRePassword(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className={cx('signup-content')}>
                     <div className={cx('input-title')}>Password</div>
                     <div className={cx('input-content')}>
                        <input
                           type="password"
                           placeholder="Re-Enter your password "
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>
                  </div>
               </form>
               <Button
                  primary
                  className={cx('btn-login')}
                  onClick={() => {
                     if (email && password && rePassword) {
                        if (password === rePassword) {
                           setUserInfo((prev) => {
                              const newInfo = [...prev, { email: email, password: password }];
                              const newInfoJSON = JSON.stringify(newInfo);
                              localStorage.setItem('user', newInfoJSON);
                              return newInfo;
                           });
                           login();
                           navigate('/setting');
                        } else {
                           alert('Password and re Password are not the same ');
                        }
                     } else {
                        alert('Please fill all fields');
                     }
                  }}
               >
                  Sign up
               </Button>
            </div>
            <div className={cx('divider-container')}>
               <span className={cx('span-divider')}>OR</span>
            </div>
            <div className={cx('another-login')}>
               <div className={cx('facebook')}>
                  <FaceBookIcon fill_1="#0075FA" fill_2="white" />
                  <span>Continue with Facebook</span>
               </div>
               <div className={cx('google')}>
                  <GoogleIcon />
                  <span>Continue with Google</span>
               </div>
               <div className={cx('whatsApp')}>
                  <WhatsAppIcon fill_1="white" fill_2="#25D366" />
                  <span>Continue with WhatsApp</span>
               </div>
               <div className={cx('twitter')}>
                  <TwitterIcon />
                  <span>Continue with Twitter - X</span>
               </div>
            </div>
            <div className={cx('suggest')}>
               Already have an account ?{' '}
               <Link to={routesConfig.login}>
                  <span>Log in</span>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default SignUp;
