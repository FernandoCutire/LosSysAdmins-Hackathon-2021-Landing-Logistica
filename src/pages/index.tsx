import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="GABO | Educando Offline "
        description="Logística para la implementación de sistemas tecnológicos en áreas remotas"
      />
      <Header />
      <main>
        <VideoSection />
        <FeatureSection />
        <CasesSection />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
