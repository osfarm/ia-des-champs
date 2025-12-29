import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, BookOpen, Hash, Video } from "lucide-react";
import { getLexiqueTermById, getAdjacentLexiqueTerms } from "@/data/lexique";

function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
}

export default function LexiqueTermePage() {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/lexique" replace />;
  }

  const term = getLexiqueTermById(id);
  
  if (!term) {
    return <Navigate to="/lexique" replace />;
  }

  const { prev, next } = getAdjacentLexiqueTerms(id);
  const embedUrl = term.lienVideo ? getYouTubeEmbedUrl(term.lienVideo) : "";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-3xl">
          <Link 
            to="/lexique" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au lexique
          </Link>

          <Card className="bg-card border-border">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  Page {term.page}
                </span>
                <span className="flex items-center gap-1">
                  <Hash className="h-4 w-4" />
                  Index {term.index}
                </span>
                {term.lienVideo && (
                  <span className="flex items-center gap-1 text-primary">
                    <Video className="h-4 w-4" />
                    Vidéo disponible
                  </span>
                )}
              </div>
              
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                {term.mot}
              </h1>

              {embedUrl && (
                <div className="mb-6">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={embedUrl}
                      title={`Vidéo - ${term.mot}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              )}
              
              <p className="text-lg leading-relaxed text-foreground">
                {term.definition}
              </p>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center mt-8 gap-4">
            {prev ? (
              <Button asChild variant="outline" className="flex-1 justify-start">
                <Link to={`/lexique/${prev.id}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span className="truncate">{prev.mot}</span>
                </Link>
              </Button>
            ) : (
              <div className="flex-1" />
            )}
            
            {next ? (
              <Button asChild variant="outline" className="flex-1 justify-end">
                <Link to={`/lexique/${next.id}`}>
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
