export interface IEventBus {
  emitEvent(pattern: string, message: any);
}
