import Carousel from '@/components/Carousel';
import ContactForm from '@/components/Contact';
import Philosophy from '@/components/Philosophy';
import Reviews from '@/components/Reviews';
import Secure from '@/components/Secure';

export default function Home() {  
  return (
    <main>
      <Carousel />
      <Secure />
      <Philosophy />
      <Reviews />
      <ContactForm />
    </main>
  )
}
