import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp, Mail, Linkedin, Twitter, Globe } from 'lucide-react';
import BeesAndBombsAnimation from '@/components/BeesAndBombsAnimation';

const Index = () => {
  const [isContactExpanded, setIsContactExpanded] = useState(false);

  return (
    <div className="relative min-h-screen font-mono overflow-hidden">
      <BeesAndBombsAnimation />
      <div className="relative z-10 max-w-3xl mx-auto space-y-12 p-8">
        <section>
          <h1 className="text-5xl font-bold mb-6 glitch-text text-[#FADE29]">Hi, I'm Magnus</h1>
          <Card className="bg-black/80 backdrop-blur-md border-[#FADE29] text-[#FADE29] p-6">
            <p className="text-lg leading-relaxed">
              I like technical stuff - stuff I struggle to understand and that sounds like a far-flung artifact from a utopian Type III civilization on the Kardashev scale. That generally means DeepTech, HealthTech, AI/ML, and Dev Tooling. I like it when founders have large scale, long-term ambitions that will change industries and worlds.
            </p>
            <Separator className="my-4 bg-[#FADE29]" />
            <p className="text-lg leading-relaxed">
              I joined byFounders in 2022. Before that, I led the data and product teams at Natural Cycles (a FemTech company making a birth control app), where I built deep learning models to predict fertility based on time series data.
            </p>
            <Separator className="my-4 bg-[#FADE29]" />
            <p className="text-lg leading-relaxed">
              I also worked at the Boston Consulting Group in Australia and Switzerland for a few years, and during university I founded and ran a startup accelerator and co-working space.
            </p>
            <Separator className="my-4 bg-[#FADE29]" />
            <p className="text-lg leading-relaxed">
              I enjoy hiking in the mountains, kitesurfing, and playing the Irish Bouzouki.
            </p>
            <Separator className="my-4 bg-[#FADE29]" />
            <p className="text-lg leading-relaxed">
              I give 10% of my income to charities in the Effective Altruism space via Giving What We Can.
            </p>
          </Card>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-6 glitch-text text-[#FADE29]">What I do</h2>
          <Card className="bg-black/80 backdrop-blur-md border-[#FADE29] text-[#FADE29] p-6">
            <p className="text-lg leading-relaxed">
              I work with byFounders, an early stage VC fund investing in companies with ties to the New Nordics (this means the Nordic and Baltic countries). We invest a few hundred €k to a few million € at pre-seed and seed stage.
            </p>
          </Card>
        </section>

        <section>
          <Button
            onClick={() => setIsContactExpanded(!isContactExpanded)}
            className="w-full bg-[#FADE29] text-black hover:bg-[#FADE29]/80 font-bold text-lg py-6"
          >
            Contact me {isContactExpanded ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
          </Button>
          {isContactExpanded && (
            <Card className="bg-black/80 backdrop-blur-md border-[#FADE29] p-6 mt-4">
              <div className="space-y-4">
                <a href="mailto:magnus@byfounders.vc" className="flex items-center text-[#FADE29] hover:underline">
                  <Mail className="mr-2" /> magnus@byfounders.vc
                </a>
                <a href="https://www.linkedin.com/in/magnushambleton/" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#FADE29] hover:underline">
                  <Linkedin className="mr-2" /> Magnus Hambleton
                </a>
                <a href="https://twitter.com/MagnusHambleton" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#FADE29] hover:underline">
                  <Twitter className="mr-2" /> @MagnusHambleton
                </a>
                <a href="https://www.analogmantra.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#FADE29] hover:underline">
                  <Globe className="mr-2" /> analogmantra.com
                </a>
              </div>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
};

export default Index;
