import { SchemaElement } from "./schema-element.interface";

export interface ISchema {
    id: number;
    name: string;
    elements: SchemaElement[];
}