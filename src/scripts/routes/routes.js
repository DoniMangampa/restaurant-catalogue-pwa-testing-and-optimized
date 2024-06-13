import ListRestaurant from '../views/pages/list-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
import FooterBar from '../views/pages/footer-bar';

const routes = {
  '/': ListRestaurant, // default page
  '/list-restaurant': ListRestaurant,
  '/detail/:id': Detail,
  '/like': Like,
  '/footer-bar': FooterBar,
};

export default routes;
