import Carousel from '@/components/Carousel';
import ContactForm from '@/components/Contact';
import Philosophy from '@/components/Philosophy';
import Reviews from '@/components/Reviews';

export default function Home() {  
  return (
    <main>
      <Carousel />
      <Philosophy />
      <Reviews />
      <ContactForm />
    </main>
  )
}
