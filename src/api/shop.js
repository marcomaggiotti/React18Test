/**
 * Mocking client-server processing
 */
import _products from "./products.json";
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createTodo } from '../graphql/mutations'
import { listTodos } from '../graphql/queries'

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const TIMEOUT = 100;
const initialState = { name: '', description: '' }

async function fetchTodos() {
  try {
    const todoData = await API.graphql(graphqlOperation(listTodos))
    const todos = todoData.data.listTodos.items
    console.log("todos")
    console.log(todos)
  } catch (err) { console.log('error fetching todos') }
}

export default {
  getProducts: (cb, timeout) =>
    setTimeout(() => cb(fetchTodos()), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT)
};
