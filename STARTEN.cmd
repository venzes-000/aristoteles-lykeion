@echo off
cd /d "%~dp0"
set "LYKEION_NODE=node"
where node >nul 2>nul
if errorlevel 1 (
  if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" (
    set "LYKEION_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
  ) else (
    echo Bitte Node.js 20 oder neuer installieren. Danach diese Datei erneut starten.
    pause
    exit /b 1
  )
)
echo Aristoteles startet. Im Browser http://localhost:4173 oeffnen.
echo Dieses Fenster waehrend des Vortrags geoeffnet lassen.
"%LYKEION_NODE%" scripts/serve.mjs dist
pause
