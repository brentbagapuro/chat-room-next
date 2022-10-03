import { t } from '../trpc';
import { greetingRouter } from './greeting';
import { createMessageRouter } from './createMessage';
import { getMessagesRouter } from './getMessages';

export const appRouter = t.mergeRouters(
  greetingRouter,
  createMessageRouter,
  getMessagesRouter
);

export type AppRouter = typeof appRouter;
