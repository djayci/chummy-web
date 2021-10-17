import { GetStaticProps } from 'next'
import Catalog from '../src/components/catalog/catalog';
import { Hosts } from '../src/services/hosts/hosts';
import { HostsSchema } from '../src/services/hosts/hosts-schema';
import Styles from './index.module.css';

interface Props {
  catalog: HostsSchema
}

const Index = ({ catalog }: Props) => {

  return (
    <>
      <section className={Styles.catalog}>
        <h1>Trending 🔥</h1>
        <Catalog entries={catalog} />

        <h1>TV 📺</h1>
        <Catalog entries={[...catalog].reverse()} />
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      catalog: await Hosts.get()
    }
  };
}

export default Index;