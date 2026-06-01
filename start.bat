@echo off
echo.
echo  LA HAUT V2 - Serveur local
echo  ===========================
echo  Site disponible sur : http://lahaut.local
echo.
echo  IMPORTANT : Local WP doit etre ouvert (pour le routeur).
echo  Si lahaut.local ne fonctionne pas, ouvre Local WP d'abord.
echo.

cd /d "%~dp0"

:: Refresh PATH for Node.js
set PATH=%PATH%;C:\Program Files\nodejs

:: Start static server on port 10010 (routé depuis lahaut.local par Local WP)
npx serve . -l 10010 --no-clipboard

pause
