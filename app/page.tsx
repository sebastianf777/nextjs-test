import { redirect } from 'next/navigation';

export default function Home() {
  console.log('Home page');

  return redirect('/login');
}
