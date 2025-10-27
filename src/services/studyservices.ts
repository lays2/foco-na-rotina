// src/services/studyservices.ts (Adaptado para MongoDB)

import { getMongoRepository, MongoRepository } from 'typeorm';
import { Study } from '../models/studyModel';
import { ObjectId } from 'mongodb'; 

export class StudyService {
  private studyRepository: MongoRepository<Study>; 

  constructor() {
    
    this.studyRepository = getMongoRepository(Study);
  }

  async findAllStudies(): Promise<Study[]> {
    return this.studyRepository.find();
  }

  async findStudyById(id: string): Promise<Study | undefined> {
    try {
      const objectId = new ObjectId(id);
      const study = await this.studyRepository.findOne({ where: { _id: objectId } });
      return study === null ? undefined : study;
    } catch (error) {
      console.error("ID inválido para MongoDB:", error);
      return undefined;
    }
  }

  async createStudy(studyData: Partial<Study>): Promise<Study> {
    const newStudy = this.studyRepository.create(studyData);
    return this.studyRepository.save(newStudy);
  }

  async updateStudy(id: string, studyData: Partial<Study>): Promise<Study | undefined> {
    try {
      const objectId = new ObjectId(id);
      
      await this.studyRepository.update(objectId, studyData);
      
      return this.findStudyById(id); 
    } catch (error) {
      console.error("Erro ao atualizar estudo (MongoDB):", error);
      return undefined;
    }
  }

  async deleteStudy(id: string): Promise<void> {
    try {
      const objectId = new ObjectId(id);
      await this.studyRepository.delete(objectId);
    } catch (error) {
      console.error("Erro ao deletar estudo (MongoDB):", error);
      throw new Error("Falha ao deletar o estudo.");
    }
  }
}