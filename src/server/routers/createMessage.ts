import { t } from '../trpc';
import { z } from 'zod';
import dbConnect from '../../utils/dbConnect';
import message from '../../models/Message';

dbConnect()

export const createMessageRouter = async () => {
    createMessage: t.procedure
    .input(
      z.object({
        message: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const newMessage = await message.create(input);

        return {
          body: {
            message: 'ok',
            data: newMessage,
          },
        };
      } catch (err) {
        return {
          body: {
            message: err,
          },
        };
      }
    }),
}