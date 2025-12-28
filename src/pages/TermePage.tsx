import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { getTermById, getAdjacentTerms } from "@/data/glossary";

export default function TermePage() {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/glossaire" replace />;
  }

  const term = getTermById(id);
  
  if (!term) {
    return <Navigate to="/glossaire" replace />;
  }

  const { prev, next } = getAdjacentTerms(id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-3xl">
          <Link 
            to="/glossaire" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au glossaire
          </Link>

          <Card className="bg-card border-border">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <BookOpen className="h-4 w-4" />
                <span>Page {term.page} du livre</span>
              </div>
              
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                {term.mot}
              </h1>
              
              <p className="text-lg leading-relaxed text-foreground">
                {term.definition}
              </p>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 gap-4">
            {prev ? (
              <Button asChild variant="outline" className="flex-1 justify-start">
                <Link to={`/glossaire/${prev.id}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span className="truncate">{prev.mot}</span>
                </Link>
              </Button>
            ) : (
              <div className="flex-1" />
            )}
            
            {next ? (
              <Button asChild variant="outline" className="flex-1 justify-end">
                <Link to={`/glossaire/${next.id}`}>
                  <span className="truncate">{next.mot}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}