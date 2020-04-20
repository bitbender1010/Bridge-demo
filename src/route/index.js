import router from 'express';
import emailController from '../controller/emailNotify'
const appRouter = router();

appRouter.get('/', (req, res)=>{
    return res.status(200).send({
        message: "welcome to bridge demo api"
    })
})

appRouter.post('/api/message/send', emailController.sendEmail)

export default appRouter;