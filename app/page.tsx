import Layout from "@/components/layout/layout";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SabiBid - Auction Marketplace</title>
        <meta
          name="description"
          content="Turn your extra items into opportunities"
        />
      </Head>

      <Layout>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        {/* <CategoriesSection /> */}
        <NewsletterSection />
      </Layout>
    </>
  );
};

export default Home;
