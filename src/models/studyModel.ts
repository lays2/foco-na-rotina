import mongoose, { Schema, Document } from 'mongoose';

export interface IStudy extends Document {
  title: string;
  description: string;
  duration: number;
}

const StudySchema = new Schema<IStudy>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true }
});

export const StudyModel = mongoose.model<IStudy>('Study', StudySchema);
