import * as sst from '@serverless-stack/resources'

export function MyStack({stack}: sst.StackContext) {
  const api = new sst.Api(stack, 'api', {
    routes: {
      'GET /': 'functions/lambda.handler',
    },
  })
  stack.addOutputs({
    ApiEndpoint: api.url,
  })
}
