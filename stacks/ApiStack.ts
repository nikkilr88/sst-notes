import * as sst from '@serverless-stack/resources'
import {StorageStack} from './StorageStack'

export function ApiStack({stack, app}: sst.StackContext) {
  const {table} = sst.use(StorageStack)

  // Create the API
  const api = new sst.Api(stack, 'Api', {
    defaults: {
      authorizer: 'iam',
      function: {
        permissions: [table],
        environment: {
          TABLE_NAME: table.tableName,
          STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        },
      },
    },
    routes: {
      'POST /notes': 'functions/create.main',
      'GET /notes/{id}': 'functions/get.main',
      'GET /notes': 'functions/list.main',
      'PUT /notes/{id}': 'functions/update.main',
      'DELETE /notes/{id}': 'functions/delete.main',
      'POST /billing': 'functions/billing.main',
    },
  })

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  })

  // Return the API resource
  return {
    api,
  }
}
