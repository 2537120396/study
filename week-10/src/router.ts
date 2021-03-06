import * as Router from 'koa-router'

import areaRouter from './routers/area.router'
import albumRouter from './routers/album.router'
import IUsermRouter from './routers/user.router'
const router = new Router()
router.use(areaRouter.routes())
router.use(albumRouter.routes())
router.use(IUsermRouter.routes())
export default router