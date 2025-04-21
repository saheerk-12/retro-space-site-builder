
const AboutSection = () => {
  return (
    <section id="who-we-are" className="py-24 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground mb-8">
              Retro Space Technical Services Co. L.L.C is your trusted partner for integrated building solutions since 2010.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>24/7 Emergency Support</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>10+ Years of Experience</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000" 
              alt="Modern building" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
