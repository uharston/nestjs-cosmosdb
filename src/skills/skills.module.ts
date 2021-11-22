import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { Skill } from './entities/skill.entity';

@Module({
  imports: [AzureCosmosDbModule.forFeature([{ dto: Skill, collection: 'skills' }])],
  controllers: [SkillsController],
  providers: [SkillsService]
})
export class SkillsModule {}
