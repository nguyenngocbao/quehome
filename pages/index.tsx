import { getProperties } from '@/features/common/API/getProperties';
import FeaturedProperties from '@/features/Home/components/FeaturedProperties';
import HeroBanner from '@/features/Home/components/HeroBanner';
import MeetTheTeam from '@/features/Home/components/MeetTheTeam';
import Partners from '@/features/Home/components/Partners';
import Testimonials from '@/features/Home/components/Testimonials';
import DefaultLayout from '@/features/Layout/DefaultLayout';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export default function Home({
  featuredProperties,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DefaultLayout
      title="QUEHOME"
      description='QueHome.vn - Đối tác tin cậy trong giao dịch bất động sản toàn quốc'
    >
      <HeroBanner />
      <Testimonials />
      {/* <FeaturedProperties featuredProperties={featuredProperties} /> */}
      <MeetTheTeam />
      {/* <Partners /> */}
      
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const properties = await getProperties(3);
  return {
    props: { featuredProperties: properties },
  };
};
