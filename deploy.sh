#!/bin/bash

# Script de déploiement sur GitHub Pages
# Ce script initialise git et pousse votre portfolio vers GitHub

echo "🚀 Déploiement du portfolio sur GitHub Pages..."
echo ""

# Vérifier si git est installé
if ! command -v git &> /dev/null; then
    echo "❌ Git n'est pas installé. Veuillez installer Git d'abord."
    exit 1
fi

# Aller dans le répertoire du projet
cd "$(dirname "$0")"

# Initialiser git si nécessaire
if [ ! -d ".git" ]; then
    echo "📦 Initialisation du dépôt Git..."
    git init
fi

# Ajouter le remote (ou le mettre à jour)
if git remote get-url origin &> /dev/null; then
    echo "🔄 Mise à jour du remote origin..."
    git remote set-url origin https://github.com/Imad-chamo/Portfolio.git
else
    echo "➕ Ajout du remote origin..."
    git remote add origin https://github.com/Imad-chamo/Portfolio.git
fi

# Ajouter tous les fichiers
echo "📝 Ajout des fichiers..."
git add .

# Créer un commit
echo "💾 Création du commit..."
git commit -m "Mise à jour du portfolio - nouvelle version" || {
    echo "⚠️  Aucun changement à commiter, ou erreur lors du commit."
}

# Créer/renommer la branche main
git branch -M main

# Demander confirmation avant de forcer le push
echo ""
echo "⚠️  ATTENTION: Cette opération va remplacer l'ancienne version sur GitHub."
read -p "Voulez-vous continuer? (o/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Oo]$ ]]; then
    echo "⬆️  Envoi vers GitHub..."
    git push -u origin main --force
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Déploiement réussi!"
        echo ""
        echo "📋 Prochaines étapes:"
        echo "1. Allez sur https://github.com/Imad-chamo/Portfolio/settings/pages"
        echo "2. Activez GitHub Pages depuis la branche 'main'"
        echo "3. Votre site sera disponible sur https://imad-chamo.github.io/Portfolio/"
        echo ""
    else
        echo "❌ Erreur lors de l'envoi. Vérifiez vos permissions GitHub."
    fi
else
    echo "❌ Opération annulée."
fi

