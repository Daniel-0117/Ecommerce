const router = require('express').Router();
const apiRoutes = require('./api');
const productRoutes = require('./api/product-routes');
const categoryRoutes = require('./api/category-routes');
const tagRoutes = require('./api/tag-routes');

router.use('/api', apiRoutes);
router.use('/api/products', productRoutes);
router.use('/api/categories', categoryRoutes);
router.use('/api/tags', tagRoutes);

router.use((req, res) => {
  res.send("<h1>Oops! Wrong Way!</h1>")
});

module.exports = router;