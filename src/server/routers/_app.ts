import { t } from '../trpc';
import { greetingRouter } from './greeting';

export const appRouter = t.router({
  greeting: greetingRouter,
});

export type AppRouter = typeof appRouter;
