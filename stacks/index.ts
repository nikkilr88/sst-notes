import {StorageStack} from './StorageStack'
import {ApiStack} from './ApiStack'
import {App} from '@serverless-stack/resources'
import {AuthStack} from './AuthStack'

/**
 * @param {App} app
 */
export default function main(app: App) {
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'services',
    bundle: {
      format: 'esm',
    },
  })
  app.stack(StorageStack).stack(ApiStack).stack(AuthStack)
}
