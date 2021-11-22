import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  console.log({  dbName: process.env.AZURE_COSMOS_DB_NAME,
    endpoint: process.env.AZURE_COSMOS_DB_ENDPOINT,
    key: process.env.AZURE_COSMOS_DB_KEY,})
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
// az cosmosdb keys list  --name cosmos-indietech-uat-eastus-001 --resource-group rg-indietech-database-001 --subscription "Azure subscription 1" --type keys
// az cosmosdb keys list --name MyCosmosDBDatabaseAccount --resource-group MyResourceGroup --subscription MySubscription --type keys
