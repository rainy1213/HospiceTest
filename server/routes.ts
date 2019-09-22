import * as express from 'express';

import UserPreferenceCtrl from './controllers/userpreference';

export default function setRoutes(app) {

  const router = express.Router();

  const userpreferenceCtrl = new UserPreferenceCtrl();

  // UserPreferences
  router.route('/userpreferences').get(userpreferenceCtrl.getAll);
  router.route('/userpreferences/count').get(userpreferenceCtrl.count);
  router.route('/userpreference').post(userpreferenceCtrl.insert);
  router.route('/userpreference/:id').get(userpreferenceCtrl.get);
  router.route('/userpreference/:id').put(userpreferenceCtrl.update);
  router.route('/userpreference/:id').delete(userpreferenceCtrl.delete);


  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
