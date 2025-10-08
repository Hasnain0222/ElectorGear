import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';

const { placeholderImages } = placeholderData;
const aboutImage = placeholderImages.find(img => img.id === 'docking-station-1');

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <Image
              alt="Our Workshop"
              src={aboutImage?.imageUrl || "https://picsum.photos/seed/18/800/600"}
              data-ai-hint={aboutImage?.imageHint || "tech workspace"}
              className="absolute inset-0 h-full w-full object-cover"
              fill
            />
          </div>

          <div className="lg:py-24">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              About ElectroGear
            </h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2024, ElectroGear was born from a passion for technology and a desire to make high-quality electrical and technical gear accessible to everyone. We believe that the right tools can unlock incredible potential, whether you're a professional, a hobbyist, or just starting your tech journey.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our mission is to curate a collection of the best products on the market, from powerful computing components to innovative smart devices. We rigorously test and select each item in our catalog to ensure it meets our high standards of performance, reliability, and value. At ElectroGear, we're not just selling products; we're empowering creators, builders, and innovators.
            </p>
            <a
              href="/"
              className="mt-8 inline-block rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-primary-foreground hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
            >
              Explore Our Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
