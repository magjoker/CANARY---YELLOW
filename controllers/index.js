const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashRoutes = require('./dashRoutes');

router.use('/', homeRoutes);
router.use("/dash", dashRoutes);
router.use('/api', apiRoutes);

module.exports = router;
