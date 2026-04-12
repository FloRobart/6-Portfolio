#!/bin/sh

# Ce script permet de lancer/mettre à jour la version dockerisée du portfolio
# Usage :
#   - Pour lancer le portfolio : ./run.sh
#   - Pour mettre à jour le portfolio : ./run.sh

docker compose -f docker-compose.yml up -d --force-recreate portfolio-iscod --build
