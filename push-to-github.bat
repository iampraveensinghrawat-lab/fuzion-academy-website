@echo off
title Pushing Fuzion Academy Website to GitHub...
cd /d "%~dp0"
echo =================================================================
echo        FUZION ACADEMY - PUSH WEBSITE TO GITHUB
echo =================================================================
echo Target: https://github.com/iampraveensinghrawat-lab/fuzion-academy-website.git
echo Branch: main
echo.
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Successfully pushed Fuzion Academy website to GitHub!
    echo Repository: https://github.com/iampraveensinghrawat-lab/fuzion-academy-website
) else (
    echo [NOTICE] If the repository does not exist yet on GitHub, please create it at:
    echo https://github.com/new
    echo Name: fuzion-academy-website (Leave "Add a README" UNCHECKED)
)
echo.
pause
