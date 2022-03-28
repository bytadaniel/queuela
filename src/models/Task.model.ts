import { QueueReference } from './Queue.model'

/**
 * Абстрактный класс для любого провайдера в приложении
 * @TaskPayload - котекст текущей задачи
 * @TaskResult - результат обработчика родительской задачи
 */
export abstract class Task {
  /**
   * Название задачи, которое будет циркулировать внутри очереди задач
   */
  static taskName: string

  /**
   * Сылка на очередь задач, с которой будет работать текущая задача
   */
  static queue: QueueReference

  /**
   * Обработчик задачи
   * Когда очередь получает текущую задачу, она вызывает обработчик этой задачи
   * В обработчике выполняется основная логика задачи
   * Обработчик обязан вернуть какой-то результат для своих потомков
   */
  static handler: (context: any, payload: any) => Promise<unknown>
}
export interface TaskReference {
  /**
   * Название задачи, которое будет циркулировать внутри очереди задач
   */

  taskName: string,
  /**
   * Сылка на очередь задач, с которой будет работать текущая задача
   */

  queue: QueueReference,
  /**
   * Обработчик задачи
   * Когда очередь получает текущую задачу, она вызывает обработчик этой задачи
   * В обработчике выполняется основная логика задачи
   * Обработчик обязан вернуть какой-то результат для своих потомков
   */
  handler: (context: any, payload: any) => Promise<unknown>,

  new(): void
}