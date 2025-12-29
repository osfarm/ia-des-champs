import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, BookOpen, Video, Hash } from "lucide-react";
import { lexiqueTerms, searchLexiqueTerms, getLexiqueTermsByPage, getLexiqueTermByIndex, getAvailablePages } from "@/data/lexique";

export default function Lexique() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pageFilter, setPageFilter] = useState<string>("");
  const [indexFilter, setIndexFilter] = useState<string>("");

  const filteredTerms = useMemo(() => {
    let results = lexiqueTerms;

    if (indexFilter) {
      const idx = parseInt(indexFilter);
      if (!isNaN(idx)) {
        const term = getLexiqueTermByIndex(idx);
        return term ? [term] : [];
      }
    }

    if (pageFilter) {
      const page = parseInt(pageFilter);
      if (!isNaN(page)) {
        results = getLexiqueTermsByPage(page);
      }
    }

    if (searchQuery) {
      results = results.filter(term =>
        term.mot.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return results;
  }, [searchQuery, pageFilter, indexFilter]);

  const availablePages = useMemo(() => getAvailablePages(), []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
              Lexique Vidéo
            </h1>
            <p className="text-muted-foreground">
              251 termes expliqués avec vidéos pour approfondir vos connaissances
            </p>
          </div>

          {/* Filtres */}
          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un terme..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="text-sm text-muted-foreground mb-1 block">
                  <BookOpen className="inline h-4 w-4 mr-1" />
                  Filtrer par page du livre
                </label>
                <Input
                  type="number"
                  placeholder="Ex: 11, 25, 50..."
                  value={pageFilter}
                  onChange={(e) => { setPageFilter(e.target.value); setIndexFilter(""); }}
                  min={Math.min(...availablePages)}
                  max={Math.max(...availablePages)}
                />
              </div>
              <div className="flex-1">
                <label className="text-sm text-muted-foreground mb-1 block">
                  <Hash className="inline h-4 w-4 mr-1" />
                  Rechercher par index
                </label>
                <Input
                  type="number"
                  placeholder="Ex: 1, 50, 100..."
                  value={indexFilter}
                  onChange={(e) => { setIndexFilter(e.target.value); setPageFilter(""); }}
                  min={1}
                  max={251}
                />
              </div>
              {(pageFilter || indexFilter || searchQuery) && (
                <div className="flex items-end">
                  <Button variant="outline" onClick={() => { setSearchQuery(""); setPageFilter(""); setIndexFilter(""); }}>
                    Réinitialiser
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Résultats */}
          <div className="text-sm text-muted-foreground mb-4">
            {filteredTerms.length} terme{filteredTerms.length > 1 ? "s" : ""} trouvé{filteredTerms.length > 1 ? "s" : ""}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((term) => (
              <Link key={term.id} to={`/lexique/${term.id}`}>
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        Page {term.page}
                      </span>
                      <span className="flex items-center gap-1">
                        <Hash className="h-3 w-3" />
                        Index {term.index}
                      </span>
                      {term.lienVideo && (
                        <span className="flex items-center gap-1 text-primary">
                          <Video className="h-3 w-3" />
                          Vidéo
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">{term.mot}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
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
