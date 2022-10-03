import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const result = trpc.greeting.greeting.useQuery({ name: 'brent' });

  if (!result.data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="home">
      <h1>{result.data.text}</h1>
    </div>
  );
}
