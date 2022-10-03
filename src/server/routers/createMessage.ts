import { t } from '../trpc';
import { z } from 'zod';
import message from '../../models/Message';
import dbConnect from '../../utils/dbConnect';

export const createMessageRouter = t.router({
  createMessage: t.procedure
    .input(
      z.object({
        message: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        dbConnect();
        const newMessage = await message.create(input);

        return newMessage;
      } catch (err) {
        return err;
      }
    }),
});
