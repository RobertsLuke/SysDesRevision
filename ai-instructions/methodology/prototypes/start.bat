@echo off
echo.
echo ========================================
echo  Teaching Prototype - Server Startup
echo ========================================
echo.

REM Kill anything on port 3000
echo Checking for processes on port 3000...
set FOUND_PROCESS=0
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
    set FOUND_PROCESS=1
    echo Found process using port 3000 (PID: %%a)
    echo Killing process...
    taskkill /F /PID %%a
    if errorlevel 1 (
        echo [ERROR] Failed to kill process %%a
        echo Try running as Administrator or manually kill it with: taskkill /F /PID %%a
        pause
        exit /b 1
    ) else (
        echo [OK] Process killed successfully
    )
)

if %FOUND_PROCESS%==0 (
    echo No process found on port 3000 - good to go!
)

REM Wait a moment for the port to be released
echo.
timeout /t 2 /nobreak >nul

echo Starting server...
echo.
echo If you see errors below, make sure you ran "npm install" first!
echo.

REM Start the server
npm start

if errorlevel 1 (
    echo.
    echo [ERROR] Server failed to start!
    echo.
    echo Common fixes:
    echo   1. Run: npm install
    echo   2. Check Node.js is installed: node --version
    echo   3. Check if port 3000 is still in use
    echo.
    pause
    exit /b 1
)

echo.
echo Server stopped.
pause
