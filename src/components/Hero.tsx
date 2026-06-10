import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 border-b border-border-custom">
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-4">
            <span className="text-[13px] text-primary font-bold uppercase tracking-wider">Independent Tech Reviews</span>
            <h1 className="text-[42px] font-extrabold text-secondary leading-tight">
              Master Your Home <br />
              <span className="text-primary">Red Light Therapy</span>
            </h1>
            <p className="max-w-[500px] text-base text-[#666666] leading-relaxed">
              We cut through the marketing hype to bring you lab-tested data, honest comparisons, and technical guides for high-performance recovery tech.
            </p>
            <div className="flex gap-4 pt-4">
              <Link to="/money/best-red-light-therapy-panels-under-300" className="bg-primary text-white px-6 py-3 rounded-[4px] font-bold text-sm uppercase tracking-wide hover:bg-secondary transition-all">
                View Best Picks
              </Link>
              <Link to="/guides" className="border border-border-custom text-secondary px-6 py-3 rounded-[4px] font-bold text-sm uppercase tracking-wide hover:bg-bg-custom transition-all">
                Learn the Tech
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-primary/20 via-blue-500/20 to-purple-500/20 rounded-full blur-[80px] animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000" 
              alt="Red Light Therapy Colors" 
              className="relative z-10 rounded-lg shadow-2xl border border-white/20 object-cover h-[500px] w-full mix-blend-lighten"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-transparent to-secondary/30 pointer-events-none rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


