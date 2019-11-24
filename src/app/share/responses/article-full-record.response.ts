import { TextClass } from '../text-class.enum';

export interface ArticleFullRecordResponse {
    id: number;
    textClass: TextClass;
    title: string;
    text: string;
}
