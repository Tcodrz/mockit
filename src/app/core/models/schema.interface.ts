import { SchemaElement } from "./schema-element.interface";

export interface ISchema {
    name: string;
    elements: SchemaElement[];
}