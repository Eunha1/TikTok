import classNames from 'classnames/bind';
import styles from './LogIn.module.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button';
import { FaceBookIcon, GoogleIcon, TwitterIcon, WhatsAppIcon } from '../Icons/icons';
import { routesConfig } from '@/config';
import { useAuth } from '@/Service/Authentication';
const cx = classNames.bind(styles);

function LogIn() {
   const { login } = useAuth();
   const navigate = useNavigate();
   const [username, setUserName] = useState('');
   const [password, setPassword] = useState('');
   return (
      <div className={cx('wrapper')}>
         <div className={cx('login-container')}>
            <div className={cx('title')}>Welcome to TikTok</div>
            <div>
               <form>
                  <div className={cx('login-content')}>
                     <div className={cx('input-title')}>UserName</div>
                     <div className={cx('input-content')}>
                        <input
                           placeholder="Enter your username"
                           value={username}
                           onChange={(e) => setUserName(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className={cx('login-content')}>
                     <div className={cx('input-title')}>PassWord</div>
                     <div className={cx('input-content')}>
                        <input
                           type="password"
                           placeholder="Enter your password"
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
                     if (username && password) {
                        login();
                        navigate('/');
                     } else {
                        alert('Please enter usernamke and password');
                     }
                  }}
               >
                  Log in
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
               Don't have an account ?{' '}
               <Link to={routesConfig.signup}>
                  <span>Sign up</span>
               </Link>
            </div>
         </div>
      </div>
   );
}
export default LogIn;
