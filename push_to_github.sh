#!/bin/bash

# ==============================================================================
# Helper Script to Push Sujit_Personal_Portfolio to GitHub
# ==============================================================================

echo "🚀 Preparing Sujit_Personal_Portfolio for GitHub..."

# Add all changed files
git add .

# Prompt for commit message or use default
COMMIT_MSG="Update Sujit More Portfolio Web App"
if [ ! -z "$1" ]; then
  COMMIT_MSG="$1"
fi

git commit -m "$COMMIT_MSG"

echo "📡 Pushing to remote GitHub repository (main branch)..."
git push -u origin main

echo "✅ Push completed! Check your deployment on https://Sujitmore.github.io/"
