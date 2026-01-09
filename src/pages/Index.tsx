import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookOpen, Search, Users, Leaf, Brain, Tractor } from "lucide-react";
import { glossaryTerms } from "@/data/glossary";

const featuredTerms = glossaryTerms.slice(0, 6);

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background py-20 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Leaf className="h-4 w-4" />
                Nouveau livre disponible
              </div>

              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">L'IA des Champs</h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-6">Une autre culture de l'IA</p>

              {/* Video */}
              <div className="mb-8 max-w-2xl mx-auto">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/V_y7FJJnHLw"
                    title="L'IA des Champs - Présentation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Découvrez comment l'intelligence artificielle transforme l'agriculture. Un glossaire complet de 251
                termes pour comprendre les enjeux de demain.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="https://www.editions-france-agricole.fr" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Acheter le livre
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/glossaire">
                    <Search className="mr-2 h-5 w-5" />
                    Explorer le glossaire
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">251 termes expliqués</h3>
                  <p className="text-muted-foreground">
                    De l'algorithme aux zones humides, un glossaire complet pour maîtriser le vocabulaire de l'IA
                    agricole.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Tractor className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Agriculture & Technologie</h3>
                  <p className="text-muted-foreground">
                    Un pont entre le monde agricole et l'innovation technologique pour une transition réussie.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">3 experts réunis</h3>
                  <p className="text-muted-foreground">
                    Hervé Pillaud, Karine Cailleaux-Breton et David Joulin partagent leur expertise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Terms */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4">Aperçu du glossaire</h2>
              <p className="text-muted-foreground">Quelques termes parmi les 251 du livre</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTerms.map((term) => (
                <Link key={term.id} to={`/glossaire/${term.id}`}>
                  <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-2 text-primary">{term.mot}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">{term.definition}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/glossaire">Voir les 251 termes</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
