import { PromptModule, Question } from 'inquirer';

declare const prompt: BrieflyPrompt.Prompt;
export = prompt;

declare namespace BrieflyPrompt {
  export type Prompt = PromptModule;
  export interface BrieflyPrompt<T> extends Question<T> {
    extension?: 'string';
  }
}
