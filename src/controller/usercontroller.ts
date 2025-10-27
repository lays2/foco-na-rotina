// src/controller/usercontroller.ts

import { Request, Response } from 'express';
import { StudyService } from '../services/studyservices'; 

export class UserController {
  deleteStudy(arg0: string, deleteStudy: any) {
      throw new Error('Method not implemented.');
  }
  updateStudy(arg0: string, updateStudy: any) {
      throw new Error('Method not implemented.');
  }
  createStudy(arg0: string, createStudy: any) {
      throw new Error('Method not implemented.');
  }
  getStudyById(arg0: string, getStudyById: any) {
      throw new Error('Method not implemented.');
  }
  getAllStudies(arg0: string, getAllStudies: any) {
      throw new Error('Method not implemented.');
  }
  private userService: StudyService; 
  constructor() {
    
    this.userService = new StudyService();
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.findAllStudies(); 
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message });
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.userService.findStudyById(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao buscar usuário', error: error.message });
    }
  }

  async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body; 
    try {
      res.status(201).json({ message: 'Usuário criado com sucesso!', user: { name, email } });
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    }
  }


}