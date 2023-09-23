// Layout
import { HeaderOnly } from '@/layouts';
import { routesConfig } from '@/config';
// Pages
import Home from '@/components/Home';
import Following from '@/components/Following';
import Explore from '@/components/Explore';
import Live from '@/components/Live';
import Profile from '@/components/Profile';
import Upload from '@/components/Upload';
import DownloadPopUp from '@/components/DownloadPopUp';
import Comment from '@/components/Comment';
import LogIn from '@/components/LogIn';
import SignUp from '@/components/SignUp';
import Setting from '@/components/Setting';
// Route
const publicRoutes = [
   { path: routesConfig.home, component: Home },
   { path: routesConfig.following, component: Following },
   { path: routesConfig.explore, component: Explore },
   { path: routesConfig.live, component: Live },
   { path: routesConfig.profile, component: Profile },
   { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
   { path: routesConfig.download, component: DownloadPopUp, layout: null },
   { path: routesConfig.comment, component: Comment, layout: null },
   { path: routesConfig.login, component: LogIn, layout: null },
   { path: routesConfig.signup, component: SignUp, layout: null },
   { path: routesConfig.setting, component: Setting, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
