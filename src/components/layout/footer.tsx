import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from '@/components/logo';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Logo className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Your one-stop shop for the latest and greatest in electrical and technical gear.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:col-span-2 lg:text-left">
            <div>
              <p className="font-headline font-medium text-foreground">Shop</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/" className="text-muted-foreground hover:text-foreground">Products</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">New Arrivals</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Deals</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-headline font-medium text-foreground">About</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Press</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-headline font-medium text-foreground">Support</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Shipping & Returns</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-border/40" />
        
        <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} ElectroGear. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <Link href="#" className="text-muted-foreground hover:text-accent">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-accent">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-accent">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
