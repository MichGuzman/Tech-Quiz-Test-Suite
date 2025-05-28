import { IQuestion, Question } from '../models/Question.js';
import { Request, Response } from 'express';

export const getRandomQuestions = async (_req: Request, res: Response) => {
  try {
    const count = await Question.countDocuments();
    console.log(`✔️ Found ${count} questions in the database`);

    const questions = await Question.aggregate<IQuestion>([
      { $sample: { size: 10 } },
      { $project: { __v: 0 } }
    ]);

    console.log(`✔️ Questions returned:`, questions.length);
    res.status(200).json(questions);
  } catch (err: any) {
    console.error('❌ Error in getRandomQuestions:', err);
    res.status(500).json({ error: err.message });
  }
};
