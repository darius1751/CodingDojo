export type PriorityNote = 'Low' | 'Middle' | 'High'
export interface Note {
    id: string;
    description: string;
    priority: PriorityNote;
}