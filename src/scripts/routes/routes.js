import Daftar from '../views/page/daftar';
import Detail from '../views/page/detail';
import Like from '../views/page/like';

const routes = {
  '/': Daftar,
  '/daftar': Daftar,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
