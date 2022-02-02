import { Provider } from '../../models/Provider.model'

/**
 * Асинхронный хук, который может использоваться для любых действий после того,
 * как все компоненты системы инициализованы
 */
export async function onProviderReady (providers: Provider[]) {
  for (const provider of providers) {
    await provider.ready()
  }
}