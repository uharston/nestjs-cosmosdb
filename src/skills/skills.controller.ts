import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
  }

  @Get('seed')
  seedSkills() {
   Logger.log('Method Execution', 'SkillsController.seedSkills');
   const sampleSkills = [
   {
     "skillName": "Java"
   },
   {
     "skillName": "React"
   },
   {
     "skillName": "Ruby"
   },
   {
     "skillName": "Javascript"
   },
   {
     "skillName": "Perl"
   },
   {
     "skillName": "Scala"
   },
   {
     "skillName": "Rust"
   },
   {
     "skillName": "PHP"
   },
   {
     "skillName": "Nest.js"
   },
   {
     "skillName": "Node.js"
   },
   {
     "skillName": "Next.js"
   },
   {
     "skillName": "Ruby on Rails"
   },
   {
     "skillName": "GraphQl"
   },
   {
     "skillName": "Azure"
   },
   {
     "skillName": "Git"
   },
   {
     "skillName": "AWS"
   },
   {
     "skillName": "Rest"
   },
   {
     "skillName": "Jango"
   },
   {
     "skillName": "MSSQL"
   },
   {
     "skillName": "Postgre"
   },
   {
     "skillName": "Elixir"
   },
   {
     "skillName": "Kafka"
   },
   {
     "skillName": "React.js"
   },
   {
     "skillName": "Rails"
   },
   {
     "skillName": "Firebase"
   },
   {
     "skillName": "hellpo"
   },
   {
     "skillName": "Lawncare"
   },
   {
     "skillName": "Automotive"
   },
   {
     "skillName": "Bootstrap"
   },
   {
     "skillName": "Apollo"
   },
   {
     "skillName": "fdsf"
   },
   {
     "skillName": "Appolo"
   },
   {
     "skillName": "Node"
   },
   {
     "skillName": "Nest"
   },
   {
     "skillName": "NEstjs"
   },
   {
     "skillName": "nextjs"
   },
   {
     "skillName": "nodejs"
   },
   {
     "skillName": "Consulting"
   },
   {
     "skillName": "Risk"
   },
   {
     "skillName": "Entrepreneurship "
   },
   {
     "skillName": "Innovation"
   },
   {
     "skillName": "Strategy"
   },
   {
     "skillName": "Enterprise Sales"
   },
   {
     "skillName": "Compliance"
   },
   {
     "skillName": "Engagement Management"
   },
   {
     "skillName": "Client Management"
   },
   {
     "skillName": "afd"
   },
   {
     "skillName": "procurement"
   },
   {
     "skillName": "enterprise architecture"
   },
   {
     "skillName": "sales"
   },
   {
     "skillName": "supplier risk"
   },
   {
     "skillName": "supplier performance"
   },
   {
     "skillName": "operations"
   },
   {
     "skillName": "Yarn"
   },
   {
     "skillName": "GSAP"
   },
   {
     "skillName": "Figma"
   },
   {
     "skillName": "Adobe"
   },
   {
     "skillName": "CSS"
   },
   {
     "skillName": "SASS"
   },
   {
     "skillName": "HTML"
   },
   {
     "skillName": "NGINX"
   },
   {
     "skillName": "Docker"
   },
   {
     "skillName": "CRM"
   },
   {
     "skillName": "ERM"
   },
   {
     "skillName": "Markets"
   },
   {
     "skillName": "Risk Models"
   },
   {
     "skillName": "61"
   },
   {
     "skillName": "kfnds"
   },
   {
     "skillName": "Redis"
   },
   {
     "skillName": "Socket.io"
   },
   {
     "skillName": "BCP"
   },
   {
     "skillName": " kafka"
   },
   {
     "skillName": "project management"
   },
   {
     "skillName": "Apache Spark"
   },
   {
     "skillName": "Apache Kafka"
   },
   {
     "skillName": "SQL Server"
   },
   {
     "skillName": "HP Network Node Manager"
   },
   {
     "skillName": "Apache"
   }
  ]
    const skills = JSON.stringify(sampleSkills)
    return  this.skillsService.seedSkills(sampleSkills);
 }

  @Get()
  findAll() {
    Logger.log('Method Execution', 'SkillsController.seedSkills');
    return this.skillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillsService.update(+id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(+id);
  }


}
