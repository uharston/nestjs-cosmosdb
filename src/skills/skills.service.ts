import { Container } from '@azure/cosmos';


import { InjectModel } from '@nestjs/azure-database';
import { Injectable, Logger } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';
@Injectable()
export class SkillsService {
  private logger = new Logger(this.constructor.name);

  constructor(
    @InjectModel(Skill) private readonly container: Container,
  ) {}
  create(createSkillDto: CreateSkillDto) {
    return 'This action adds a new skill';
  }

  async findAll(): Promise<Skill[]> {
    console.log({db: this.container.database, items: this.container.items})
    const querySpec = {
      query: 'SELECT * FROM c',
    };
    const results = await this.container.items
      .query<Skill>(querySpec, {})
      .fetchAll();
    this.logger.verbose(`Find By Id RUs: ${results.requestCharge}`);
    return results.resources;
  }

  findOne(id: number) {
    return `This action returns a #${id} skill`;
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }

  async seedSkills(skills: Skill[]) {
    return skills.map(async skill => { 
      const result = await this.container.items.create(skill);
      this.logger.verbose(`Seed RUs: ${result.requestCharge}`);
       return result.resource
    });
   
  }
}
