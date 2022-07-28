import * as sst from '@serverless-stack/resources'

export function StorageStack({stack, app}: sst.StackContext) {
  // Create the DynamoDB table
  const table = new sst.Table(stack, 'Notes', {
    fields: {
      userId: 'string',
      noteId: 'string',
    },
    primaryIndex: {partitionKey: 'userId', sortKey: 'noteId'},
  })

  const bucket = new sst.Bucket(stack, 'Uploads', {
    cors: [
      {
        maxAge: '1 day',
        allowedOrigins: ['*'],
        allowedHeaders: ['*'],
        allowedMethods: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD'],
      },
    ],
  })

  return {
    table,
    bucket,
  }
}
