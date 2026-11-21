@echo off
title Fuzion Academy Photo Scanner
echo ========================================================
echo   Fuzion Academy - Automatic Photo Scanner & Sync
echo ========================================================
echo Scanning local photos and updating Photo Studio...
powershell -ExecutionPolicy Bypass -File "%~dp0update-photos.ps1"
echo.
echo ========================================================
echo Done! You can now open or refresh photo-selector.html.
echo ========================================================
pause
