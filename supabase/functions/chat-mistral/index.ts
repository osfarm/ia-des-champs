import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const BOOK_CONTEXT = `Tu es un assistant expert sur le livre "L'IA des Champs - Une autre culture de l'IA" écrit par Hervé Pillaud, Karine Cailleaux-Breton et David Joulin, publié par les Éditions France Agricole.

RÉSUMÉ DU LIVRE:
Ce livre explore l'intelligence artificielle générative appliquée à l'agriculture. Il est né du projet GAIA (Générative Artificial Intelligence for Agriculture) et propose une approche de coconstruction de l'IA avec les agriculteurs.

THÈMES PRINCIPAUX:
1. Apprendre la langue des champs - Introduction à l'IA agricole et ses usages
2. Construire ensemble une culture de l'IA - Compréhension, appropriation et gouvernance
3. S'approprier l'IA - Open source, interaction et éthique
4. Appliquer via GAIA - Infrastructure ouverte pour une IA agricole partagée
5. Repenser la relation au savoir et à l'autonomie
6. Les avancées scientifiques structurantes
7. Former à la hauteur des enjeux
8. Défis: compétitivité, simplification, transition écologique
9. Vulnérabilités: anticipation, résilience et justice alimentaire
10. Réguler pour mieux agir

LES AUTEURS:
- Hervé Pillaud: Agriculteur pendant plus de 40 ans, figure reconnue de la transformation numérique agricole, président du groupe Établières, cofondateur de Tech Élevage et GAIA
- Karine Cailleaux-Breton: Experte en stratégie numérique et innovation, membre de La Ferme Digitale
- David Joulin: Expert technique en IA et développement, cofondateur d'OSFarm (Open Source Farm)

CONCEPTS CLÉS:
- GAIA: Projet d'infrastructure ouverte pour l'IA agricole
- OSFarm: Open Source Farm - plateforme open source
- La Ferme Digitale: Écosystème d'innovation agricole
- Souveraineté numérique agricole
- Coconstruction avec les agriculteurs
- IA générative au service de l'agriculture
- Agroécologie et transition écologique

ÉVÉNEMENTS MARQUANTS MENTIONNÉS:
- Premier hackathon mondial dédié à l'IA générative en agriculture (SIA Paris, février 2025)
- Premier café IA agricole (Tech Élevage, novembre 2024)
- Participation au Sommet pour l'action sur l'IA (Paris Peace Forum, février 2025)

Tu dois répondre de manière claire, pédagogique et engageante. Si une question dépasse le cadre du livre, tu peux l'indiquer tout en essayant d'apporter des éléments de contexte pertinents.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const MISTRAL_API_KEY = Deno.env.get('MISTRAL_API_KEY');
    
    if (!MISTRAL_API_KEY) {
      console.error('MISTRAL_API_KEY is not configured');
      throw new Error('MISTRAL_API_KEY is not configured');
    }

    console.log('Sending request to Mistral API with', messages.length, 'messages');

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MISTRAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral-large-latest',
        messages: [
          { role: 'system', content: BOOK_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Mistral API error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Limite de requêtes atteinte, veuillez réessayer plus tard.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 401) {
        return new Response(JSON.stringify({ error: 'Clé API Mistral invalide.' }), {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      return new Response(JSON.stringify({ error: 'Erreur du service IA' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Mistral API response received, streaming...');

    return new Response(response.body, {
      headers: { ...corsHeaders, 'Content-Type': 'text/event-stream' },
    });
  } catch (error) {
    console.error('Chat error:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Erreur inconnue' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
