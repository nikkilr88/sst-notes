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

  const bucket = new sst.Bucket(stack, 'Uploads')

  return {
    table,
    bucket,
  }
}
