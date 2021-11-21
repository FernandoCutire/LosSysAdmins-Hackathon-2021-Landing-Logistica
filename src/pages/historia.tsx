import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header-historia';
import Footer from '@/components/footer';

export default function Historia() {
  return (
    <Page>
      <NextSeo title="GABO | Historia" description="Como Gabo surge como solución en áreas rurales." />
      <Header />

      <Footer />
    </Page>
  );
}
