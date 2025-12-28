import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { User } from "lucide-react";

const auteurs = [
  {
    nom: "Hervé Pillaud",
    role: "Agriculteur et auteur",
    bio: "Hervé Pillaud est agriculteur en Vendée et passionné par les enjeux du numérique dans le monde agricole. Auteur de plusieurs ouvrages sur l'agriculture connectée, il s'intéresse depuis de nombreuses années à la transformation digitale du secteur agricole et à l'impact des nouvelles technologies sur les pratiques agricoles."
  },
  {
    nom: "Karine Cailleaux-Breton",
    role: "Experte en innovation agricole",
    bio: "Karine Cailleaux-Breton apporte son expertise sur les questions d'innovation et de transformation numérique dans le secteur agricole. Son regard croisé entre technologie et agriculture permet d'éclairer les enjeux de l'adoption de l'intelligence artificielle par les acteurs du monde rural."
  },
  {
    nom: "David Joulin",
    role: "Spécialiste des technologies",
    bio: "David Joulin complète le trio d'auteurs avec sa connaissance approfondie des technologies de l'information et de la communication. Son expertise technique permet de vulgariser les concepts complexes de l'intelligence artificielle pour les rendre accessibles aux professionnels de l'agriculture."
  }
];

export default function Auteurs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl font-bold mb-4">Les auteurs</h1>
            <p className="text-muted-foreground">
              Trois experts réunis pour décrypter l'IA au service de l'agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {auteurs.map((auteur) => (
              <Card key={auteur.nom} className="bg-card border-border">
                <CardContent className="pt-8 text-center">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="h-12 w-12 text-muted-foreground" />
                  </div>
                  
                  <h2 className="font-serif text-xl font-semibold mb-2">{auteur.nom}</h2>
                  <p className="text-sm text-primary font-medium mb-4">{auteur.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {auteur.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}