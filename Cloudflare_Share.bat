@echo off
title Frone AI - Cloudflare Quick Tunnel
echo ==========================================
echo    Frone AI - Cloudflare Demo Sharer
echo ==========================================
echo.

where cloudflared >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] cloudflared not found. Attempting auto-install via winget...
    echo winget install --id Cloudflare.cloudflared
    winget install --id Cloudflare.cloudflared --accept-package-agreements --accept-source-agreements
    if %errorlevel% neq 0 (
        echo [!] Winget installation failed. Please install manually from:
        echo https://github.com/cloudflare/cloudflared/releases
        pause
        exit /b
    )
    echo [v] cloudflared installed successfully.
    echo Please RESTART this script to refresh environment paths.
    pause
    exit /b
)

echo [1] Ensuring Vite is (hopefully) running on port 5173...
echo [2] Starting Cloudflare Quick Tunnel...
echo.
echo =======================================================
echo LOOK FOR THE URL ENDING IN .trycloudflare.com BELOW
echo =======================================================
echo.
cloudflared tunnel --url http://localhost:5173
echo.
echo Tunnel closed.
pause
