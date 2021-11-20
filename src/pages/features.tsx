import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import FeatureSection from '@/components/feature-section';
import Footer from '@/components/footer';

export default function Features() {
  return (
    <Page>
      <NextSeo
        title="STARTD - Features"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <main>
        <FeatureSection />
      </main>
      <Footer />
    </Page>
  );
}
