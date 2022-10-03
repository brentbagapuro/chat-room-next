import { t } from '../trpc';
import { z } from 'zod';
import message from '../../models/Message';
import dbConnect from '../../utils/dbConnect';

export const msgRouter = t.router({
  list: t.procedure.query(async () => {
    try {
      dbConnect();
      const messages = await message.find();

      return messages;
    } catch (err) {
      return err;
    }
  }),
  add: t.procedure
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
