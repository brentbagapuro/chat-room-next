import { t } from '../trpc';
import message from '../../models/Message';
import dbConnect from '../../utils/dbConnect';

export const getMessagesRouter = t.router({
  getMessages: t.procedure.query(async () => {
    try {
      dbConnect();
      const messages = await message.find();

      return messages;
    } catch (err) {
      return err;
    }
  }),
});
