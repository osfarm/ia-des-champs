import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, Users, BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Book className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-semibold text-foreground">L'IA des Champs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Accueil
          </Link>
          <Link
            to="/lexique"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Lexique Vidéo
          </Link>
          <Link
            to="/glossaire"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Glossaire
          </Link>
          <Link
            to="/auteurs"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Auteurs
          </Link>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a
              href="https://www.editions-france-agricole.fr/site/gfaed/NOUVEAUTES__gfaed.4464.46142__/fr/boutique/produit.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Acheter le livre
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background p-4 space-y-4">
          <Link
            to="/"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/lexique"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Lexique Vidéo
          </Link>
          <Link
            to="/glossaire"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Glossaire
          </Link>
          <Link
            to="/auteurs"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Auteurs
          </Link>
          <Button asChild className="w-full bg-primary">
            <a href="https://www.editions-france-agricole.fr" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-4 w-4" />
              Acheter le livre
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
