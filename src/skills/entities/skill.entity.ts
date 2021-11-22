import { CosmosPartitionKey } from "@nestjs/azure-database";

@CosmosPartitionKey('skills')
export class Skill {
    skillName: string
}
