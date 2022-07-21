import {StorageStack} from './StorageStack'
import {App} from '@serverless-stack/resources'

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
  app.stack(StorageStack)
}