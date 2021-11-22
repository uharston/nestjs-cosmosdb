import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { Module } from '@nestjs/common';
import { SkillsModule } from './skills/skills.module';
require('dotenv').config();

console.log({  dbName: process.env.AZURE_COSMOS_DB_NAME_SKILL,
  endpoint: process.env.AZURE_COSMOS_DB_ENDPOINT,
  key: process.env.AZURE_COSMOS_DB_KEY,})

@Module({
  imports: [  
    AzureCosmosDbModule.forRoot({
    dbName: process.env.AZURE_COSMOS_DB_NAME_SKILL,
    endpoint: process.env.AZURE_COSMOS_DB_ENDPOINT,
    key: process.env.AZURE_COSMOS_DB_KEY,
  }), 
  SkillsModule]

})
export class AppModule {
  
}
