import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // global prefix
  app.setGlobalPrefix('api')

  await app.listen(5555, '0.0.0.0', () => {
    console.log('Server is Running!')
  })
}

bootstrap()
