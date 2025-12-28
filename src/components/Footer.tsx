import { Link } from "react-router-dom";
import { Book, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Book className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-semibold">L'IA des Champs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Une autre culture de l'IA — Le livre qui réconcilie intelligence artificielle et agriculture.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/glossaire" className="text-muted-foreground hover:text-foreground transition-colors">
                  Glossaire (251 termes)
                </Link>
              </li>
              <li>
                <Link to="/auteurs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Les auteurs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Éditeur</h3>
            <a 
              href="https://www.editions-france-agricole.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Éditions France Agricole
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} L'IA des Champs. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}