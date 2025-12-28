import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search } from "lucide-react";
import { glossaryTerms, getTermsByLetter, getAvailableLetters, searchTerms } from "@/data/glossary";

export default function Glossaire() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const availableLetters = useMemo(() => getAvailableLetters(), []);
  const termsByLetter = useMemo(() => getTermsByLetter(), []);

  const filteredTerms = useMemo(() => {
    if (searchQuery) {
      return searchTerms(searchQuery);
    }
    if (selectedLetter) {
      return termsByLetter[selectedLetter] || [];
    }
    return glossaryTerms;
  }, [searchQuery, selectedLetter, termsByLetter]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl font-bold mb-4">Glossaire</h1>
            <p className="text-muted-foreground">
              251 termes pour comprendre l'IA au service de l'agriculture
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un terme..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedLetter(null);
                }}
                className="pl-10"
              />
            </div>
          </div>

          {/* Alphabet Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => {
                setSelectedLetter(null);
                setSearchQuery("");
              }}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                !selectedLetter && !searchQuery
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Tous
            </button>
            {availableLetters.map((letter) => (
              <button
                key={letter}
                onClick={() => {
                  setSelectedLetter(letter);
                  setSearchQuery("");
                }}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  selectedLetter === letter
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-center text-sm text-muted-foreground mb-8">
            {filteredTerms.length} terme{filteredTerms.length > 1 ? "s" : ""} trouvé{filteredTerms.length > 1 ? "s" : ""}
          </p>

          {/* Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTerms.map((term) => (
              <Link key={term.id} to={`/glossaire/${term.id}`}>
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-primary">{term.mot}</h3>
                      <span className="text-xs text-muted-foreground shrink-0">p.{term.page}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {term.definition}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}