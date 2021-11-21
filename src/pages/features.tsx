import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import FeatureSection from '@/components/feature-section';
import Footer from '@/components/footer';

export default function Features() {
  return (
    <Page>
      <NextSeo title="GABO - Funcionalidades" description="Observa las principales funcionalidades de Gabo" />
      <main>
        <FeatureSection />
      </main>
      <Footer />
    </Page>
  );
}
