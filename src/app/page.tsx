import Biography from '@components/pageBlocks/biography';
import Contact from '@components/pageBlocks/contact';
import Kindness from '@components/pageBlocks/kindness';
import Masthead from '@components/pageBlocks/masthead';

export default async function Page() {

  return <>
    <Masthead />
    <Biography />
    <Contact />
    <Kindness />
  </>;
}
