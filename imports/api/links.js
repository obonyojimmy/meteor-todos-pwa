import { MiniDb } from 'meteor/obonyojimmy:minidb'

export const LinksCollection = new MiniDb.Collection('links');
export const TodosCollection = new MiniDb.Collection('todos');
export const TagsCollection = new MiniDb.Collection('tags');
export const CommentsCollection = new MiniDb.Collection('comments');
