import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Lightbulb, Search, Zap, ArrowRight, Sparkles, Eye, Target, Microscope, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse delay-500"></div>
      </div>
      {/* Header */}
      <header className="relative z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Brain className="h-8 w-8 text-primary animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-md"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">yanchat</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105">
                AI Detect
              </a>
              <a href="#research" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105">
                Deep Research
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105">
                About
              </a>
              <Button size="sm" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Sparkles className="h-6 w-6 text-primary mr-2 animate-spin" />
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-sm"></div>
            </div>
            <span className="text-sm font-medium text-primary animate-pulse">AI-Powered Innovation with DeepSeek Technology</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            AI Detect & Deep Research{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block mt-2">
              Nano Banana Scale Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
            Revolutionary <strong className="text-primary">AI detect technology</strong> powered by <strong className="text-primary">DeepSeek algorithms</strong> for 
            conducting <strong className="text-primary">deep research</strong> at the <strong className="text-primary">nano banana</strong> scale. 
            Transform your research capabilities with intelligent AI assistance that sees beyond the surface.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="text-lg px-10 py-7 transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-primary to-primary/80">
              Start AI Detection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-7 transition-all duration-300 hover:scale-105 hover:shadow-lg border-2">
              Explore Deep Research
            </Button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10x</div>
              <div className="text-sm text-muted-foreground">Faster AI Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Research Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Data Points Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">DeepSeek Processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Advanced AI Detect & DeepSeek Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience revolutionary <strong className="text-primary">deep research</strong> capabilities with our 
            <strong className="text-primary"> AI detect</strong> technology, precision-engineered for 
            <strong className="text-primary"> nano banana</strong> scale discoveries through 
            <strong className="text-primary"> DeepSeek</strong> algorithms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 group">
            <CardHeader className="text-center">
              <div className="relative mx-auto mb-4">
                <Eye className="h-16 w-16 text-primary group-hover:animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg group-hover:bg-primary/30 transition-all duration-300"></div>
              </div>
              <CardTitle className="text-xl mb-3">AI Detect Vision</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Revolutionary <strong>AI detect</strong> algorithms that identify patterns invisible to traditional analysis, 
                enabling breakthrough discoveries in research and innovation.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 group">
            <CardHeader className="text-center">
              <div className="relative mx-auto mb-4">
                <Search className="h-16 w-16 text-primary group-hover:animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg group-hover:bg-primary/30 transition-all duration-300"></div>
              </div>
              <CardTitle className="text-xl mb-3">Deep Research Engine</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Conduct comprehensive <strong>deep research</strong> across vast datasets with intelligent synthesis, 
                uncovering connections and insights at the molecular level.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 group">
            <CardHeader className="text-center">
              <div className="relative mx-auto mb-4">
                <Microscope className="h-16 w-16 text-primary group-hover:animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg group-hover:bg-primary/30 transition-all duration-300"></div>
              </div>
              <CardTitle className="text-xl mb-3">Nano Banana Precision</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Analyze data at the <strong>nano banana</strong> scale with unprecedented precision, 
                revealing insights in the smallest details that drive major innovations.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 group">
            <CardHeader className="text-center">
              <div className="relative mx-auto mb-4">
                <Cpu className="h-16 w-16 text-primary group-hover:animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg group-hover:bg-primary/30 transition-all duration-300"></div>
              </div>
              <CardTitle className="text-xl mb-3">DeepSeek Intelligence</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Powered by advanced <strong>DeepSeek</strong> technology for strategic insights and 
                long-term research planning that evolves with your discoveries.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Technology Section */}
      <section id="research" className="relative z-10 bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Revolutionary DeepSeek Methodology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our proprietary approach combines <strong className="text-primary">AI detect</strong> technology with 
                <strong className="text-primary"> DeepSeek</strong> algorithms for unparalleled research depth and precision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Precision AI Detection</h3>
                    <p className="text-muted-foreground">
                      Our <strong>AI detect</strong> algorithms identify patterns and anomalies with 
                      <strong> nano banana</strong> precision, revealing insights invisible to conventional analysis.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">DeepSeek Intelligence</h3>
                    <p className="text-muted-foreground">
                      <strong>DeepSeek</strong> technology goes beyond surface-level analysis to uncover 
                      fundamental relationships and generate breakthrough insights.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Research Synthesis</h3>
                    <p className="text-muted-foreground">
                      Transform complex data into actionable insights through our advanced 
                      <strong> deep research</strong> methodology and intelligent synthesis engines.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                  <div className="text-center">
                    <Brain className="h-20 w-20 text-primary mx-auto mb-6 animate-pulse" />
                    <h3 className="text-2xl font-bold mb-4">Research Accelerator</h3>
                    <p className="text-muted-foreground mb-6">
                      Experience the power of combined <strong>AI detect</strong>, <strong>deep research</strong>, 
                      and <strong>DeepSeek</strong> technologies working together.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">∞</div>
                        <div className="text-muted-foreground">Data Sources</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">⚡</div>
                        <div className="text-muted-foreground">Real-time Analysis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Ready to Experience AI Detect & DeepSeek?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Join the next generation of researchers using <strong className="text-primary">AI detect technology</strong> and 
              <strong className="text-primary"> DeepSeek algorithms</strong> for revolutionary <strong className="text-primary">deep research</strong> at 
              the <strong className="text-primary">nano banana</strong> scale. Transform your research capabilities today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-xl px-12 py-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-primary to-primary/80">
                Start AI Detection Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-12 py-8 transition-all duration-300 hover:scale-105 hover:shadow-lg border-2">
                Explore DeepSeek Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-muted/20">
              <p className="text-sm text-muted-foreground mb-4">Trusted by researchers worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <span className="text-lg font-semibold">🔬 Research Labs</span>
                <span className="text-lg font-semibold">🏛️ Universities</span>
                <span className="text-lg font-semibold">🏢 Tech Companies</span>
                <span className="text-lg font-semibold">🧪 Innovation Centers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t py-16 bg-gradient-to-br from-background to-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Brain className="h-8 w-8 text-primary" />
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-sm"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">yanchat</span>
                <span className="text-sm text-muted-foreground">- AI Detect & Deep Research</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Revolutionary <strong>AI detect</strong> and <strong>deep research</strong> platform powered by 
                <strong> DeepSeek</strong> technology for <strong>nano banana</strong> scale innovation and discovery.
              </p>
              <div className="flex space-x-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">AI Detect</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Deep Research</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">DeepSeek</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Nano Banana</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">AI Detection Technology</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Deep Research Engine</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">DeepSeek Algorithms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Nano Scale Analysis</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Yzlab AI</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Research Team</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Innovation Lab</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-muted/20">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 Yzlab AI. All rights reserved. | AI Detect • Deep Research • DeepSeek • Nano Banana Innovation
            </div>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">AI Ethics</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
