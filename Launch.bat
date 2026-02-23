@echo off
SET PATH=C:\Windows\System32;C:\Windows;C:\Program Files\nodejs;%PATH%
cd /d "C:\Users\T5M\Frone_AI_Fix"
echo Starting Frone AI Development Server...
echo ----------------------------------------
call npm install
echo ----------------------------------------
echo Launching Vite on http://localhost:5173
echo If the browser doesn't open, please visit http://localhost:5173 manually.
call npx vite --port 5173 --host 0.0.0.0
pause
