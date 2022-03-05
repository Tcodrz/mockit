export type SchemaElementType = 'id' | 'string' | 'number' | 'boolean';

export interface SchemaElement {
    type: SchemaElementType;
    fieldName: string;
}