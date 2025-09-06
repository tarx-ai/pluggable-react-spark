import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, GitBranch, GitCommit, GitMerge, Star, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Github className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Plug & Play Git</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Documentation</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4" variant="secondary">
            <Zap className="h-4 w-4 mr-1" />
            Lightning Fast Setup
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Git Repository Management
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline your development workflow with plug-and-play Git templates, 
            automated setup scripts, and intelligent repository management tools.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Github className="h-5 w-5 mr-2" />
              Start Building
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Plug & Play Git?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <GitBranch className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Smart Branching</CardTitle>
                <CardDescription>
                  Automated branch management with intelligent naming conventions and workflow optimization.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <GitCommit className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Commit Templates</CardTitle>
                <CardDescription>
                  Pre-configured commit message templates and hooks for consistent code quality.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <GitMerge className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Merge Strategies</CardTitle>
                <CardDescription>
                  Intelligent merge conflict resolution and automated deployment pipelines.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Repository Templates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "React Starter", desc: "Modern React app with TypeScript", stars: 1242 },
              { name: "Node.js API", desc: "RESTful API with Express", stars: 856 },
              { name: "Full Stack", desc: "Complete MERN stack setup", stars: 2103 },
              { name: "Python ML", desc: "Machine learning project structure", stars: 634 },
              { name: "Vue.js PWA", desc: "Progressive web app template", stars: 478 },
              { name: "Microservices", desc: "Docker-based microservices", stars: 1337 }
            ].map((template, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4" />
                      {template.stars}
                    </div>
                  </div>
                  <CardDescription>{template.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Use Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Repositories Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Template Downloads</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Ready-to-use Templates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Github className="h-6 w-6 text-primary" />
              <span className="font-semibold">Plug & Play Git</span>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">Documentation</a>
              <a href="#" className="hover:text-foreground">Templates</a>
              <a href="#" className="hover:text-foreground">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
